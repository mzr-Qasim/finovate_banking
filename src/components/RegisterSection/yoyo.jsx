


import { useState } from "react";
import "./register.scss";
import securityQuestions from "../../data/securityQuestions";

// ─── Constants ───────────────────────────────────────────────────────────────

const TOTAL_STEPS = 5;

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_SIZE_MB = 2;

// ─── Regex patterns ───────────────────────────────────────────────────────────

const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  // Pakistani mobile: 03XX-XXXXXXX (11 digits, starts with 03)
  phone: /^03[0-9]{9}$/,
  // Password: min 8 chars, at least one uppercase, one digit, one special char
  password: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
  // CNIC: XXXXX-XXXXXXX-X
  cnic: /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/,
  // OTP: 4 to 6 digits
  otp: /^[0-9]{4,6}$/,
  // Monthly income: digits only
  income: /^[0-9]+$/,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Formats a raw digit string into CNIC format: XXXXX-XXXXXXX-X
 * Called inside a dedicated CNIC change handler.
 */
const formatCnic = (raw) => {
  const digits = raw.replace(/[^0-9]/g, "").slice(0, 13);
  if (digits.length <= 5) return digits;
  if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
};

/**
 * Returns true if the user is at least 18 years old based on the given date string.
 */
const isAtLeast18 = (dateString) => {
  const dob = new Date(dateString);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
  return age > 18 || (age === 18 && hasHadBirthdayThisYear);
};

// ─── Inline error display ─────────────────────────────────────────────────────

const FieldError = ({ name, errors }) =>
  errors[name] ? (
    <div className="invalid-feedback d-block" role="alert">
      {errors[name]}
    </div>
  ) : null;

// ─── Component ────────────────────────────────────────────────────────────────

function RegisterSection() {
  // All hooks at the top — required by React rules of hooks
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    otp: "",
    cnic: "",
    city: "",
    state: "",
    date_of_birth: "",
    full_address: "",
    security_question_id: "",
    security_answer: "",
    occupation: "",
    monthly_income: "",
    profile_picture: null,
  });

  // ── Handlers ────────────────────────────────────────────────────────────────

  /**
   * Generic change handler — uses functional updater to avoid stale state.
   * Also clears the error for the changed field on each keystroke.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /**
   * Dedicated CNIC handler — auto-formats input into XXXXX-XXXXXXX-X as the
   * user types, so they never have to think about the dashes.
   */
  const handleCnicChange = (e) => {
    const formatted = formatCnic(e.target.value);
    setFormData((prev) => ({ ...prev, cnic: formatted }));
    if (errors.cnic) {
      setErrors((prev) => ({ ...prev, cnic: "" }));
    }
  };

  /**
   * File upload handler — validates type and size in JS before accepting the
   * file. The `accept` attribute on the input is UI-only and easily bypassed.
   */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        profile_picture: "Only JPG, PNG, or WEBP images are allowed",
      }));
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        profile_picture: `Image must be under ${MAX_FILE_SIZE_MB}MB`,
      }));
      e.target.value = "";
      return;
    }

    setErrors((prev) => ({ ...prev, profile_picture: "" }));
    setFormData((prev) => ({ ...prev, profile_picture: file }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: wire up API call here
  };

  // ── Validation ───────────────────────────────────────────────────────────────

  /**
   * Validates the current step and populates per-field error messages.
   * Returns true only when there are zero errors.
   */
  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.full_name.trim()) {
        newErrors.full_name = "Full name is required";
      } else if (formData.full_name.trim().length < 2) {
        newErrors.full_name = "Full name must be at least 2 characters";
      }

      if (!REGEX.email.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }

      const rawPhone = formData.phone_number.replace(/[-\s]/g, "");
      if (!REGEX.phone.test(rawPhone)) {
        newErrors.phone_number =
          "Enter a valid Pakistani phone number (e.g. 03001234567)";
      }

      if (!REGEX.password.test(formData.password)) {
        newErrors.password =
          "Password must be at least 8 characters and include an uppercase letter, a number, and a special character";
      }

      if (!formData.confirm_password) {
        newErrors.confirm_password = "Please confirm your password";
      } else if (formData.password !== formData.confirm_password) {
        newErrors.confirm_password = "Passwords do not match";
      }
    }

    if (currentStep === 2) {
      if (!REGEX.otp.test(formData.otp)) {
        newErrors.otp = "OTP must be 4–6 digits";
      }
    }

    if (currentStep === 3) {
      if (!REGEX.cnic.test(formData.cnic)) {
        newErrors.cnic = "CNIC must follow the format: 12345-1234567-1";
      }

      if (!formData.city.trim()) {
        newErrors.city = "City is required";
      }

      if (!formData.state.trim()) {
        newErrors.state = "Province / State is required";
      }

      if (!formData.date_of_birth) {
        newErrors.date_of_birth = "Date of birth is required";
      } else if (!isAtLeast18(formData.date_of_birth)) {
        newErrors.date_of_birth = "You must be at least 18 years old to register";
      }

      if (!formData.full_address.trim()) {
        newErrors.full_address = "Full address is required";
      }
    }

    if (currentStep === 4) {
      if (!formData.security_question_id) {
        newErrors.security_question_id = "Please select a security question";
      }

      if (!formData.security_answer.trim() || formData.security_answer.trim().length < 3) {
        newErrors.security_answer = "Security answer must be at least 3 characters";
      }
    }

    // Step 5 is optional — no required fields
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Navigation ───────────────────────────────────────────────────────────────

  const nextStep = () => {
    if (!validateStep(step)) return;

    // confirm_password has no use beyond step 1 — clear it from memory
    if (step === 1) {
      setFormData((prev) => ({ ...prev, confirm_password: "" }));
    }

    if (step < TOTAL_STEPS) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  // ── Step indicator config ────────────────────────────────────────────────────

  const STEPS_CONFIG = [
    { label: "Basic Information", icon: "icon-basic-information" },
    { label: "OTP Verification", icon: "icon-otp-verification" },
    { label: "Identity Details", icon: "icon-identity-details" },
    { label: "Security Setup", icon: "icon-security-setup" },
    { label: "Profile", icon: "icon-profile" },
  ];

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <section className="register-section">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-sm">
              <form onSubmit={submitHandler} noValidate>
                <div className="card-body p-4">

                  {/* ── Progress bar ── */}
                  <div className="progress mb-4" style={{ height: "3px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                      aria-valuenow={(step / TOTAL_STEPS) * 100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>

                  {/* ── Step indicators ── */}
                  <div className="signup-steps-ui d-flex justify-content-between mb-5">
                    {STEPS_CONFIG.map((s, index) => {
                      const stepNumber = index + 1;
                      const isActive = step === stepNumber;
                      const isCompleted = step > stepNumber;
                      return (
                        <div
                          key={stepNumber}
                          className="d-flex flex-column align-items-center"
                        >
                          <div
                            className={[
                              "signup-steps rounded-circle mb-2",
                              isActive ? "active-step" : "",
                              isCompleted ? "completed-step" : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          >
                            <i
                              className={
                                isCompleted ? "icon-confirm" : s.icon
                              }
                            />
                          </div>
                          <div className="text-muted small">{s.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* ═══════════════════════════════════════════════════════
                      Step 1 — Personal Information
                  ═══════════════════════════════════════════════════════ */}
                  {step === 1 && (
                    <div className="step active" id="step1">
                      <h4 className="mb-4">Personal Information</h4>

                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
                          onChange={handleChange}
                          value={formData.full_name}
                          maxLength={100}
                          autoComplete="name"
                        />
                        <FieldError name="full_name" errors={errors} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          onChange={handleChange}
                          value={formData.email}
                          maxLength={254}
                          autoComplete="email"
                        />
                        <FieldError name="email" errors={errors} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone_number"
                          className={`form-control ${errors.phone_number ? "is-invalid" : ""}`}
                          onChange={handleChange}
                          value={formData.phone_number}
                          maxLength={11}
                          inputMode="numeric"
                          placeholder="03001234567"
                          autoComplete="tel"
                        />
                        <FieldError name="phone_number" errors={errors} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          className={`form-control ${errors.password ? "is-invalid" : ""}`}
                          onChange={handleChange}
                          value={formData.password}
                          maxLength={128}
                          autoComplete="new-password"
                        />
                        <FieldError name="password" errors={errors} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          name="confirm_password"
                          className={`form-control ${errors.confirm_password ? "is-invalid" : ""}`}
                          onChange={handleChange}
                          value={formData.confirm_password}
                          maxLength={128}
                          autoComplete="new-password"
                        />
                        <FieldError name="confirm_password" errors={errors} />
                      </div>

                      <div className="d-flex justify-content-end mt-4">
                        <button
                          type="button"
                          className="theme-button main_theme_button px-4"
                          onClick={nextStep}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ═══════════════════════════════════════════════════════
                      Step 2 — OTP Verification
                  ═══════════════════════════════════════════════════════ */}
                  {step === 2 && (
                    <div className="step" id="step2">
                      <h4 className="mb-4">OTP Verification</h4>

                      <div className="mb-3">
                        <label className="form-label">
                          Enter OTP{" "}
                          <span className="text-muted small">
                            (valid for 5 minutes)
                          </span>
                        </label>
                        <input
                          type="text"
                          name="otp"
                          className={`form-control ${errors.otp ? "is-invalid" : ""}`}
                          inputMode="numeric"
                          onChange={handleChange}
                          value={formData.otp}
                          maxLength={6}
                          autoComplete="one-time-code"
                        />
                        <FieldError name="otp" errors={errors} />
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <button
                          type="button"
                          className="btn btn-outline-secondary px-4"
                          onClick={prevStep}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          className="theme-button main_theme_button px-4"
                          onClick={nextStep}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ═══════════════════════════════════════════════════════
                      Step 3 — Identity Details
                  ═══════════════════════════════════════════════════════ */}
                  {step === 3 && (
                    <div className="step" id="step3">
                      <h4 className="mb-4">Identity Details</h4>

                      <div className="mb-3">
                        <label className="form-label">CNIC / National ID</label>
                        <input
                          type="text"
                          name="cnic"
                          className={`form-control ${errors.cnic ? "is-invalid" : ""}`}
                          onChange={handleCnicChange}
                          value={formData.cnic}
                          maxLength={15}
                          inputMode="numeric"
                          placeholder="12345-1234567-1"
                        />
                        <FieldError name="cnic" errors={errors} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          name="city"
                          className={`form-control ${errors.city ? "is-invalid" : ""}`}
                          onChange={handleChange}
                          value={formData.city}
                          maxLength={100}
                          autoComplete="address-level2"
                        />
                        <FieldError name="city" errors={errors} />
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">State / Province</label>
                          <input
                            type="text"
                            name="state"
                            className={`form-control ${errors.state ? "is-invalid" : ""}`}
                            onChange={handleChange}
                            value={formData.state}
                            maxLength={100}
                            autoComplete="address-level1"
                          />
                          <FieldError name="state" errors={errors} />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Date of Birth</label>
                          <input
                            type="date"
                            name="date_of_birth"
                            className={`form-control ${errors.date_of_birth ? "is-invalid" : ""}`}
                            onChange={handleChange}
                            value={formData.date_of_birth}
                            max={new Date().toISOString().split("T")[0]}
                          />
                          <FieldError name="date_of_birth" errors={errors} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Full Address</label>
                        <input
                          type="text"
                          name="full_address"
                          className={`form-control ${errors.full_address ? "is-invalid" : ""}`}
                          onChange={handleChange}
                          value={formData.full_address}
                          maxLength={300}
                          autoComplete="street-address"
                        />
                        <FieldError name="full_address" errors={errors} />
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <button
                          type="button"
                          className="btn btn-outline-secondary px-4"
                          onClick={prevStep}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          className="theme-button main_theme_button px-4"
                          onClick={nextStep}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ═══════════════════════════════════════════════════════
                      Step 4 — Security Setup
                  ═══════════════════════════════════════════════════════ */}
                  {step === 4 && (
                    <div className="step" id="step4">
                      <h4 className="mb-4">Security Setup</h4>

                      <div className="mb-3">
                        <label className="form-label">Security Question</label>
                        <select
                          name="security_question_id"
                          className={`form-select ${errors.security_question_id ? "is-invalid" : ""}`}
                          onChange={handleChange}
                          value={formData.security_question_id}
                        >
                          {/* value="" so the empty guard in validateStep works correctly */}
                          <option value="">Select a security question</option>
                          {securityQuestions.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.question}
                            </option>
                          ))}
                        </select>
                        <FieldError name="security_question_id" errors={errors} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Security Answer</label>
                        <input
                          type="text"
                          name="security_answer"
                          className={`form-control ${errors.security_answer ? "is-invalid" : ""}`}
                          onChange={handleChange}
                          value={formData.security_answer}
                          maxLength={200}
                          autoComplete="off"
                        />
                        <FieldError name="security_answer" errors={errors} />
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <button
                          type="button"
                          className="btn btn-outline-secondary px-4"
                          onClick={prevStep}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          className="theme-button main_theme_button px-4"
                          onClick={nextStep}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ═══════════════════════════════════════════════════════
                      Step 5 — Profile (all fields optional)
                  ═══════════════════════════════════════════════════════ */}
                  {step === 5 && (
                    <div className="step" id="step5">
                      <h4 className="mb-4">Profile</h4>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">
                            Occupation{" "}
                            <span className="text-muted small">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            name="occupation"
                            className="form-control"
                            onChange={handleChange}
                            value={formData.occupation}
                            maxLength={100}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label className="form-label">
                            Monthly Income{" "}
                            <span className="text-muted small">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            name="monthly_income"
                            className={`form-control ${errors.monthly_income ? "is-invalid" : ""}`}
                            inputMode="numeric"
                            onChange={(e) => {
                              // Allow only digits
                              if (
                                e.target.value === "" ||
                                REGEX.income.test(e.target.value)
                              ) {
                                handleChange(e);
                              }
                            }}
                            value={formData.monthly_income}
                            maxLength={12}
                          />
                          <FieldError name="monthly_income" errors={errors} />
                        </div>

                        <div className="col-md-12">
                          <label className="form-label mb-2">
                            Profile Picture{" "}
                            <span className="text-muted small">(Optional)</span>
                          </label>
                          <input
                            type="file"
                            id="imgUpload"
                            name="profile_picture"
                            className={`form-control ${errors.profile_picture ? "is-invalid" : ""}`}
                            accept="image/jpeg,image/png,image/webp"
                            onChange={handleFileChange}
                          />
                          <FieldError name="profile_picture" errors={errors} />
                          <div className="form-text">
                            JPG, PNG, or WEBP · max {MAX_FILE_SIZE_MB}MB
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <button
                          type="button"
                          className="btn btn-outline-secondary px-4"
                          onClick={prevStep}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="theme-button main_theme_button px-4"
                        >
                          Create Account
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;









import { useState } from "react";
import "./register.scss";
import securityQuestions from "../../data/securityQuestions";


function RegisterSection() {

 

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

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [step, setStep] = useState(1);

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return (
          formData.full_name &&
          formData.email &&
          formData.phone_number &&
          formData.password &&
          formData.confirm_password
        );

      case 2:
        return formData.otp;

      case 3:
        return (
          formData.cnic &&
          formData.city &&
          formData.state &&
          formData.date_of_birth &&
          formData.full_address
        );

      case 4:

        return formData.security_question_id && formData.security_answer;

      case 5:
        return true;

      default:
        return false;
    }
  };

  const nextStep = () => {
    if (!validateStep(step)) {
      alert("Please fill all required fields before continuing");
      return;
    }

    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <section className="register-section">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="card shadow-sm">
                <form onSubmit={submitHandler}>
                  <div className="card-body p-4">
                    <div className="progress mb-4" style={{ height: "3px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${step * 20}%` }}
                      ></div>
                    </div>

                    <div className="signup-steps-ui d-flex justify-content-between mb-5">
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className={`signup-steps rounded-circle mb-2 ${step === 1 ? "active-step " : ""}     ${step > 1 ? "completed-step" : ""}`}
                        >
                          {step > 1 ? (
                            <i className="icon-confirm"></i>
                          ) : (
                            <i className="icon-basic-information"></i>
                          )}
                        </div>
                        <div className="text-muted small">
                          Basic Information
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className={`signup-steps rounded-circle mb-2  ${step === 2 ? "active-step " : ""}     ${step > 2 ? "completed-step" : ""}`}
                        >
                          {step > 2 ? (
                            <i className="icon-confirm"></i>
                          ) : (
                            <i className="icon-otp-verification"></i>
                          )}
                        </div>
                        <div className="text-muted small">OTP Verification</div>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className={`signup-steps rounded-circle mb-2  ${step === 3 ? "active-step " : ""}     ${step > 3 ? "completed-step" : ""}`}
                        >
                          {step > 3 ? (
                            <i className="icon-confirm"></i>
                          ) : (
                            <i className="icon-identity-details"></i>
                          )}
                        </div>
                        <div className="text-muted small">Identity Details</div>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className={`signup-steps rounded-circle mb-2  ${step === 4 ? "active-step " : ""}     ${step > 4 ? "completed-step" : ""}`}
                        >
                          {step > 4 ? (
                            <i className="icon-confirm"></i>
                          ) : (
                            <i className="icon-security-setup"></i>
                          )}
                        </div>
                        <div className="text-muted small">Security Setup</div>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className={`signup-steps rounded-circle mb-2 ${step === 5 ? "active-step " : ""}`}
                        >
                          <i className="icon-profile"></i>
                        </div>
                        <div className="text-muted small">Profile</div>
                      </div>
                    </div>
                    {step === 1 && (
                      <div className="step active" id="step1">
                        <h4 className="mb-4">Personal Information</h4>
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <input
                            type="text"
                            name="full_name"
                            className="form-control"
                            required
                            onChange={handleChange}
                            value={formData.full_name}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            required
                            onChange={handleChange}
                            value={formData.email}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="tel"
                            name="phone_number"
                            className="form-control"
                            required
                            onChange={handleChange}
                            value={formData.phone_number}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            required
                            onChange={handleChange}
                            value={formData.password}
                            name="password"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            required
                            onChange={handleChange}
                            name="confirm_password"
                            value={formData.confirm_password}
                          />
                        </div>

                        <div className="d-flex justify-content-end mt-4">
                          <button
                            className="theme-button  main_theme_button px-4"
                            onClick={nextStep}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="step " id="step2">
                        <h4 className="mb-4">OTP Verification</h4>
                        <label className="form-label">
                          Enter OTP (OTP valid for 5 minutes)
                        </label>
                        <input
                          className="form-control"
                          required
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          onChange={handleChange}
                          name="otp"
                          value={formData.otp}
                        />
                        <div className="d-flex justify-content-between mt-4">
                          <button
                            className="btn btn-outline-secondary px-4"
                            onClick={prevStep}
                          >
                            Back
                          </button>
                          <button
                            className="theme-button  main_theme_button px-4"
                            onClick={nextStep}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="step " id="step2">
                        <h4 className="mb-4">Identity Details</h4>
                        <div className="mb-3">
                          <label className="form-label">
                            CNIC / National ID
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            onChange={handleChange}
                            inputMode="numeric"
                            name="cnic"
                            pattern="[0-9]*"
                            value={formData.cnic}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">City</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            onChange={handleChange}
                            name="city"
                            value={formData.city}
                          />
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label">State</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              onChange={handleChange}
                              name="state"
                              value={formData.state}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Date of Birth</label>
                            <input
                              type="date"
                              className="form-control"
                              required
                              onChange={handleChange}
                              name="date_of_birth"
                              value={formData.date_of_birth}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <label className="form-label">Full Address</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              onChange={handleChange}
                              name="full_address"
                              value={formData.full_address}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                          <button
                            className="btn btn-outline-secondary px-4"
                            onClick={prevStep}
                          >
                            Back
                          </button>
                          <button
                            className="theme-button  main_theme_button px-4"
                            onClick={nextStep}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                    {step === 4 && (
                      <div className="step" id="step3">
                        <h4 className="mb-4">Security Setup</h4>
                        <div className="mb-3">
                          <label className="form-label">
                            Security Question
                          </label>
                          <select
                            className="form-select"
                            onChange={handleChange}
                            name="security_question_id"
                            value={formData.security_question_id}
                          >
                            <option>Select a security question</option>
                            {securityQuestions.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.question}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Security Answer</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            onChange={handleChange}
                            name="security_answer"
                            value={formData.security_answer}
                          />
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                          <button
                            className="btn btn-outline-secondary px-4"
                            onClick={prevStep}
                          >
                            Back
                          </button>
                          <button
                            className="theme-button  main_theme_button px-4"
                            onClick={nextStep}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                    {step === 5 && (
                      <div className="step" id="step5">
                        <h4 className="mb-4">Profile</h4>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label">
                              Occupation (Optional)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              onChange={handleChange}
                              name="occupation"
                              value={formData.occupation}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Monthly Income (Optional)
                            </label>
                            <input
                              className="form-control"
                              required
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              onChange={handleChange}
                              name="monthly_income"
                              value={formData.monthly_income}
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="form-label mb-3">
                              Profile Picture (Optional)
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="imgUpload"
                              name="profile_picture"
                              accept="image/*"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  profile_picture: e.target.files[0],
                                })
                              }
                            ></input>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                          <button
                            className="btn btn-outline-secondary px-4"
                            onClick={prevStep}
                          >
                            Back
                          </button>
                          <button
                            className="theme-button  main_theme_button px-4"
                            type="submit"
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
    </>
  );
}

export default RegisterSection;

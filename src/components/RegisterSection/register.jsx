import "./register.scss";
import { useState } from "react";

function RegisterSection() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
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
                      <div className="text-muted small">Basic Information</div>
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
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          required
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
                        OTP Verification (OTP valid for 5 minutes)
                      </label>
                      <input
                        className="form-control"
                        required
                        type="text"
                        inputmode="numeric"
                        pattern="[0-9]*"
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
                        <label className="form-label">CNIC / National ID</label>
                        <input
                          type="number"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">State</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Date of Birth</label>
                          <input
                            type="date"
                            className="form-control"
                            required
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
                        <label className="form-label">Security Question</label>
                        <select className="form-select">
                          <option>Select a security question</option>
                          <option>What is your mother's maiden name?</option>
                          <option>What was your first school?</option>
                          <option>What is your favorite food?</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Security Answer</label>
                        <input type="text" className="form-control" required />
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
                    <div className="step" id="step4">
                      <h4 className="mb-4">Profile</h4>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Occupation</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Monthly Income</label>
                          <input
                            className="form-control"
                            required
                            type="text"
                            inputmode="numeric"
                            pattern="[0-9]*"
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="form-label mb-3">
                            Profile Picture
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="imgUpload"
                            name="imgUpload"
                            accept="image/*"
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
                          onClick={nextStep}
                        >
                          Create Account
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterSection;

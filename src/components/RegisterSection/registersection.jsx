import './registersection.scss';


function RegisterSection() {
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
                      style={{ width: "20%" }}
                    ></div>
                  </div>

                  <div className="d-flex justify-content-between mb-5">
                    <div className="d-flex flex-column align-items-center">
                      <div className="btn btn-primary rounded-circle mb-2">
                        <i className="bi bi-person-fill"></i>
                      </div>
                      <div className="text-muted small">Personal</div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <div className="btn btn-secondary rounded-circle mb-2">
                        <i className="bi bi-house-fill"></i>
                      </div>
                      <div className="text-muted small">Address</div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <div className="btn btn-secondary rounded-circle mb-2">
                        <i className="bi bi-credit-card-fill"></i>
                      </div>
                      <div className="text-muted small">Payment</div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <div className="btn btn-secondary rounded-circle mb-2">
                        <i className="bi bi-list-check"></i>
                      </div>
                      <div className="text-muted small">Review</div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <div className="btn btn-secondary rounded-circle mb-2">
                        <i className="bi bi-check-lg"></i>
                      </div>
                      <div className="text-muted small">Confirm</div>
                    </div>
                  </div>

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
                    <div className="d-flex justify-content-end mt-4">
                      <button className="btn btn-primary px-4">Next</button>
                    </div>
                  </div>

                  <div className="step d-none" id="step2">
                    <h4 className="mb-4">Address Details</h4>
                    <div className="mb-3">
                      <label className="form-label">Street Address</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">City</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">State</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">ZIP Code</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button className="btn btn-outline-secondary px-4">
                        Back
                      </button>
                      <button className="btn btn-primary px-4">Next</button>
                    </div>
                  </div>

                  <div className="step d-none" id="step3">
                    <h4 className="mb-4">Payment Information</h4>
                    <div className="mb-3">
                      <label className="form-label">Card Number</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Expiration Date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">CVV</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button className="btn btn-outline-secondary px-4">
                        Back
                      </button>
                      <button className="btn btn-primary px-4">Next</button>
                    </div>
                  </div>

                  <div className="step d-none" id="step4">
                    <h4 className="mb-4">Review Information</h4>
                    <div className="review-section mb-4">
                      <h6>Personal Information</h6>
                      <p className="mb-1">John Doe</p>
                      <p className="mb-1">john@example.com</p>
                      <p>+1 234 567 8900</p>
                    </div>
                    <div className="review-section mb-4">
                      <h6>Address</h6>
                      <p className="mb-1">123 Main Street</p>
                      <p>New York, NY 10001</p>
                    </div>
                    <div className="review-section mb-4">
                      <h6>Payment</h6>
                      <p>Card ending in ****1234</p>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button className="btn btn-outline-secondary px-4">
                        Back
                      </button>
                      <button className="btn btn-success px-4">Confirm</button>
                    </div>
                  </div>

                  <div className="step d-none" id="step5">
                    <div className="text-center py-4">
                      <div className="display-1 text-success mb-3">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <h4 className="mb-3">Thank You!</h4>
                      <p className="text-muted mb-4">
                        Your submission has been received and processed
                        successfully.
                      </p>
                      <button className="btn btn-primary px-4">Start Over</button>
                    </div>
                  </div>
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

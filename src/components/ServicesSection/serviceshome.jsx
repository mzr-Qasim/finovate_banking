import "./serviceshome.scss";


function ServicesHome() {

  return (
    <section className="services section-space">
      <div className="container container-sm">
        <div className="section_heading d-flex flex-column justify_center text-center section-space-md">
          <h2>
            Everything you need for<span> modern banking.</span>
          </h2>
          <p className="theme_para">
            Secure, fast, and transparent financial tools designed for everyday
            users.
            <span>
              Manage your money, track transactions, and stay in control
              anytime.
            </span>
          </p>
        </div>
        <div className="service-cards">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card-inner" data-aos="fade-up">
                <i className="icon icon-account-management"></i>
                <h4 className="heading">Account Management</h4>
                <p className="detail theme_para">
                  View and manage your bank account balance, details, and
                  activity in real time.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-inner" data-aos="fade-up" data-aos-delay="100">
                <i className="icon icon-money-transfer"></i>
                <h4 className="heading">Money Transfers</h4>
                <p className="detail theme_para">
                  Send and receive money instantly between accounts with secure
                  processing.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-inner" data-aos="fade-up" data-aos-delay="200">
                <i className="icon icon-secure-banking"></i>
                <h4 className="heading">Secure Banking</h4>
                <p className="detail theme_para">
                  Your data and transactions are protected with
                  industry-standard encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHome;

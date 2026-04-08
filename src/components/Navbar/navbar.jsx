import { Link } from "react-router";
import './navbar.scss' ;


function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg main-navbar">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              <img
                className="site-logo"
                src="assets/images/main-logo.svg"
                alt="df"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="icon-navbar-hamburger"></i>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="ms-auto mb-2 mb-lg-0 navbar-nav" >
                <li className="nav-item">
                  <Link
                    className="nav-link theme-links theme-links-animation"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link theme-links theme-links-animation"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link theme-links theme-links-animation"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link theme-links theme-links-animation"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link theme-links theme-links-animation"
                    to={"/login"}
                  >
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="offcanvas-end offcanvas"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand" to={"/"}>
              <img
                className="offcanvas-logo"
                src="assets/images/main-logo.svg"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="icon-hamburger-close"></i>
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link theme-links" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link theme-links" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link theme-links" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link theme-links" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link theme-links" to={"/"}>
                  Home
                </Link>
              </li>
            </ul>
            <ul className="contact-info-navbar">
              <li>
                <Link to={"/"}>
                  <span>
                    <i className="icon-call-us"></i>
                  </span>
                  (704) 555-0127 00 22
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <span>
                    <i className="icon-email"></i>
                  </span>
                  3@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

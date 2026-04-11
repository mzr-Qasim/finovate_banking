import { Link } from "react-router";
import './navbar.scss' ;
import logo from "../../assets/images/logo.svg";
import { useState} from "react";


// class Navbar        .show  



function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const navbarShow = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg main-navbar">
          <div className="container container-md">
            <Link className="navbar-brand" to={"/"}>
              <img
                className="site-logo"
                src={logo}
                alt="df"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              onClick={navbarShow}
             
            >
              <i className="icon-hamburger"></i>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="ms-auto mb-2 mb-lg-0 navbar-nav" >
                <li className="nav-item">
                  <Link
                    className="nav-link theme-links theme-links-animation"
                    to={"/"}
                  >
                    home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link theme-links theme-links-animation"
                    to={"dashboard/"}
                  >
                    services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link theme-links theme-links-animation"
                    to={"login/"}
                  >
                    login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link theme-links theme-links-animation"
                    to={"register/"}
                  >
                    dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className={`offcanvas offcanvas-end ${showNavbar ? 'show' : ''}`}
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand" to={"/"}>
              <img
                className="offcanvas-logo"
                src={logo}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={navbarShow}
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
                <Link className="nav-link theme-links" to={"dashboard/"}>
                  services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link theme-links" to={"dashboard/"}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link theme-links" to={"dashboard/"}>
                  Login
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

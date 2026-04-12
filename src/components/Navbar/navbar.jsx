import "./navbar.scss";
import logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);




  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarShow = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header className="header">
        <nav
          className={`navbar navbar-expand-lg main-navbar ${scrolled ? "scrolled" : ""}`}
        >
          <div className="container container-md">
            <Link className="navbar-brand" to={"/"}>
              <img className="site-logo" src={logo} alt="df" />
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
              <ul className="ms-auto mb-2 mb-lg-0 navbar-nav">
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
          style={{
            visibility: showNavbar ? "visible" : "hidden",
            transition: "transform 0.3s ease, visibility 0.3s ease",
          }}
          className={`offcanvas w-100 offcanvas-end ${showNavbar ? "show" : ""}`}
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand" to={"/"}>
              <img className="offcanvas-logo" src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="btn-close   navbar-toggler"
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

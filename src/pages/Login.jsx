import { Link } from "react-router";
function LoginPage() {
  return (
    <section className="section-space-top">
      <h1>LoginPage</h1>
      <Link
        className="nav-link theme-links theme-links-animation"
        to={"/register/"}
      >
        register
      </Link>
    </section>
  );
}

export default LoginPage;

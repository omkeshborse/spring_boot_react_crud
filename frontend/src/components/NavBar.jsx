import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  bg-primary "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            Full Stack Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to={"/adduser"} className="btn btn-outline-light">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}

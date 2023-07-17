import { Link } from "react-router-dom";
import { NavbarBrand } from "react-bootstrap";

function MenuForm() {
  return (
    <>
      <nav class="navbar navbar-expand-lg  btn btn-primary">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="asset/images/logo_university.png"
                height="30"
                width="41" 
                alt="Home"
              />
            </NavbarBrand>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  News
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/home">
                  Contact
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
export default MenuForm;

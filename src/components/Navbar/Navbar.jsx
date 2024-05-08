import { useLocation, Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

// local needs
import "./Navbar.css";
import logo from "../Assets/logo_big.png";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const linksContainer = document.querySelector(".links-container");
    const menu = document.querySelector(".menu");

    if (+window.innerWidth < 798) {
      linksContainer.setAttribute("mobile", true);
      menu.style.display = "inline-block";
    } else {
      linksContainer.setAttribute("mobile", false);
      menu.style.display = "none";
    }
    window.onresize = () => {
      if (+window.innerWidth < 798) {
        linksContainer.setAttribute("mobile", true);
        menu.style.display = "inline-block";
      } else {
        linksContainer.setAttribute("mobile", false);
        menu.style.display = "none";
      }
    };
  }, []);

  function openMenu() {
    const linksContainer = document.querySelector(".links-container");
    linksContainer.style.left = "0";
  }
  function closeMenu() {
    const linksContainer = document.querySelector(".links-container");
    linksContainer.style.left = "100%";
  }

  return (
    <>
      <nav className="d-flex align-items-center sticky-top bg-light border-2 border-bottom border-danger">
        <div className="container-lg d-flex justify-content-between align-items-center gap-5">
          {/* Logo */}
          <div className="logo d-flex align-items-center gap-3">
            <img src={logo} alt="logo" />
            <h1 className="h2 text-dark text-uppercase fw-bolder m-0">
              Shopper
            </h1>
          </div>

          <button className="menu fs-1 text-dark border-0" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div
            mobile="false"
            className="links-container text-end d-flex justify-content-between align-items-center h-100 w-100 p-4"
          >
            <button
              className="d-none fs-2 text-light border-0"
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            {/* Links */}
            <ul className="links d-flex flex-row gap-4 m-0 p-0">
              <li>
                <Link
                  to="/"
                  className={`${
                    location.pathname === "" || location.pathname === "/"
                      ? `active `
                      : ``
                  }text-dark text-decoration-none fs-5`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/men"
                  className={`${
                    location.pathname === "/men" ||
                    location.pathname === "/men/"
                      ? `active `
                      : ``
                  }text-dark text-decoration-none fs-5`}
                  onClick={closeMenu}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className={`${
                    location.pathname === "/women" ||
                    location.pathname === "/women/"
                      ? `active `
                      : ``
                  }text-dark text-decoration-none fs-5`}
                  onClick={closeMenu}
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className={`${
                    location.pathname === "/kids" ||
                    location.pathname === "/kids/"
                      ? `active `
                      : ``
                  }text-dark text-decoration-none fs-5`}
                  onClick={closeMenu}
                >
                  Kids
                </Link>
              </li>
            </ul>

            {/* Sign && Cart */}
            <div className="sign-cart d-flex align-items-center gap-3">
              <Link
                to="/cart"
                className="cart text-dark border-0"
                onClick={closeMenu}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="fs-2 bg-none"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

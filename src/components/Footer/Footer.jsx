import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

// local needs
import "./Footer.css";
import logo_big from "../Assets/logo_big.png";

const Footer = () => {
  return (
    <footer className="bg-dark py-4">
      <div className="container-lg text-center d-flex flex-column align-items-center">
        <div className="footer-logo d-flex align-items-center gap-3">
          <img src={logo_big} alt="logo" />
          <h1 className="text-light text-uppercase">Shopper</h1>
        </div>

        <ul className="footer-links d-flex align-items-center gap-3 my-3">
          <li>
            <Link className="d-block text-light text-decoration-none">
              Compony
            </Link>
          </li>
          <li>
            <Link className="d-block text-light text-decoration-none">
              Products
            </Link>
          </li>
          <li>
            <Link className="d-block text-light text-decoration-none">
              Offices
            </Link>
          </li>
          <li>
            <Link className="d-block text-light text-decoration-none">
              About
            </Link>
          </li>
          <li>
            <Link className="d-block text-light text-decoration-none">
              Contact
            </Link>
          </li>
        </ul>

        <ul className="footer-socialmedia d-flex align-items-center gap-3">
          <li>
            <a href="https://github.com/N6w9f" className="text-light h1">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </li>
          <li>
            <a href="https://github.com/N6w9f" className="text-light h1">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </li>
          <li>
            <a href="https://github.com/N6w9f" className="text-light h1">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </li>
        </ul>

        <hr className="rounded" />

        <p className="lead text-light text-capitalize">
          Copyright &copy; {new Date().getFullYear()} all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

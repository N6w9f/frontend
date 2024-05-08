import { Link } from "react-router-dom";

// local needs
import "./CSS/F404.css";

const F404 = () => {
  return (
    <>
      <section id="page404" className="bg-dark">
        <div className="container h-100">
          <div className="text">
            <h1>Page Not Found</h1>

            <ul className="menu">
              <li>
                <Link to="/">Go to Homepage</Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="image"
              src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default F404;

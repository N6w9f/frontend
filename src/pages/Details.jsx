import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// local needs
import "./CSS/Details.css";
import { useEffect, useState } from "react";
import { cart_add } from "../redux/Slices/cartSlice";

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState({});
  const image_url = useSelector((state) => state.urls.images);
  const url = useSelector((state) => state.urls.products);

  useEffect(() => {
    axios.get(url + params.id).then((res) => setProduct(res.data));
  }, [url, params.id]);

  function sizeHandler(e) {
    const buttons = [...document.querySelectorAll(`button[select]`)];
    buttons.forEach((button) => {
      button.setAttribute("select", "false");
    });
    e.target.setAttribute("select", "true");
  }

  async function addToCart(object) {
    dispatch(cart_add(object));
  }

  return (
    <>
      <main className="dvh100">
        <div className="container-lg d-flex flex-column justify-content-center gap-4 h-100">
          <div className="path">
            <p
              to="/home"
              className="d-inline-block fw-bolder text-dark text-decoration-none m-0"
            >
              home
            </p>
            <span>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />{" "}
            </span>
            <p
              to="/home"
              className="d-inline-block fw-bolder text-dark text-decoration-none m-0"
            >
              details
            </p>
            <span>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />{" "}
            </span>
            <p
              to="/home"
              className="d-inline-block fw-bolder text-dark text-decoration-none m-0"
            >
              {product.category}
            </p>
            <span>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />{" "}
            </span>
            <p
              to="/home"
              className="d-inline-block fw-bolder text-dark text-decoration-none m-0"
            >
              {product._id}
            </p>
          </div>

          <section className="product-details">
            <ul className="images d-flex flex-column gap-3 p-0 m-0">
              <li>
                <img
                  src={`${image_url}${product.image}`}
                  alt="Product"
                  className="w-100"
                />
              </li>
              <li>
                <img
                  src={`${image_url}${product.image}`}
                  alt="Product"
                  className="w-100"
                />
              </li>
              <li>
                <img
                  src={`${image_url}${product.image}`}
                  alt="Product"
                  className="w-100"
                />
              </li>
              <li>
                <img
                  src={`${image_url}${product.image}`}
                  alt="Product"
                  className="w-100"
                />
              </li>
            </ul>

            <img
              src={`${image_url}${product.image}`}
              alt="Product"
              className="w-100"
            />

            <div className="details ps-4">
              <h3 className="h2 text-dark">{product.title}</h3>

              <div className="stars my-3"></div>

              <div className="price d-flex align-items-center gap-3 my-3">
                <p className="lead text-decoration-line-through m-0">
                  $
                  {product.discount !== 0 &&
                    product.discount !== "0" &&
                    product.price}
                </p>
                <p className="lead text-danger m-0">
                  ${product.price - product.discount}
                </p>
              </div>

              <p className="description lead lh-sm my-3">
                {product.description}
              </p>

              <div className="sizes my-4">
                <h6 className="text-capitalize">Select size</h6>

                <ul className="s-m-l-xl-xxl d-flex align-items-center gap-2 p-0 my-2">
                  {product.sizes &&
                    product.sizes.map((size, index) => (
                      <li key={index}>
                        <button
                          select={index === 0 ? "true" : "false"}
                          onClick={sizeHandler}
                          className="btn btn-outline-dark btn-lg rounded-0 fw-bolder text-uppercase py-3 px-4"
                        >
                          {size === "md" ? "m" : size}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  addToCart({
                    id: product._id,
                    image: `${image_url}${product.image}`,
                    title: product.title,
                    price: product.price,
                    discount: product.discount,
                    quantity: 1,
                  });
                }}
                className="btn btn-danger btn-lg rounded-0 text-uppercase"
              >
                Add to cart
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Details;

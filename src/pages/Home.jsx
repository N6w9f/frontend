import { useSelector } from "react-redux";
// local needs
import "./CSS/Home.css";

import hand_icon from "../components/Assets/hand_icon.png";
import arrow from "../components/Assets/arrow.png";
import hero_image from "../components/Assets/hero_image.png";
import exclusive_image from "../components/Assets/exclusive_image.png";

import Title from "../components/Title/Title";
import ProductsList from "../components/ProductsLIst/ProductsList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const url = useSelector((state) => state.urls.products);
  const [inWomen, setInWomen] = useState([]);
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}women?limit=4&popular=true`)
      .then((res) => setInWomen(res.data.products));

    axios
      .get(`${url}?limit=8`)
      .then((res) => setNewCollection(res.data.products));
  }, [url]);
  return (
    <>
      {/* Landing page */}
      <main className="home dvh100 linear-background">
        <div className="container-lg d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center gap-5">
          <div className="text text-center text-lg-start">
            <p className="lead text-uppercase text-dark m-0">
              New arrivals only
            </p>

            <h3 className="special-h text-dark lh-1 m-0 mt-2 mb-4">
              new <img src={hand_icon} alt="hand_icon" /> <br />
              collections <br />
              for everyone
            </h3>

            <button className="btn btn-danger btn-lg rounded-2 px-5">
              Latest Collection <img src={arrow} alt="arrow" className="ms-1" />
            </button>
          </div>

          <img
            src={hero_image}
            alt="hero_image"
            className="d-none d-lg-block"
          />
        </div>
      </main>

      {/* Popular in women */}
      <section id="popular-in-women" className="mb-5 pb-5">
        <Title title="Popular in women" />
        <div className="container-lg grid-300">
          <ProductsList data={inWomen} />
        </div>
      </section>

      {/* Exclusive offers for you */}
      <section id="exclusive-offers-for-you" className="mb-5 pb-5">
        <div className="container-lg linear-background d-flex justify-content-center justify-content-xl-between align-items-center text-center text-xl-start p-5">
          <div className="text">
            <h3 className="special-h text-dark text-capitalize  m-0">
              Exclusive <br className="d-none d-xl-block" />
              offers for you
            </h3>
            <p className="lead text-dark text-uppercase mb-3">
              Only on best sellers products
            </p>
            <button className="btn btn-danger btn-lg rounded-2 px-5">
              Check now
            </button>
          </div>

          <img
            src={exclusive_image}
            alt="exclusive_image"
            className="d-none d-xl-block"
          />
        </div>
      </section>

      {/* New collections */}
      <section id="new-collections" className="mb-5 pb-5">
        <Title title="New collections" />
        <div className="container-lg grid-300">
          <ProductsList data={newCollection} />
        </div>
      </section>

      {/* Get exclusive offers on your email */}
      <section id="get-exclusive-offers-on-your-email" className="mb-5 pb-5">
        <div className="container-lg linear-background text-center p-5">
          <h3 className="special-h text-capitalize">
            Get exclusive offers on your email
          </h3>

          <p className="lead">Subscribe to our newsletter and stay updated</p>

          <form
            action=""
            className="d-flex align-items-center border border-dark rounded-5 mx-auto ps-2"
            onSubmit={(element) => {
              element.preventDefault();
            }}
          >
            <input
              type="email"
              name="email"
              id="email"
              required={true}
              placeholder="Write Your Email For Exclusive Offers "
            />
            <input
              type="submit"
              value="Subscribe"
              className="btn btn-dark btn-lg rounded-5 ms-3 px-5"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;

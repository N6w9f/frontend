import { useEffect, useState } from "react";

// local needs
import "./Sections.css";
import ProductsList from "../ProductsLIst/ProductsList";

const Sections = (props) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let numbers = [];
    for (let i = 1; i <= Math.ceil(props.data.length / props.data.limit); i++) {
      numbers.push(i);
    }

    setPages(numbers);
  }, [props.data.length, props.data.limit]);
  return (
    <>
      <main className="container-lg my-4">
        <img src={props.image} alt="" className="w-100" />
      </main>

      <section id="all-products" className="men-products mb-5 pb-5">
        <div className="container-lg">
          <div className="sort d-flex justify-content-between align-items-center my-3">
            <h6 className="text-dark m-0">
              Showing 1 - 12 <span>out of 54 products</span>
            </h6>
          </div>

          <div className="products grid-300">
            <ProductsList data={props.data.products || []} />
          </div>
          <div className="pages d-flex align-items-center gap-3 my-3">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => {
                  window.location.search = `page=${page}`;
                }}
                className="fs-4 fw-bolder border-0"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;

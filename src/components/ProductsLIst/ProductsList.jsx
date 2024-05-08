import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// local needs
import "./ProductsList.css";

const ProductsList = (props) => {
  const url = useSelector((state) => state.urls.images);
  const navigate = useNavigate();
  return (
    <>
      {props.data.map((product) => {
        return (
          <div
            key={product._id}
            id="product"
            className="bg-light shadow rounded"
            onClick={() => {
              navigate(`/details/${product._id}`);
            }}
          >
            <img
              src={url + product.image}
              alt="product"
              className="w-100 rounded-top"
            />
            <div className="text rounded-bottom mx-3">
              <h3 className="h5 lh-sm my-3">{product.title}</h3>

              <p className="lead text-dark d-flex align-items-center gap-3">
                ${product.price - product.discount}
                <span className="lead text-decoration-line-through">
                  ${product.price}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ProductsList;

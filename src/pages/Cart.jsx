import { useDispatch, useSelector } from "react-redux";
import {
  cart_decrease,
  cart_delete,
  cart_increase,
} from "../redux/Slices/cartSlice";

import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// local needs
import "./CSS/Cart.css";
import { useEffect, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const fee = 10;
  const discount = 0;

  useEffect(() => {
    let final = 0;
    for (let i = 0; i < products.length; i++) {
      final += +(
        (products[i].price - products[i].discount) *
        products[i].quantity
      );
    }
    setTotal(final);
  }, [products]);

  function increase(id) {
    dispatch(cart_increase(id));
  }
  function decrease(id) {
    dispatch(cart_decrease(id));
  }

  function deleteProduct(id) {
    dispatch(cart_delete(id));
  }

  return (
    <>
      <main className="cart text-dark mb-5 pb-5">
        <div className="container-lg py-5">
          <table className=" w-100">
            <thead>
              <tr className="border-bottom border-dark pb-3">
                <td id="product" className="py-3">
                  Product
                </td>
                <td id="title" className="py-3">
                  Title
                </td>
                <td id="price" className="text-center py-3">
                  Price
                </td>
                <td id="quantity" className="text-center py-3">
                  Quantity
                </td>
                <td id="total" className="text-center py-3">
                  Total
                </td>
                <td id="remove" className="text-center py-3">
                  Remove
                </td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="product py-3">
                    <img src={product.image} alt="Product" />
                  </td>
                  <td className="title py-3">{product.title}</td>
                  <td className="price text-center py-3">
                    ${product.price - product.discount}
                  </td>
                  <td className="quantity py-3">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <button
                        className="border-0"
                        onClick={() => {
                          decrease(product.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="quantity-span">{product.quantity}</span>
                      <button
                        className="border-0"
                        onClick={() => {
                          increase(product.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </td>
                  <td className="total text-center py-3">
                    {(product.price - product.discount) * product.quantity}
                  </td>
                  <td className="remove text-center  py-3">
                    <button
                      className="border-0"
                      onClick={() => {
                        deleteProduct(product.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} className="text-danger" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <section className="total-discount text-dark mb-5 pb-5">
        <div className="container-lg d-flex justify-content-between align-items-end gap-5">
          <div className="cart-total">
            <h2 className="h1 mb-5">Cart Total</h2>

            <div className="subtotal d-flex justify-content-between align-items-center py-2">
              <p className="m-0">Subtotal</p> <span>${total}</span>
            </div>
            <div className="fee d-flex justify-content-between align-items-center py-2">
              <p className="m-0">Fee</p>{" "}
              <span>{fee === 0 ? "Free" : `$${fee}`}</span>
            </div>
            <div className="discount d-flex justify-content-between align-items-center py-2">
              <p className="m-0">Discount</p>{" "}
              <span>{discount === 0 ? "waiting for one" : `$${discount}`}</span>
            </div>
            <div className="total d-flex justify-content-between align-items-center fw-bolder py-2">
              <p className="m-0">Total</p>{" "}
              <span>${total + fee - discount}</span>
            </div>
          </div>

          <div className="cart-discount">
            <p>if you have a promo code, enter it here</p>

            <form
              action=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="d-flex align-items-center mt-3"
            >
              <input
                type="text"
                name="discount"
                id="discount"
                placeholder="Discount"
                className="text-light ps-2"
              />

              <button
                id="Submit"
                className="btn btn-dark btn-lg rounded-0 px-4 h-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

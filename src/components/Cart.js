import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();
  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };
  return (
    <div className="container my-3">
      <h4>Your Products</h4>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <table className=" table table-responsive table-borderless" style={{width: "70rem"}}>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price(<i class="bi bi-currency-dollar"></i>)</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((crt) => (
              <tr key={crt.id}>
                <td>{crt.title}</td>
                <td>{crt.price}</td>
                <td>
                  <button
                    className="btn btn-danger my-2 mx-2"
                    onClick={() => removeFromCart(crt.id)}
                  >
                    <i class="bi bi-cart-dash"></i> Remove
                  </button>
                </td>
              </tr>
            ))}
            <div className="card my-2" style={{ width: "10rem" }}>
              <div className="card-body">
                <strong>Total:</strong> <i class="bi bi-currency-dollar"></i>{totalPrice()}
              </div>
            </div>
          </tbody>
        </table>
      )}
      <button className="btn btn-primary my-2" onClick={() => navigate("/")}>
        <i class="bi bi-arrow-left-circle"></i> Back to Products
      </button>
    </div>
  );
}

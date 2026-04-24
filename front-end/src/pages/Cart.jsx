import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border p-3 mb-2">
              <div>
                <h6>{item.title}</h6>
                <p>${item.price}</p>
              </div>

              <button 
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h4>Total: ${total.toFixed(2)}</h4>

          <button className="btn btn-warning mt-3" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
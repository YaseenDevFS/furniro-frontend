import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.info('Item removed from cart');
  };

  return (
    <div className="Cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="product-cell">
                  <img src={`https://furniro-backend-production.up.railway.app/${item.image}`} alt={item.title} />
                  <span>{item.title}</span>
                </td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>
                  <button className="remove-btn" onClick={() => handleRemove(index)}>Remove</button>
                  <button className="checkout-btn">Checkout</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
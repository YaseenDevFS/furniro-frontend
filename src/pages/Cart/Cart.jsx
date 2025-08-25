import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
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

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = async () => {
        try {
            const response = await axios.post('https://furniro-backend-production.up.railway.app/create-checkout-session', {
                 cartItems
            });
            window.location.href = response.data.url; // Redirect to Stripe Checkout
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
        console.log(cartItems);
    };
  return (
    <div className="Cart">
     {cartItems.length === 0 ? (
  <div className="empty-cart">
    <p>🛒 Your cart is empty</p>
    <span>Add some products to see them here.</span>
  </div>
) : (
  <>
    {/* Desktop Table */}
    <table className="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td className="product-cell">
              <img 
                src={`https://furniro-backend-production.up.railway.app/${item.image}`} 
                alt={item.title} 
              />
              <span>{item.title}</span>
            </td>
            <td>{item.description}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>
              <button className="remove-btn" onClick={() => handleRemove(index)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Mobile Cards */}
    <div className="cart-cards">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-card">
          <img 
            src={`https://furniro-backend-production.up.railway.app/${item.image}`} 
            alt={item.title} 
          />
          <div className="card-info">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span className="price">${item.price.toFixed(2)}</span>
            <button className="remove-btn" onClick={() => handleRemove(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>

    <div className="cart-summary">
      <h3>Subtotal: <span>${total.toFixed(2)}</span></h3>
      <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  </>
)}
    </div>
  );
};

export default Cart;
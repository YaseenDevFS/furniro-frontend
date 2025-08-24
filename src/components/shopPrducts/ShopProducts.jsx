import React, { useEffect, useState } from 'react'
import './ShopProducts.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://furniro-backend-production.up.railway.app/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.push(product);
    localStorage.setItem('cart', JSON.stringify(storedCart));
    toast.success(`${product.title} added to cart!`)
  }



  return (
    <div className='Products'>
      <h1 className='title-2'>Our Products</h1>
      <div className="content">
        <div className="products-list">
          {products.map((product) => (
            <div className='product-card' key={product.id}>
              <img className='product-image' src={`https://furniro-backend-production.up.railway.app/${product.image}`} alt={product.title} />
              <div className="caption">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
              </div>
              <div className="hover">
                <div className="hover-content">
                  <div className="buttons">
                    <button className='add-to-cart' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    <Link to={`/product/${product._id}`} className='view-details'>View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

 

      </div>
    </div>
  )
}

export default Products
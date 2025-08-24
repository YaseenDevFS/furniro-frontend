import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])
  const [visibleCount, setVisibleCount] = useState(6) // أول 6 منتجات فقط

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

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 6) // يظهر 6 منتجات إضافية كل مرة
  }

  return (
    <div className='Products'>
      <h1 className='title-2'>Our Products</h1>
      <div className="content">
        <div className="products-list">
          {products.slice(0, visibleCount).map((product) => (
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

   
          <div className="see-more-container">
         <Link to={'/shop'}><button className="see-more-btn">See More</button></Link>
          </div>

      </div>
    </div>
  )
}

export default Products
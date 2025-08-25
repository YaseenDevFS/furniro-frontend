import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"; // 👈 أضفنا التوست
import 'react-toastify/dist/ReactToastify.css';
import './SingleProduct.css'

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://furniro-backend-production.up.railway.app/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    const handleCheckout = async () => {
        try {
            const response = await axios.post(
                'https://furniro-backend-production.up.railway.app/create-checkout-session',
                { product }
            );
            window.location.href = response.data.url; // Redirect to Stripe Checkout
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    const handleAddToCart = (product) => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        storedCart.push(product);
        localStorage.setItem('cart', JSON.stringify(storedCart));
        toast.success(`${product.title} added to cart!`)
    }
    
    return (
        <div className="single-product">
            <div className="right">
                <span className="badge">New</span>
                {/* اتأكد إن الـ backend بيرجع الصورة بالـ path الصح */}
                <img 
                  src={`https://furniro-backend-production.up.railway.app/${product.image}`} 
                  alt={product.title} 
                />
            </div>

            <div className="left">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
                <h2>Category: {product.category}</h2>

                {/* Rating */}
                <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span 
                          key={star} 
                          className={star <= product.rate ? "star filled" : "star"}>
                          &#9733;
                        </span>
                    ))}
                </div>

                <div className="buttons">
                  <button onClick={handleCheckout} className="buy-button">Check Out</button>
                  <button onClick={() => handleAddToCart(product)} className="buy-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct
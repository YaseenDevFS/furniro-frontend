import { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res;
      if (isLogin) {
        res = await axios.post("https://furniro-backend-production.up.railway.app/api/users/login", {
          email,
          password
        })
      } else {
        res = await axios.post("https://furniro-backend-production.up.railway.app/api/users/register", {
          name,
          email,
          password
        })
      }
      console.log(res.data)
      toast.success(`${isLogin ? "Login Successful" : "Register Successful"}`)
      navigate("/Home")
    } catch (error) {
      toast.error(error.response?.data?.message || "error")
    }
  }
  function toggle() {
    setIsLogin(!isLogin)
  }
  return (
    <div className="register">
      <div className="choose">
        <button onClick={() => {setIsLogin(true)}}>Login</button>
        <button onClick={() => {setIsLogin(false)}}>Register</button>
      </div>
      <form onSubmit={handleSubmit}>
        {isLogin ? (
          <>
            <h2>Login</h2>
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <input type="submit" value="submit" />
          </>
        ) : (
          <>
            <h2>Register</h2>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} value={name} />
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <input type="submit" value="submit" />
          </>

        )
        }
      </form>
    </div>
  )
}

export default Register

// Add ToastContainer to your component tree (usually in App.jsx or here if needed)
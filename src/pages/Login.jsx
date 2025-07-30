import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const location = useLocation()

  const message = location.state?.message;
  const from = location.state?.from?.pathname || "/"; 


  async function loginUser(creds) {
    setStatus('submitting')
    setError(null)
    
    try {
      const res = await fetch("/api/login", {
        method: "post", 
        body: JSON.stringify(creds)
      })
      if (!res.ok) {
        const errorData = await res.json()
        throw {
          message: errorData.message,
          statusText: res.statusText,
          status: res.status
        }
      }

      const data = await res.json()
      return data
    } catch (err) {
      throw err;

    } finally {

      setStatus('idle');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = await loginUser(loginFormData)
      console.log('Successful login', data)
      setError(null)
      navigate(from, { replace: true });
    }
    catch (err) {
      console.error(err)
      setError(err)
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }



  return (
    <div className="login-container">
      {location.state?.message &&
        <p style={{ color: 'red' }}>{location.state.message}</p>
      }

      <h1>Sign in to your account</h1>
      {status === "submitting" && <p>Logging in...</p>}
            {error?.message &&
                <p style={{ color: 'red' }}>{error.message}</p> 
            }
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting"
            ? "Logging in..."
            : "Log in"
          }</button>
      </form>
    </div>
  )

}
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    console.log(data);

    if(data.message === "User created successfully"){
      alert("Signup successful!")
      navigate("/login");
    }
  };

  const handleLogin = async(e)=>{
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
    })

    const data = await res.json();

    if(data.token){
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("Login successful");
      navigate("/");
    }
    else {
      alert("Login failed");
    }
  }

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-5" style={{ width: "100%", maxWidth: "400px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 className="mb-4 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label fw-bold">Username</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
              />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label fw-bold">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="Check1" />
            <label className="form-check-label" htmlFor="Check1">
              I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        <div className="text-center mt-3">
          <small>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </small>
        </div>
      </div>
    </div>
  );
  
};

export default LoginSignup;

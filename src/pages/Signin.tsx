import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Valid credentials
  const VALID_EMAIL = "Robertbruce1911@outlook.com";
  const VALID_PASSWORD = "Robert19";

  // Email validation helper
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const signin = () => {
    setError("");

    // Validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Check credentials
    if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
      setError("Invalid email or password");
      return;
    }

    // Success
    alert("Sign in successful!");
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div>
        <div className="virgin-header">
          <div className="virgin-logo">
            <span className="virgin-m">M</span>
            <span className="virgin-circle">
              <span className="virgin-text">Virgin</span>
            </span>
            <span className="virgin-ney">NEY</span>
          </div>
          <p className="virgin-tagline">Online Service</p>
        </div>

        <h2>Welcome Back</h2>

        {error && <div className="error-message">{error}</div>}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        <button onClick={signin}>Sign In</button>
      </div>
    </div>
  );
}
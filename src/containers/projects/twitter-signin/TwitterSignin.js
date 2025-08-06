import React from "react";
import "./styles.css";

function TwitterSignin() {
  const handleSignIn = (provider) => {
    console.log(`Sign in with ${provider}`);
  };

  return (
    <div className="container"> {/* This container should be centered by its parent */}
      <div className="card">
        {/* Twitter Logo */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
          alt="Twitter"
          className="logo"
        />

        <h2>Sign in to Twitter</h2>

        {/* Google Sign-in */}
        <button className="btn outline" onClick={() => handleSignIn("Google")}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="icon"
          />
          Sign in with Google
        </button>

        {/* Apple Sign-in */}
        <button className="btn outline" onClick={() => handleSignIn("Apple")}>
          <span className="icon"></span>
          Sign in with Apple
        </button>

        {/* Divider */}
        <div className="divider"><span>or</span></div>

        {/* Input field */}
        <input
          type="text"
          placeholder="Phone, email address, or username"
          className="input"
        />

        {/* Next and Forgot Password */}
        <button className="btn primary">Next</button>
        <button className="btn outline">Forgot password?</button>

        {/* Footer */}
        <p className="footer">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default TwitterSignin;

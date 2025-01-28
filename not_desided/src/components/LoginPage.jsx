import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <a href="#forgot-password">Forgot Password?</a>
      <button>Sign Up</button>
      <div className="social-login">
        <button>Login with Google</button>
        <button>Login with Facebook</button>
      </div>
    </div>
  );
};

export default LoginPage;

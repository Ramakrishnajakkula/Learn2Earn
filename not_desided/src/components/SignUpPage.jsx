import React from 'react';

const SignUpPage = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>Sign Up</button>
      </form>
      <a href="#login">Already have an account? Login</a>
    </div>
  );
};

export default SignUpPage;

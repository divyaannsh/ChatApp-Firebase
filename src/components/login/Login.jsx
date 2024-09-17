import React, { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ''
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handlelogin = e => {
    e.preventDefault()
    toast.error("Hello")
  }

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handlelogin}>
          <input type="text" placeholder="Email" className="inputField"/>
          <input type="password" placeholder="Password" className="inputField"/>
          <button className="submitBtn">Sign In</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <div className="avatarSection">
            <label htmlFor="file">
              <img src={avatar.url || "./avatar.png"} alt="avatar" className="avatar"/>
              <span>Upload an image</span>
            </label>
            <input type="file" id="file" style={{ display: 'none' }} onChange={handleAvatar} />
          </div>
          <input type="text" placeholder="Username" className="inputField"/>
          <input type="email" placeholder="Email" className="inputField"/>
          <input type="password" placeholder="Password" className="inputField"/>
          <button className="submitBtn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

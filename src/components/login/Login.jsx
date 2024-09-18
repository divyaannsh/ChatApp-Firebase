import React, { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth, db } from '../../lib/firebase'; // Ensure your Firebase config exports these
import { doc, setDoc } from "firebase/firestore"; 
import upload from '../../lib/upload';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ''
  });

const [loading,setLoading] = useState(false)

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true)

    // Extract the form data
    const formData = new FormData(e.target);
    const username = formData.get('username'); // Get username
    const email = formData.get('email'); // Get email
    const password = formData.get('password'); // Get password

    if (!email || !password) {
      toast.error("Email or password is missing!");
      return;
    }

    try {
      // Create a new user with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password); 
      console.log('User registered:', res.user);
      
      const imgUrl = await upload(avatar.file)
       
      // Add user to Firestore users collection
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid, // Added missing comma here
        blocked: [],
      });

      // Create an empty userchats document
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now!");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally{
      setLoading(false)
    }
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email'); // Get email
    const password = formData.get('password'); // Get password

    try{
       await signInWithEmailAndPassword(auth, email, password);
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
    finally{
      setLoading(false)

    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" className="email" name="email" />
          <input type="password" placeholder="Password" className="password" name="password" />
          <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || './avatar.png'} alt="avatar" className="avatar" />
            Upload an image
          </label>
          <input type="file" id="file" style={{ display: 'none' }} onChange={handleAvatar} />

          <input type="text" placeholder="Username" className="username" name="username" />
          <input type="email" placeholder="Email" className="email" name="email" />
          <input type="password" placeholder="Password" className="password" name="password" />
          <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

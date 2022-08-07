import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"
const Login = () => {
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")
  const {handleIsAuth} = useContext(AuthContext);
  const {token} = useContext(AuthContext);
  const navigate = useNavigate()

  
  const handleSubmit = () => {
     const userInfo = {
      email: email,
      password: password
     }
     handleIsAuth(userInfo)
     navigate("/")
  }

  return <div>
    <h2>
      Login Page
    </h2>
    <br/>
    <label>
      Email: 
      <input type="text" placeholder="Enter email id"  onChange={(e) => setEmail(e.target.value)}/>
    </label>
    <br/>
    <label>
      Password:
      <input type="password"  placeholder="Enter password"  onChange={(e) => setPassword(e.target.value)}/>
    </label>
    <br/>
    <button onClick={() => handleSubmit()}>Login</button>
  </div>;
};

export default Login;

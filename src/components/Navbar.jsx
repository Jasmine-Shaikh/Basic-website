import React from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom"
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const {isAuth} = React.useContext(AuthContext);
  const {toggleAuth} = React.useContext(AuthContext)
  const {cart} = React.useContext(CartContext)


  const navigate = useNavigate()
  return <div>
    <button>
      Home
    </button>
    {isAuth ? <span style={{margin: "0px 20px"}}>Cart : {cart.length} </span>: <span></span> }
   
      {isAuth ? <button onClick={toggleAuth}>LogOut </button> : <button onClick={() => navigate("/login")}>Login </button> }
  </div>;
};

export default Navbar;

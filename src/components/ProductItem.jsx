import React from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = (e) => {
  const {cart,handleAddToCart,handleIncrement,handleDecrement,handleDelete} =React.useContext(CartContext)
  
  let quantity = undefined;
  cart.forEach(el => {
    if(el.id == e.id){
    quantity = el.count;
    }
  })

  return <div style={{margin: "10px", width: "400px", height: "200px", border: "1px solid black"}}>
    <h3>{e.name}</h3>
    <p>{e.description}</p>
     {
      !quantity ? <button  onClick={()=>{handleAddToCart(e.id)}}>Add To Cart</button> :
       <>
     <button onClick={()=>{handleIncrement(e.id)}}>Increment</button>
      {
          quantity ? <span style={{margin: "0px 20px"}}>{quantity}</span> : null
        }
     <button onClick={()=>{handleDecrement(e.id)}}>Decrement</button>
     <br/>
     <button onClick={()=>{handleDelete(e.id)}}>Delete</button> </>
     }
     
    
  </div>;
};

export default ProductItem;

import React from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom"
import ProductItem from "../components/ProductItem"

const Products = () => {
  const {isAuth} = React.useContext(AuthContext);
  const [products,setProducts] = React.useState([])

  
  const fetchProducts = async() => {
    try {

    let res= await fetch(`http://localhost:8080/products`)
    let response =await res.json()

    setProducts(response)
    console.log(response)
    } catch (error) {
      console.log(error)
    }
   
   }
   React.useEffect(()=>{
    fetchProducts()
   },[])

  return <div>
    {products.map((e) => {
      return <ProductItem  {...e}/>
    }
    )}
   
  </div>;
};

export default Products;

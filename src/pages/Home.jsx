import React from "react";
import { AuthContext } from "../context/AuthContext";
import Products from "../components/Products";
const Home = () => {
  const {isAuth} = React.useContext(AuthContext);
 
  return <div style={{marginTop: "20px", width: "100%" , display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
    {isAuth ?   <Products/> : <>Please login to view catalogue</>}
   
    </div>;
};

export default Home;

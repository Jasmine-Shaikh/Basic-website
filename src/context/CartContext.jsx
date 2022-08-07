import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const fetchData = async () => {
    let res = await fetch(`http://localhost:8080/cartItems`);
    let data = await res.json();
    setCart(data);
  };

  const handleAddToCart = async (id) => {

    try {
      await fetch(`http://localhost:8080/cartItems`, {
        method: "POST",
        body: JSON.stringify({
          count: 1,
          productId: id,
          id,
        }),
        headers: { "Content-Type": "application/json" },
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncrement = async (id) => {
    const currProduct = cart.find((e) => e.productId == id);
    try {
      await fetch(`http://localhost:8080/cartItems/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          count: currProduct.count + 1,
        }),
        headers: { "Content-Type": "application/json" },
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
   cart.find((e) => e.productId == id);
    try {
      await fetch(`http://localhost:8080/cartItems/${id}`, {
        method: "DELETE",
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrement = async (id) => {
    const currProduct = cart.find((e) => e.productId == id);
    try {
      if (currProduct.count == 1) {
        handleDelete(id);
      } else {
        await fetch(`http://localhost:8080/cartItems/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            count: currProduct.count - 1,
          }),
          headers: { "Content-Type": "application/json" },
        });
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const cartContents = {
    cart,
    handleAddToCart,
    handleDecrement,
    handleDelete,
    handleIncrement,
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContext.Provider value={cartContents}>{children}</CartContext.Provider>
  );
};

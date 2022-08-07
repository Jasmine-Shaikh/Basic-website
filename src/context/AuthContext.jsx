import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider ({ children }) {

    const [isAuth,setIsAuth] = React.useState(false);
    const [token,setToken] = React.useState();


    const handleIsAuth = async (userInfo) => {
        try {
            let response = await fetch(`https://reqres.in/api/login`,{
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers : { "Content-Type" : "application/json" }
            })
            console.log(userInfo)
            let data = await response.json()
            console.log(data)
            setToken(data.token)
            {token ? setIsAuth(true) :  setIsAuth(true)}
            
           
          
        } catch (error) {
            alert("Incorrect password!")
            console.log(error)

        }
    }

    const toggleAuth = () => {
      setToken()
      setIsAuth(!isAuth)
    }

    return (
        <AuthContext.Provider value={{token, isAuth,handleIsAuth,  toggleAuth}} >
            {children}</AuthContext.Provider>
    )
}
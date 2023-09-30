// import axios from "axios";
// import React, { useEffect, useState } from "react";


// const AppContext = React.createContext();

// const AuthProvider = ({children}) =>{
//     const [userdata, setUserdata] = useState(null);

//     const Login =(userData)=>{
//         setUserdata(userData)
//         // localStorage.setItem('user', JSON.stringify(userData));
 
//     }
//     useEffect(()=>{
//         // const storedUser = localStorage.getItem('user');
//         // if (storedUser) {
//         //     Login(JSON.parse(storedUser));
           
//         // }
//         Login();
//     },[])
//     console.log(userdata)
// //    
//     const logout =()=>{
//         setUserdata(null);
//         localStorage.removeItem('user');
//     }

//     return <AppContext.Provider value={{userdata,Login,logout, setUserdata}}>{children}</AppContext.Provider>
// }

// export {AppContext, AuthProvider};
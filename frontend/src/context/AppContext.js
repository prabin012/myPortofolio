import React, { useEffect, useReducer, useState } from 'react'
import { AppReducer } from './AppReducer';

const INITIAL_STATE ={
  userdata:JSON.parse(localStorage.getItem("user")) || null,
  userInfo:null,
  isLoading:false,
  error:false
}

const AppContext =React.createContext(); //create context

const AppProvider = ({children}) => {   //create provider
 const [userinfo , setUserinfo] = useState(null);

const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);  // create reducer

useEffect(()=>{
  localStorage.setItem("user", JSON.stringify(state.userdata))
},[state.userdata])

  return <AppContext.Provider value={{ userdata:state.userdata,
    userInfo:state.userInfo,
isLoding:state.isLoading,
errror:state.error,
dispatch,
userinfo , setUserinfo,
  }}>
    {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider}   //export context and reducer

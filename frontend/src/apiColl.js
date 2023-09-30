import axios from "axios";

export const apiColl =async(userCreaditional, dispatch)=>{
    console.log(userCreaditional);
    dispatch( {type: "LOGIN_START" });
try {
    const res =await axios.post(`http://localhost:5550/login`, userCreaditional)
    dispatch({type:"LOGIN_SUCCESS", payload:res.data})
} catch (error) {
    dispatch({type:"LOGIN_FAILURE", error}) 
}
}
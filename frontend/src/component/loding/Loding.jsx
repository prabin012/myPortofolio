import React from 'react'

const Loding = () => {
    const loding={
        width:"100%",
        backgroundColor:"black",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        fontSize:"50px",

    };
  return (
    <div>
      <div style={loding}>
        <h1>Please wait ! Data is Loding...</h1>
      </div>
    </div>
  )
 
}


export default Loding

import React from "react";
import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
    style={{
      height:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >
      <BounceLoader 
      color="#0037ff" />
    </div>
    
  )
}


export default Loading;

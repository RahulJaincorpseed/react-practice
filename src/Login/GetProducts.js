import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

const GetProducts = () => {
  const loginSelector = useSelector(state => state.UserReducer);
  
  console.log("firstname is ", loginSelector.firstName);
  console.log("token is ", loginSelector.token);

  

    
  return (
    <div>
      <h1>GetAllProducts</h1>
    </div>
  )
}

export default GetProducts

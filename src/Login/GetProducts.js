import {  useSelector } from "react-redux";

const GetProducts = () => {
  const loginSelector = useSelector(state => state.UserReducer);
  
  console.log("firstname is ", loginSelector);
  console.log("token is ", loginSelector);

  

    
  return (
    <div>
      <h1>GetAllProducts</h1>
    </div>
  )
}

export default GetProducts

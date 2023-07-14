import React from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie"
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../Redux/Action/UserAction";

const Login = () => {
    const navigate = useNavigate();
    const loginSelector = useSelector(state1 => state1.UserReducer.login);
    const allProductsAdd = useSelector((state) => state.productReducerExample)

  
    const dispatch = useDispatch();

    console.log("i am  dispatch", dispatch);

    console.log("login selector", loginSelector);


    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'kminchelle',
          password: '0lelplR',
          // expiresInMins: 60, // optional
        })
    }
    
    const fetchData = () => {
        fetch('https://dummyjson.com/auth/login',option)
          .then(res => res.json())
          .then(data => {
            console.log(data, data.token)
            dispatch(loginUserAction(data))
            localStorage.setItem("token",  data.token);     
            // navigate("/pro")
        });
    }
    
 
    return (
    <div>
        <h1>Login</h1>
        <button onClick={fetchData}>click me</button>
    </div>
  )
};

export default Login;

import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
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
            localStorage.setItem("token",  data.token);
        });
    }
    
 
    return (
    <div>
        <h1>Login</h1>
        <button onClick={()=> fetchData()}>click me</button>
    </div>
  )
};

export default Login;

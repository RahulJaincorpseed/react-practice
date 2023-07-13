import React, { useState } from "react";

const StateMisatkeTwo = () => {
    const [user, setUser] = useState({
        name:"Rahul"
    });

    // const user1 = {
    //     name: "Rahul",
    //     age: 6
    // } 

  return (
    <div>
       { user && <h1>UserName: {user.name}</h1>}
        <h1>UserName: {user?.name}</h1>
        <h1>UserName: {user && user.name}</h1>
       
    </div>
  )
};

export default StateMisatkeTwo;

import React, { useState } from "react";

const StateMistakeThree = () => {
    const [input, setInput] = useState("");
    const [user, setUser] = useState({
        name:"Rahul"
    });

    const changeName = () =>{
        setUser((prev) => ({ ...prev , name : input}));
    }   

    console.log("user is", user, input);

  return (
    <div>
        <input onChange={(e)=> setInput(e.target.value)} type="text" />
        <button onClick={changeName}>Change Name</button>
        <h2>Username is {user?.name}</h2>
    </div>
  )
};

export default StateMistakeThree;

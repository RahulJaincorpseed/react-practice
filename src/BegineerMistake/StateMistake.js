import React, {useEffect, useState} from "react";

const StateMistake = () => {
    const [count, setCount] = useState(0);

    const increment  = () =>{
        setCount(prev => prev + 1)
    }
    
    const asyncIncrement  = () =>{
        setTimeout(()=>{
            setCount(prev => prev + 1)
        },3000)
    }

  return (
        <div>
            <h1>{count}</h1>
            <button  onClick={increment}>Count</button>
            <br />
            <br />
            <button onClick={asyncIncrement}>Count async</button>            
        </div>
  )
};

export default StateMistake;

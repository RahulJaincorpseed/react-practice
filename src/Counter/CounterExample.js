import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremenetNumber, incremenetNumber } from "../Redux/Action/CounterAction";


const CounterExample = () => {
    const count = useSelector(state => state.counterReducerExample);
    const dispatch = useDispatch();
    console.log("count is ", count);
  return (
    <div>
        <h1>Counter Example</h1>
        <h3>{`count is ${count}`}</h3>
        <button onClick={()=> dispatch(incremenetNumber(1))} className="btn btn-primary mr-2">Increment</button>
        <button onClick={()=> dispatch(decremenetNumber(1))} className="btn btn-primary">Decrement</button>
    </div>
  )
};

export default CounterExample;

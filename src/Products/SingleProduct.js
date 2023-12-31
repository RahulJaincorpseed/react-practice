import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { singleProductAction } from "../Redux/Action/ProductAction";
import { Link } from "react-router-dom";

const SingleProduct = () => {
    const pro = useParams();
    const  singleProductSelector = useSelector(state => state.productReducerExample.singleProduct);
   
    const dispatch = useDispatch();

    let { id, title, price, description } = singleProductSelector;
   
    console.log("single product redux", singleProductSelector.title);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${pro.id}`)
          .then((res) => res.json())
          .then((json) => {
            console.log(json)
            dispatch(singleProductAction(json))
          })
      }, [])

  return (
    <div>
        <h1>Single Product</h1>
                <div>
                    <p>{id}</p>
                    <p>{title}</p>
                    <p>{price}</p>
                    <p>{description}</p>   
        </div>
        <Link to="/login">Login</Link>
         </div>
  )
};

export default SingleProduct;

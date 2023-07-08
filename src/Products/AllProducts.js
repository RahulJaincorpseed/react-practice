import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allProductAction } from "../Redux/Action/ProductAction"
import { Link } from "react-router-dom"

const AllProducts = () => {
  const allProductsAdd = useSelector((state) => state.productReducerExample)
  console.log("products data redux data", allProductsAdd)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(allProductAction(json))
      })
  }, [])

  return (
    <div>
      <h1>All Products</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Show</th>
          </tr>
        </thead>
        <tbody>
          {allProductsAdd.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product?.id}</th>
              <td>{product?.title}</td>
              <td>{product?.price}</td>
              <td>{product?.description}</td>
              <td><Link to={`${product.id}`}>Show</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllProducts

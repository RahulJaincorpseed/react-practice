import React, { useEffect } from "react"

const GetProducts = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => console.log("all products", data))
  })
  return (
    <div>
      <h1>GetAllProducts</h1>
    </div>
  )
}

export default GetProducts

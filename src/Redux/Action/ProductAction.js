export const allProductAction = (data) =>{
    return{
        type: "GETALLPRODUCTS",
        payload: data
    }
}

export const singleProductAction = (data) =>{
    return{
        type: "GETSINGLEPRODUCT",
        payload: data
    }
}


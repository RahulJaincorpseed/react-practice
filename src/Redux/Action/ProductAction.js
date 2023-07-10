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


export const TableData = (data) =>{
    return {
        type: "ALLTABLEDATA",   
        payload: data,

    }
}


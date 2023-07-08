export const incremenetNumber = (data) =>{
    return {
        type: "INCREMENT",
        payload: data
    }
}
export const decremenetNumber = (data) =>{
    return {
        type: "DECREMENT",
        payload: data
    }
}
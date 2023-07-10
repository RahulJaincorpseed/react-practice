const initialState = 0

export const counterReducerExample = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload
    case "DECREMENT":
      return state - action.payload
    default:
      return state
  }
}

const productState = [];

export const productReducerExample = (state = productState, action) => {
  switch (action.type) {
    case "GETALLPRODUCTS":
      let data = [...state, ...action.payload]
      return data
    case "GETSINGLEPRODUCT":
      let itemData = action.payload;
       return itemData;   
    default:
      return state
  }
}


const tableData = {
  posts: [],

};

export const TableDataReducer = (state = tableData, action) =>{
  switch (action.type) {
    case "ALLTABLEDATA":
    return {posts: [...action.payload]}
    default:
      return state
  }
}


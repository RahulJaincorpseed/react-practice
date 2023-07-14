const initialState = {
    alldata: []
}

export const DataTableReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "ALLTABLEDATA":
           {
            state = state.state.allData
            state = {...state, allData:action.payload}
            return state;
           }
        default:
            return{state}
    }
}
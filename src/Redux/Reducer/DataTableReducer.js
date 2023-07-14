const initialState = {
    listData: []
}

export const DataTableReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "ALLTABLEDATA":
           {
            state = state?.state?.listData
            state = {...state, listData:action?.payload}
            return state;
           }
        default:
            return{state}
    }
}
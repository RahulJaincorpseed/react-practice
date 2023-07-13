const initialState = {
    
}

export const UserReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "LOGIN_USER":
        //     return{...state , ...action.payload }
        {
            const data = {...state, ...action.payload};
            return data.token
        }
        default:
            return{state}
    }
}
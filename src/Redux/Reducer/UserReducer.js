const initialState = {
    login: {},
}

export const UserReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "LOGIN_USER":
            {
            //     return{...state , ...action.payload }
            const data2 = state.login
            const data = {...data2, ...action.payload}
            return data
        }
        default:
            return{state}
    }
}
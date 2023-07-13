const initialState = {
    login: {},
}

export const UserReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "LOGIN_USER":
            {
            //     return{...state , ...action.payload }
            let data2 = state.login
            state.login = {...data2, ...action.payload}
            return state.login
        }
        default:
            return{state}
    }
}
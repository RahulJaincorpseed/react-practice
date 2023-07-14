const initialState = {
    login: {}
}

export const UserReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "LOGIN_USER":
            {
                state = state.state.login
                state = {...state, login:action.payload}
                return state;
                // return {...state, login: action.payload}
        }
        default:
            return{state}
    }
}
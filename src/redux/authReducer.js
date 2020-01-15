
let optionsReducer = (state={option: ''}, action) => {
    switch(action.type) {
        case 'SET_OPTION':
            return {option: action.option}
        default: return state
    }
}

export default optionsReducer


// let usersReducer = (state=initialState.users, action) => {
//     switch(action.type) {
//         case 'ADD_USERS':
//             return action.payload
//         case 'GET_USERS_SUCCESS':
//             return action.users
//         default:
//             return state
//     }
// }
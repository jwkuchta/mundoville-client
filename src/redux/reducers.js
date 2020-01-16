import {combineReducers} from 'redux'

let initState = {
    users: [],
    currentUser: {
        user: [],
        friendeds: [],
        frienders: []
    },
    search: {
        input: '',
        output: []
    },
    verifications: [],
}

//reducer for getting all users
let usersReducer = (state = initState.users, action) => {
// let usersReducer = (state = initState.users, action) => {
    // debugger
    switch(action.type) {
        case 'ADD_USERS':
            // return {...state, users: action.users}
            return action.users
        case 'GET_USERS_SUCCESS':
            return action.users
        // case 'LOG_IN':
        //     return action.user
        default: 
            return state
    }
}

//currentUserReducer
let currentUserReducer = (state=initState.currentUser, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            // debugger
            return {...action.user}
            //later add:
            // frienders: action.user.frienders,
            // friendeds: action.user.friendeds,
            // messages: action.payload.following,
            // reviews: action.payload.reviews,
        case 'FRIEND':
            return {
                user: action.user,
                // friended: action.payload.friended,
                // messages: action.payload.following,
                // reviews: action.payload.reviews,
            }
        case 'UNFRIEND':
            return {
                user: action.user,
                // friended: action.payload.friended,
                // messages: action.payload.following,
                // reviews: action.payload.reviews,
            }
        default:
            return state
    }
}

// other
let optionsReducer = (state={option: ''}, action) => {
    switch(action.type) {
        case 'SET_OPTION':
            return {option: action.option}
        default: return state
    }
}


let rootReducer = combineReducers({
    users: usersReducer,
    options: optionsReducer,
    currentUser: currentUserReducer
})

export default rootReducer
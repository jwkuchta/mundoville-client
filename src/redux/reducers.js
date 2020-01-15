import {combineReducers} from 'redux'

// import {getUsers, addNewUser, setOption} from './actions'

// initial state
let initialState = {
    users: [],
    currentUser: {
        user: [],
    },
    newUserFormData: {
        username: '',

    },
    search: {
        input: '',
        output: []
    },
    verifications: [],
}

//reducer for getting all users
let usersReducer = (state=initialState.users, action) => {
    switch(action.type) {
        case 'ADD_USERS':
            return action.payload
        case 'GET_USERS_SUCCESS':
            return action.users
        case 'LOG_IN':
            return action.user
        default: 
            return state
    }
}

//currentUserReducer
let currentUserReducer = (state=initialState.currentUser, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {
                user: action.payload,
                frienders: action.payload.frienders,
                friendeds: action.payload.friendeds,
                // messages: action.payload.following,
                // reviews: action.payload.reviews,
            }
        case 'FRIEND':
            return {
                user: action.payload,
                friended: action.payload.following,
                // messages: action.payload.following,
                // reviews: action.payload.reviews,
            }
        case 'UNFRIEND':
            return {
                user: action.payload,
                friended: action.payload.following,
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

// combine reducers
let rootReducer = combineReducers({
    users: usersReducer,
    options: optionsReducer,
    currentUser: currentUserReducer
})

export default rootReducer


import {combineReducers} from 'redux'

let initState = {
    users: [],
    currentUser: {
        user: [],
        friendeds: [],
        frienders: []
    },
    selectedUser: [],
    search: {
        input: '',
        outputs: []
    },
    verifications: [],
    exchanges: [],
    reviews: [],
    conditions: {
        form: 'form',
        item: 'item',
        initial: 'initial'
    },
    filteredUsers: [],
    selectedCountry: ''
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
            // messages: action.user.following,
            // reviews: action.user.reviews,
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

let selectedUserReducer = (state=initState.selectedUser, action) => {
    switch (action.type) {
        case 'SELECTED':
            return action.selectedUser
        case 'ADD_HEART':
            // debugger
            return action.payload
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

let exchangesReducer = (state=initState.exchanges, action) => {
    switch(action.type) {
        case 'GET_EXCHANGES':
            return action.exchanges
        case 'ADD_EXCHANGE':
            return {...state, exchange: action.exchange}
        default:
            return state
    }
}

let reviewsReducer = (state=initState.reviews, action) => {
    switch(action.type) {
        case 'GET_REVIEWS':
            return action.reviews
        default:
            return state
    }
}

let searchReducer = (state=initState.search, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                input: action.query,
                outputs: initState.users.filter(
                    user => user.username.includes(action.query)
                )
            }
        default:
            return state
    }
}

let conditionReducer = (state = initState.conditions.initial, action) => {
    switch(action.type) {
        case "SET_CONDITION":
            return action.condition;
        default:
            return state;
    }
}

let filteredUsersReducer = (state = initState.filteredUsers, action) => {
    switch(action.type) {
        case 'DISPLAY_FILTERED':
            return action.filtered
        default:
            return state
    }
}

let countrySelectionReducer = (state=initState.selectedCountry, action) => {
    switch(action.type) {
        case 'SET_COUNTRY':
            return action.country
        default: return state
    }
}

let rootReducer = combineReducers({
    users: usersReducer,
    options: optionsReducer,
    currentUser: currentUserReducer,
    exchanges: exchangesReducer,
    reviews: reviewsReducer,
    selectedUser: selectedUserReducer,
    search: searchReducer,
    condition: conditionReducer,
    filteredUsers: filteredUsersReducer,
    countrySelection: countrySelectionReducer
})

export default rootReducer
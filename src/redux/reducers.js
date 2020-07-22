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
    selectedCountry: '',
    friendships: []
}

//reducer for getting all users
let usersReducer = (state = initState.users, action) => {
    switch(action.type) {
        case 'ADD_USERS':
            return action.users
        case 'GET_USERS_SUCCESS':
            return action.users
        default: 
            return state
    }
}

let currentUserReducer = (state=initState.currentUser, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {...action.user}
        case 'LOGGED_OUT':
            return initState.currentUser
        case 'FRIEND':
            return {
                user: action.user,
            }
        case 'UNFRIEND':
            return {
                user: action.user,
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
            return action.payload
        default:
            return state
    }
}

// other
let optionsReducer = (state={option: ''}, action) => {
    switch(action.type) {
        case 'SET_OPTION':
            return {option: action.payload}
        case 'CLEAR_OPTION': 
            return {option: action.payload}
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

let friendshipsReducer = (state=initState.friendships, action) => {
    switch(action.type) {
        case 'ADD_FRIENDSHIP':
            return {...state, friendships: [...state.friendships, action.friendship]}
        case 'REMOVE_FRIENDSHIP':
            return {friendships: state.friendships.filter(f => f.id !== action.friendship.id)}
        default:
            return state
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
    countrySelection: countrySelectionReducer,
    friendships: friendshipsReducer
})

export default rootReducer

// import {combineReducers} from 'redux'

// let initState = {
//     users: [],
//     currentUser: {
//         user: [],
//         friendeds: [],
//         frienders: []
//     },
//     selectedUser: [],
//     search: {
//         input: '',
//         outputs: []
//     },
//     verifications: [],
//     exchanges: [],
//     reviews: [],
//     conditions: {
//         form: 'form',
//         item: 'item',
//         initial: 'initial'
//     },
//     filteredUsers: [],
//     selectedCountry: '',
//     friendships: []
// }

// //reducer for getting all users
// // let usersReducer = (state = initState.users, action) => {
// //     switch(action.type) {
// //         case 'ADD_USERS':
// //             // return {...state, users: action.users}
// //             return action.users
// //         case 'GET_USERS_SUCCESS':
// //             return action.users
// //         default: 
// //             return state
// //     }
// // }

// let usersReducer = (state = initState.users, action) => {
//     debugger
//     let cases = {
//         'ADD_USERS': action.users,
//         'GET_USERS_SUCCESS': action.users
//     }
//     debugger
//     return cases[action.type] || state
// }

// //currentUserReducer
// let currentUserReducer = (state=initState.currentUser, action) => {
//     debugger
//     let cases = {
//         'LOGGED_IN': {...action.user},
//         'LOGGED_OUT': initState.currentUser,
//         'FRIEND': {user: action.user},
//         'UNFRIEND': {user: action.user}
//     }
//     debugger
//     return cases[action.type] || state
// }

// let selectedUserReducer = (state=initState.selectedUser, action) => {
//     debugger
//     let cases = {
//         'SELECTED': action.selectedUser,
//         'ADD_HEART': action.payload
//     }
//     debugger
//     return cases[action.type] || state
// }

// let optionsReducer = (state={option: ''}, action) => {
//     debugger
//     let cases = {
//         'SET_OPTION': {option: action.payload},
//         'CLEAR_OPTION': {option: action.payload}
//     }
//     return cases[action.type] || state
// }

// let exchangesReducer = (state=initState.exchanges, action) => {
//     debugger
//     let cases = {
//         'GET_EXCHANGES': action.exchanges,
//         'ADD_EXCHANGE': {...state, exchange: action.exchange}
//     }
//     return cases[action.type] || state
// }

// let reviewsReducer = (state=initState.reviews, action) => {
//     debugger
//     switch(action.type) {
//         case 'GET_REVIEWS':
//             debugger
//             return action.reviews
//         default:
//             return state
//     }
// }

// let searchReducer = (state=initState.search, action) => {
//     debugger
//     switch (action.type) {
//         case 'SET_QUERY':
//             debugger
//             return {
//                 input: action.query,
//                 outputs: initState.users.filter(
//                     user => user.username.includes(action.query)
//                 )
//             }
//         default:
//             return state
//     }
// }

// let conditionReducer = (state = initState.conditions.initial, action) => {
//     debugger
//     switch(action.type) {
//         case "SET_CONDITION":
//             return action.condition;
//         default:
//             return state;
//     }
// }

// let filteredUsersReducer = (state = initState.filteredUsers, action) => {
//     debugger
//     switch(action.type) {
//         case 'DISPLAY_FILTERED':
//             return action.filtered
//         default:
//             return state
//     }
// }

// let countrySelectionReducer = (state=initState.selectedCountry, action) => {
//     debugger
//     switch(action.type) {
//         case 'SET_COUNTRY':
//             return action.country
//         default: return state
//     }
// }

// // let friendshipsReducer = (state=initState.friendships, action) => {
// //     switch(action.type) {
// //         case 'ADD_FRIENDSHIP':
// //             return {...state, friendships: [...state.friendships, action.friendship]}
// //         case 'REMOVE_FRIENDSHIP':
// //             return {friendships: state.friendships.filter(f => f.id !== action.friendship.id)}
// //         default:
// //             return state
// //     }
// // }

// let friendshipsReducer = (state=initState.friendships, action) => {
//     debugger
//     let cases = {
//         'ADD_FRIENDSHIP': {...state, friendships: [...state.friendships, action.friendship]},
//         'REMOVE_FRIENDSHIP': {friendships: state.friendships.filter(f => f.id !== action.friendship.id)}
//     }
//     debugger
//     return cases[action.type] || state
// }


// let rootReducer = combineReducers({
//     users: usersReducer,
//     options: optionsReducer,
//     currentUser: currentUserReducer,
//     exchanges: exchangesReducer,
//     reviews: reviewsReducer,
//     selectedUser: selectedUserReducer,
//     search: searchReducer,
//     condition: conditionReducer,
//     filteredUsers: filteredUsersReducer,
//     countrySelection: countrySelectionReducer,
//     friendships: friendshipsReducer
// })

// export default rootReducer



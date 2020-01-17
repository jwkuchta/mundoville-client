// ** Action Creators ** //
// functions that actually go to the reducer //

// ** Users Actions ** //



// ** Async Actions ** //
// export const getUsers = () => {
//     return dispatch => {
//         return fetch('http://localhost:3000/api/v1/users')
//         .then(resp => resp.json())
//         .then(users => dispatch(setUsers(users)))
//         .catch(error => console.log(error))
//     }
// }

// export const addNewUser = () => {
//     fetch('http://localhost:3000/api/v1/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     user: {
//       username: 'inash',
//       password: 'blaaaa',
//       bio: 'Queen of Flavor, USA',
//       avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_4.jpg'
//     }
//   })
// })
//   .then(r => r.json())
//   .then(user => console.log(user))
// }

// ** Auth Actions ** //
// export const setOption = (option) => {
//   return {
//     type: 'SET_OPTION',
//     option: option
//   }
// }

// ** FETCHES ** //

export const fetchProfile = () => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/profile', {
      headers: {
          'Authorization': `Bearer ${localStorage.jwt}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => dispatch(loggedIn(data))
    )
  }
  
}

export const fetchUsers = () => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/users', {
      headers: {
        'Authorization': `Bearer ${localStorage.jwt}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(getUsers(data)))
  }
  
}

// ** ACTION CREATORS ** //

export const loggedIn = user => {
  return {type: 'LOGGED_IN', user: user}
}

export const getUsers = users => {
  return {type: 'ADD_USERS', users: users}
}
  



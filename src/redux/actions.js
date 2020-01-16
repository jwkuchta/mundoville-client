// ** Action Creators ** //
// functions that actually go to the reducer //

// ** Users Actions ** //

const setUsers = (users) => {
    return {
        type: 'ADD_USERS',
        users
    }
}

// ** Async Actions ** //
export const getUsers = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/users')
        .then(resp => resp.json())
        .then(users => dispatch(setUsers(users)))
        .catch(error => console.log(error))
    }
}

export const addNewUser = () => {
    fetch('http://localhost:3000/api/v1/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'inash',
      password: 'blaaaa',
      bio: 'Queen of Flavor, USA',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_4.jpg'
    }
  })
})
  .then(r => r.json())
  .then(user => console.log(user))
}

const setUser = user => {
  return {type: 'LOG_IN', user}
}

export const setCurrentUser = user => {
  return {type: 'LOGGED_IN', user}
}

export const logIn = (userData) => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({user: { 
          username: userData.username, 
          password: userData.password 
      }})
  })
  .then(response => response.json())
  .then(data => {
    if (data.user){
      localStorage.setItem('jwt', data.jwt)
        dispatch(setUser(data.user))
    } else {
      alert('Invalid Username or Password')
    }
  })
}}

// ** Auth Actions ** //
export const setOption = (option) => {
  return {
    type: 'SET_OPTION',
    option: option
  }
}

export const fetchUsers = () => {
  
}

// ** Action Creators ** //
// functions that actually go to the reducer //

// ** Users Actions ** //

// --------------------------------------------- //

// const setUsers = (users) => {
//   return {
//       type: 'GET_USERS_SUCCESS',
//       users
//   }
// }

// // ** Async Actions ** //
// export const getUsers = () => {
//   return dispatch => {
//       return fetch('http://localhost:3000/api/v1/users')
//       .then(resp => resp.json())
//       .then(users => dispatch(setUsers(users)))
//       .catch(error => console.log(error))
//   }
// }


// export const addNewUser = () => {
//   fetch('http://localhost:3000/api/v1/users', {
// method: 'POST',
// headers: {
//   'Content-Type': 'application/json',
//   Accept: 'application/json'
// },
// body: JSON.stringify({
//   user: {
//     username: 'inash',
//     password: 'blaaaa',
//     bio: 'Queen of Flavor, USA',
//     avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_4.jpg'
//   }
// })
// })
// .then(r => r.json())
// .then(user => console.log(user))
// }

// // const logInUser = user => {
// // return {type: 'LOG_IN', user}
// // }

// export const setCurrentUser = user => {
//   return {type: 'LOGGED_IN', user}
// }

// export const logIn = (userData) => {
// return dispatch => {
//   return fetch('http://localhost:3000/api/v1/login', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({user: { 
//         username: userData.username, 
//         password: userData.password 
//     }})
// })
// .then(response => response.json())
// .then(data => {
//   if (data.user){
//     localStorage.setItem('jwt', data.jwt)
//     dispatch(setCurrentUser(data.user))
//   } else {
//     alert('Invalid Username or Password')
//   }
// })
// }}

// // ** Auth Actions ** //
// export const setOption = (option) => {
// return {
//   type: 'SET_OPTION',
//   option: option
// }
// }


// ** Async Actions ** //
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
    .then(resp => resp.json())
    .then(data => dispatch(getUsers(data)))
  }
}

// export const fetchExchanges = currentUser => {
//   debugger
//   return dispatch => {
//     return fetch('http://localhost:3000/api/v1/exchanges', {
//       method: 'POST',
//       headers: {
//           'Authorization': `Bearer ${localStorage.jwt}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//       },
//       body: JSON.stringify({exchange: {id: currentUser.id}})
//   })
//   .then(r => r.json())
//   .then(data => dispatch(getExchanges(data))
//   )}
// }

// export const submitNewExchange = (sender_id, receiver_id, body) => {
//   return dispatch => {
//     return fetch('http://localhost:3000/api/v1/exchanges', {
//       method: 'POST',
//       headers: {
//           'Authorization': `Bearer ${localStorage.jwt}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//           first_user_id: sender_id,
//           second_user_id: receiver_id,
//           body: body
//       })
//   })
//   .then(resp => resp.json())
//   .then(json => console.log(json), alert('Message sent!'))
//   // .then(json => dispatch(getExchanges(json)))
//   }
// }

// ** ACTION CREATORS ** //
// functions that actually go to the reducer //

export const loggedIn = user => {
  return {type: 'LOGGED_IN', user: user}
}

export const getUsers = users => {
  return {type: 'ADD_USERS', users: users}
}

export const getExchanges = exchanges => {
  // debugger
  return {type: 'GET_EXCHANGES', exchanges: exchanges}
}

// export const addExchange = exchange => {
//   return {type: 'ADD_EXCHANGE', exchange: exchange}
// }


  




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

export const selectedUser = user => {
  return {type: 'SELECTED', user: user}
}

export const setQuery = query => {
  return {type: 'SET_QUERY', query: query}
}

// export const handleSearchBarResultSelect = (e, results) => {
//   return (dispatch) => {
//       dispatch({ type: 'SET_ITEM', item: results.item });
//       dispatch({ type: 'SET_CONDITION', condition: results.condition });
//   }
// }

export const filterUsers = filtered => {
  return {type: 'DISPLAY_FILTERED', filtered: filtered}
}

// export const addExchange = exchange => {
//   return {type: 'ADD_EXCHANGE', exchange: exchange}
// }


  



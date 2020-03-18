
export const fetchUsers = () => {
  // debugger
  return dispatch => {
    return fetch('http://localhost:4000/api/v1/users', {
      headers: {
        // 'Authorization': `Bearer ${localStorage.jwt}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      // debugger
      dispatch(getUsers(data))
    })
  }
}

export const fetchReviews = () => {
  fetch('http://localhost:4000/api/v1/reviews', {
    headers: {
      // 'Authorization': `Bearer ${localStorage.jwt}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(resp => resp.json())
  .then(data => getReviews(data))
}

// const loggedIn = user => {
//   // debugger
//   return {type: 'LOGGED_IN', user: user}
// }

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

export const filterUsers = filtered => {
  return {type: 'DISPLAY_FILTERED', filtered: filtered}
}

export const setCountry = country => {
  return {type: 'SET_COUNTRY', country: country}
}

export const setOption = option => {
  return {type: 'SET_OPTION', option: option}
}

export const clearOption = () => {
  return {type: 'CLEAR_OPTION', option: ''}
}

export const getReviews = reviews => {
  return {type: 'GET_REVIEWS', payload: reviews}
}


  



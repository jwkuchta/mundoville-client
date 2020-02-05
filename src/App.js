import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { Route, Switch, Redirect } from "react-router-dom"
import LoggedInNavBar from './components/LoggedInNavBar'
import LoggedOutNavBar from './components/LoggedOutNavBar'
import CurrentUserProfilePage from './containers/CurrentUserProfilePage'
import HomePage from './containers/HomePage'
import UsersPage from './containers/UsersPage'
import { fetchProfile, fetchUsers, getExchanges } from './redux/actions'
import EditProfilePage from './containers/EditProfilePage'
import MessagesContainer from './containers/MessagesContainer'
import UserProfilePage from './containers/UserProfilePage'
import AboutPage from './components/AboutPage'

class App extends Component {

  componentDidMount() {
    if (localStorage.jwt) {
      this.props.fetchProfile()
      this.props.fetchUsers()  
    } else {
      localStorage.clear()
    }
  }

  fetchExchanges = () => {
    fetch('http://localhost:3000/api/v1/findExchanges', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.jwt}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({id: this.props.currentUser.id})
    })
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      this.props.getExchanges(data)
    })
    .catch(e => console.log(e))
  }
  
  fetchReviews = () => {
    fetch('http://localhost3000/api/v1/reviews', {
      headers: {
        'Authorization': `Bearer ${localStorage.jwt}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
        this.props.getReviews(data)
    })
  }
  
  render() {
    
    if (this.props.currentUser) {
      this.fetchExchanges()
      this.fetchReviews()
    }

    return (
      <div className="App" >
        {localStorage.jwt ? <LoggedInNavBar /> : <LoggedOutNavBar />}
        <Switch>

          <Route exact path='/'>
            {!localStorage.jwt ? 
            <div className='mainPage'>< HomePage /></div> : <div className='mainPage'>< CurrentUserProfilePage /></div>}
          </Route>

          <Route exact path='/login'>
            {localStorage.jwt ? <Redirect to='/' />: <HomePage />}
          </Route>

          <Route exact strict path='/users'>
            <div className='mainPage'><UsersPage /></div>
          </Route>

          <Route exact strict path='/about'>
            <div className='mainPage'><AboutPage /></div>
          </Route>
          
          <Route path={`/users/${this.props.currentUser.username}/edit`}>
            <div className='userEditPage'><EditProfilePage /></div>
          </Route>

          <Route exact strict path='/users/:username'>
            <div className='mainPage'><UserProfilePage/></div>
          </Route>

          <Route exact strict path='/messages'>
            {!localStorage.jwt
              ? <Redirect to='/login'/>
                : <div className='mainPage'><MessagesContainer /></div>}
          </Route>

          <Redirect from='*' to='/' />
        </Switch>
      </div>
    )
  }
}

const mapSTP = state => {
  return {currentUser: state.currentUser}
}

const mapDTP = dispatch => {
  return {
    fetchProfile: user => dispatch(fetchProfile(user)),
    fetchUsers: users => dispatch(fetchUsers(users)),
    getExchanges: exchanges => dispatch(getExchanges(exchanges)),
    // later add and write an action for:
    getReviews: reviews => dispatch({type: 'GET_REVIEWS', payload: reviews})
  }
}

export default connect(mapSTP, mapDTP)(App)
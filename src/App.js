import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.css'
import {Route, Switch, Redirect} from "react-router-dom"
import Navigation from './components/Navigation'
import LoggedOutNavBar from './components/LoggedOutNavBar'
import UserHomePage from './containers/UserHomePage'
import HomePage from './containers/HomePage'
import UsersPage from './containers/UsersPage'

class App extends Component {

  componentDidMount() {
    if (localStorage.jwt) {
      fetch('http://localhost:3000/api/v1/profile', {
        headers: {
            'Authorization': `Bearer ${localStorage.jwt}`,
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.g0U5SAOLozk3dz0mNUrvBSR-0CSewJ5eParRWg_abVk',
            
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
      })
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => {
        this.props.loggedIn(data)
      })
      // .then(data => console.log(data))

      fetch('http://localhost:3000/api/v1/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.jwt}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        this.props.getUsers(data)
      })
    } else {
      localStorage.clear()
    }
  }
  
  render() {
    return (
      <div className="App">
        {localStorage.jwt ? <Navigation /> : <LoggedOutNavBar />}
        <Switch>
          <Route exact path='/'>
            {!localStorage.jwt ? <div className='mainPage'>< HomePage /></div> : <div className='mainPage'>< UserHomePage /></div>}
          </Route>

          <Route exact path='/login'>
            {localStorage.jwt ? <Redirect to='/' />: <HomePage />}
          </Route>

          <Route exact strict path='/users'>
            <div className='mainPage'><UsersPage /></div>
          </Route>
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: user => dispatch({type: 'LOGGED_IN', user: user}),
    getUsers: users => dispatch({type: 'ADD_USERS', users: users})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
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
    this.props.getUsers()
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

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: users => dispatch({type: 'GET_USERS', payload: users}),
    addNewUser: user => dispatch({type: 'ADD_NEW_USER', payload: user})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

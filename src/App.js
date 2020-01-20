import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.css'
import {Route, Switch, Redirect} from "react-router-dom"
import Navigation from './components/Navigation'
import LoggedOutNavBar from './components/LoggedOutNavBar'
import UserHomePage from './containers/UserHomePage'
import HomePage from './containers/HomePage'
import UsersPage from './containers/UsersPage'
import {fetchProfile, fetchUsers} from './redux/actions'
import EditProfilePage from './containers/EditProfilePage'

class App extends Component {

  componentDidMount() {
    if (localStorage.jwt) {
      this.props.fetchProfile()
      this.props.fetchUsers()   
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
          <Route path={`/users/${this.props.currentUser.username}/edit`}>
            <div className='userEditPage'><EditProfilePage /></div>
          </Route>
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: user => dispatch(fetchProfile(user)),
    fetchUsers: users => dispatch(fetchUsers(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
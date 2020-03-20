import React, { createRef, useEffect } from "react";
import { connect } from 'react-redux'
import './css/NavBar.scss'
import './css/App.scss'
import { Route, Switch, Redirect } from "react-router-dom"
import CurrentUserProfilePage from './containers/CurrentUserProfilePage'
import HomePage from './containers/HomePage'
import UsersPage from './containers/UsersPage'
import EditProfilePage from './containers/EditProfilePage'
import MessagesContainer from './containers/MessagesContainer'
import UserProfilePage from './containers/UserProfilePage'
import AboutPage from './components/AboutPage'
import LoggedOutNavBar from './components/LoggedOutNavBar'
import LoggedInNavBar from './components/LoggedInNavBar'
import { Sticky } from 'semantic-ui-react'
import { useAuth0 } from "./react-auth0-spa";
import { fetchUsers } from './redux/actions'
import PrivateRoute from './components/PrivateRoute'

const App = (props) => {
  
  const { loading, isAuthenticated } = useAuth0()

  useEffect(() => {
    props.fetchUsers()
  }, [])

  const contextRef = createRef()

  if (loading) {
    return <div>Loading...</div>
  }

  // shorted way to secure the route using a ternary expression. No need for PrivateRoute
  return (
    <div className="App" ref={contextRef}>
    <Sticky context={contextRef} fluid>
          {!isAuthenticated && <LoggedOutNavBar attached='top' tabular style={{ backgroundColor: '#246a92', paddingTop: '1em' }}/>}
          {isAuthenticated && <LoggedInNavBar attached='top' tabular style={{ backgroundColor: '#246a92', paddingTop: '1em' }}/>}
          </Sticky>
          <Switch>
            <Route exact path='/'>
              {!isAuthenticated ? <div className='mainPage'>< HomePage /></div> : <div className='mainPage'>< CurrentUserProfilePage /></div>} 
            </Route>
  
            {/* <Route exact path='/login'>
              {isAuthenticated === true ? <Redirect to='/' />: <LoginPage />}
            </Route> */}
  
            {/* <Route exact path='/signup'>
              {isAuthenticated === true ? <Redirect to='/' />: <SignupPage />}
            </Route> */}
  
            <Route exact strict path='/users'>
              {isAuthenticated ? <div className='mainPage'><UsersPage /></div> : <Redirect to='/' /> } 
            </Route>
  
            <Route exact strict path='/about'>
              <div className='mainPage'><AboutPage /></div>
            </Route>
            
            <Route exact strict path={`/users/${props.currentUser.user.sub}/edit`}>
              {isAuthenticated ? <div className='userEditPage'><EditProfilePage /></div> : <HomePage /> }
            </Route>
  
            <Route exact path='/users/:sub'>
              {isAuthenticated ? <div className='mainPage'><UserProfilePage/></div> : <Redirect to='/' /> } 
            </Route>
  
            <Route path='/messages'>
              {isAuthenticated ? <div className='mainPage'><MessagesContainer /></div> : <Redirect to='/'/> }
            </Route>
  
            <Redirect from='*' to='/' />
          </Switch>
    </div> 
  )
}

const mapSTP = state => {
  return {currentUser: state.currentUser}
}

const mapDTP = dispatch => {
  return {
    fetchUsers: users => dispatch(fetchUsers(users))
  }
}

export default connect(mapSTP, mapDTP)(App)
import React, { createRef, useEffect } from "react";
import { connect } from 'react-redux'
import './css/NavBar.scss'
import './css/App.scss'
import { Router, Route, Switch, Redirect } from "react-router-dom"
import CurrentUserProfilePage from './containers/CurrentUserProfilePage'
import HomePage from './containers/HomePage'
import UsersPage from './containers/UsersPage'
import EditProfilePage from './containers/EditProfilePage'
import MessagesContainer from './containers/MessagesContainer'
import UserProfilePage from './containers/UserProfilePage'
import AboutPage from './components/AboutPage'
import LoggedOutNavBar from './components/LoggedOutNavBar'
import LoggedInNavBar from './components/LoggedInNavBar'
import { Sticky, Image } from 'semantic-ui-react'
import { useAuth0 } from "./react-auth0-spa";
import { fetchUsers } from './redux/actions'
import history from "./utils/history"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import clock from './photos/clock.gif'

const App = (props) => {

  // debugger
  
  const { loading, isAuthenticated } = useAuth0()

  useEffect(() => {
    props.fetchUsers()
  }, [])

  const contextRef = createRef()

  if (loading) {
    debugger
    return <div className="loader center" ><Image src={clock} style={{position: 'absolute'}}></Image></div>
  }

  return (
    <div className="App" ref={contextRef}>
    {/* // <div className={loading ? "App-loading" : 'App'} ref={contextRef}> */}
    
      <Router history={history}>
          
          <Sticky context={contextRef} fluid>
          {!isAuthenticated && <LoggedOutNavBar attached='top' tabular style={{ backgroundColor: '#246a92', paddingTop: '1em' }}/>}
          {isAuthenticated && <LoggedInNavBar attached='top' tabular style={{ backgroundColor: '#246a92', paddingTop: '1em' }}/>}
          </Sticky>
          
          <Switch>
            <Route exact path='/'>
              {!isAuthenticated ? <div className='mainPage'>< HomePage /></div> : <div className='mainPage'>< CurrentUserProfilePage /></div>} 
            </Route>
  
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

            <Route exact strict path='/logout'>
              <Redirect to='https://dev-q3adauy2.auth0.com/v2/logout' />
            </Route>
  
            <Redirect from='*' to='/' />
          </Switch>
      </Router>
      
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
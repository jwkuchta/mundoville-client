// import React, { createRef } from "react";
// import { connect } from 'react-redux'
// import './css/NavBar.scss'
// import './css/App.scss'
// import { Route, Switch, Redirect } from "react-router-dom"
// import CurrentUserProfilePage from './containers/CurrentUserProfilePage'
// import HomePage from './containers/HomePage'
// import UsersPage from './containers/UsersPage'
// import EditProfilePage from './containers/EditProfilePage'
// import MessagesContainer from './containers/MessagesContainer'
// import UserProfilePage from './containers/UserProfilePage'
// import AboutPage from './components/AboutPage'
// import LoggedOutNavBar from './components/LoggedOutNavBar'
// import LoggedInNavBar from './components/LoggedInNavBar'
// import { Sticky } from 'semantic-ui-react'
// import { useAuth0 } from "./react-auth0-spa";

// const App  = (props) => {

//   const { loading, user } = useAuth0();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const contextRef = createRef()

//   return (
//     <div className="App" ref={contextRef}>
//         <Sticky context={contextRef} fluid>
//         {!isAuthenticated && <LoggedOutNavBar attached='top' tabular style={{ backgroundColor: '#246a92', paddingTop: '1em' }}/>}
//         {isAuthenticated && <LoggedInNavBar attached='top' tabular style={{ backgroundColor: '#246a92', paddingTop: '1em' }}/>}
//         </Sticky>
//       <Switch>
//           <Route exact path='/'>
//             {isAuthenticated === false ? 
//             <div className='mainPage'>< HomePage /></div> : <div className='mainPage'>< CurrentUserProfilePage /></div>}
//           </Route>

//           {/* <Route exact path='/login'>
//             {isAuthenticated === true ? <Redirect to='/' />: <LoginPage />}
//           </Route> */}

//           {/* <Route exact path='/signup'>
//             {isAuthenticated === true ? <Redirect to='/' />: <SignupPage />}
//           </Route> */}

//           <Route exact strict path='/users'>
//             {isAuthenticated === true ? <div className='mainPage'><UsersPage /></div> : <Redirect to='/' /> } 
//           </Route>

//           <Route exact strict path='/about'>
//             <div className='mainPage'><AboutPage /></div>
//           </Route>
          
//           <Route path={`/users/${props.currentUser.username}/edit`}>
//             {isAuthenticated === true ? <div className='userEditPage'><EditProfilePage /></div> : <Redirect to='/' /> }
//           </Route>

//           <Route exact strict path='/users/:username'>
//             {isAuthenticated === true ? <div className='mainPage'><UserProfilePage/></div> : <Redirect to='/' /> } 
//           </Route>

//           <Route path='/messages'>
//             {isAuthenticated ? <div className='mainPage'><MessagesContainer /></div> : <Redirect to='/'/> }
//           </Route>

//           <Redirect from='*' to='/' />
//         </Switch>
//     </div>
//   );
// }

// const mapSTP = state => {
//   return {currentUser: state.currentUser}
// }

// export default connect(mapSTP)(App)

// import React, { createRef, Component } from "react";
// import { connect } from 'react-redux'
// import './css/NavBar.scss'
// import './css/App.scss'
// import { Route, Switch, Redirect } from "react-router-dom"
// import CurrentUserProfilePage from './containers/CurrentUserProfilePage'
// import HomePage from './containers/HomePage'
// import UsersPage from './containers/UsersPage'
// import EditProfilePage from './containers/EditProfilePage'
// import MessagesContainer from './containers/MessagesContainer'
// import UserProfilePage from './containers/UserProfilePage'
// import AboutPage from './components/AboutPage'
// import LoggedOutNavBar from './components/LoggedOutNavBar'
// import LoggedInNavBar from './components/LoggedInNavBar'
// import { Sticky } from 'semantic-ui-react'
// // import { useAuth0 } from "./react-auth0-spa";
// import { fetchUsers, getExchanges } from './redux/actions'

// class App extends Component {

//   // const { loading, localStorage.jwt, user } = useAuth0();

//   user = this.props.currentUser.user

//   if (user) {
//     debugger
//     this.addNewUser(this.user)
//     this.fetchProfile(this.user)
//     this.fetchExchanges()
//     this.fetchReviews()
//     this.props.fetchUsers()
//   }

//   fetchExchanges = () => {
//     fetch('http://localhost:4000/api/v1/findExchanges', {
//       method: 'POST',
//       headers: {
//         // 'Authorization': `Bearer ${localStorage.jwt}`,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({id: this.user.id})
//     })
//     .then(resp => {
//       return resp.json()
//     })
//     .then(data => {
//       this.props.getExchanges(data)
//     })
//     .catch(e => console.log(e))
//   }
  
//   fetchReviews = () => {
//     debugger
//     fetch('http://localhost:4000/api/v1/reviews', {
//       headers: {
//         // 'Authorization': `Bearer ${localStorage.jwt}`,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//     .then(resp => console.log(resp))
//   }

//   addNewUser = user => {
//     debugger
//     fetch('http://localhost:4000/api/v1/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           "user": {
//             'nickname': user.nickname, 
//             'name': user.name, 
//             'picture': user.picture, 
//             'email': user.email,
//             'sub': user.sub.split('|')[1]
//           }
//         })
//     })
//     .then(r => r.json())
//     .then(data => {
//       // debugger
//         localStorage.setItem('jwt', data.jwt)
//     })
// }

//   fetchProfile = (user) => {
//     debugger
//     fetch(`http://localhost:4000/api/v1/users/${user.sub.split('|')[1]}`, {
//         headers: {
//             // 'Authorization': `Bearer ${localStorage.jwt}`,
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           }
//       })
//       .then(resp => resp.json())
//       .then(data => {
//         debugger
//         this.props.setUser(data)
//       }
//     )
//   }


  
//     const contextRef = createRef()
  
//     return (
//       <div className="App" ref={contextRef}>
//           <Sticky context={contextRef} fluid>
//           {!localStorage.jwt && <LoggedOutNavBar attached='top' tabular style={{ backgroundColor: '#246a92', paddingTop: '1em' }}/>}
//           {localStorage.jwt && <LoggedInNavBar attached='top' tabular style={{ backgroundColor: '#246a92', paddingTop: '1em' }}/>}
//           </Sticky>
        // <Switch>
        //     <Route exact path='/'>
        //       {localStorage.jwt ? 
        //       <div className='mainPage'>< HomePage /></div> : <div className='mainPage'>< CurrentUserProfilePage /></div>}
        //     </Route>
  
        //     {/* <Route exact path='/login'>
        //       {localStorage.jwt === true ? <Redirect to='/' />: <LoginPage />}
        //     </Route> */}
  
        //     {/* <Route exact path='/signup'>
        //       {localStorage.jwt === true ? <Redirect to='/' />: <SignupPage />}
        //     </Route> */}
  
        //     <Route exact strict path='/users'>
        //       {localStorage.jwt ? <div className='mainPage'><UsersPage /></div> : <Redirect to='/' /> } 
        //     </Route>
  
        //     <Route exact strict path='/about'>
        //       <div className='mainPage'><AboutPage /></div>
        //     </Route>
            
        //     {/* <Route path={`/users/${this.user.username}/edit`}>
        //       {localStorage.jwt === true ? <div className='userEditPage'><EditProfilePage /></div> : <Redirect to='/' /> }
        //     </Route> */}
  
        //     <Route exact strict path='/users/:username'>
        //       {localStorage.jwt ? <div className='mainPage'><UserProfilePage/></div> : <Redirect to='/' /> } 
        //     </Route>
  
        //     <Route path='/messages'>
        //       {localStorage.jwt ? <div className='mainPage'><MessagesContainer /></div> : <Redirect to='/'/> }
        //     </Route>
  
        //     <Redirect from='*' to='/' />
        //   </Switch>
//       </div>
//     )
//   }

  
// }

// const mapSTP = state => {
//   return {currentUser: state.currentUser}
// }

// const mapDTP = dispatch => {
//   return {
//     fetchUsers: users => dispatch(fetchUsers(users)),
//     getExchanges: exchanges => dispatch(getExchanges(exchanges)),
//     setUser: user => dispatch({type: 'LOGGED_IN', payload: user}),
//     getReviews: reviews => dispatch({type: 'GET_REVIEWS', payload: reviews})
//   }
// }

// export default connect(mapSTP, mapDTP)(App)

import React, { createRef, Component } from "react";
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
import { fetchUsers, getExchanges } from './redux/actions'

function App() {
  
  const { loading, isAuthenticated } = useAuth0()

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
            
            {/* <Route path={`/users/${this.user.username}/edit`}>
              {isAuthenticated === true ? <div className='userEditPage'><EditProfilePage /></div> : <Redirect to='/' /> }
            </Route> */}
  
            <Route exact strict path='/users/:username'>
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
    fetchUsers: users => dispatch(fetchUsers(users)),
    getExchanges: exchanges => dispatch(getExchanges(exchanges)),
    setUser: user => dispatch({type: 'LOGGED_IN', payload: user}),
    getReviews: reviews => dispatch({type: 'GET_REVIEWS', payload: reviews})
  }
}

export default connect(mapSTP, mapDTP)(App)
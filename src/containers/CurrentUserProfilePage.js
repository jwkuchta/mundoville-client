import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CurrentUserProfileCard from '../components/CurrentUserProfileCard'
import { Grid, Container } from 'semantic-ui-react'
import UserInfo from '../components/UserInfo'
import { fetchUsers, getExchanges } from '../redux/actions'
import { useAuth0 } from "../react-auth0-spa"

const CurrentUserProfilePage = (props) => {

  // debugger

  const { loading, user } = useAuth0()

  debugger

    useEffect(() => {
      // debugger
      let auth0user = user
      let currentUser = props.allUsers.find(user => user.sub === auth0user.sub.split('|')[1])
      createNewUser(user)
      fetchExchanges()
      fetchReviews()
      debugger
      props.setUser(currentUser)
    }, []) 
    // empty array assures it is only used once, getting rid of the re-render loop

  if (loading) {
    return <div>Loading...</div>;
  }

  const createNewUser = user => {
    debugger
    fetch('http://localhost:4000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({...user, sub: user.sub.split('|')[1]})
    })
    .then(r => r.json())
    .then(data => {
        localStorage.setItem('jwt', props.currentUser.user)
        // debugger
        // we need a token for that, add later
    })
  }

  const fetchExchanges = () => {
    //   debugger
    fetch('http://localhost:4000/api/v1/findExchanges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({sub: user.sub.split('|')[1]})
    })
    .then(resp => {
      return resp.json()
    })
    .then(data => props.getExchanges(data))
    .catch(e => console.log(e))
  }

  const fetchReviews = () => {
    // debugger
    fetch('http://localhost:4000/api/v1/reviews', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => props.getReviews(data))
    .catch(err => console.log(err))
  }
  return (
    <Container className='profilePage'>
        <Grid >
            <Grid.Row>

                <Grid.Column width={5}>
                    <Grid.Row>
                        <CurrentUserProfileCard /> 
                    </Grid.Row>
                </Grid.Column>

                <Grid.Column width={11} style={{'backgroundColor': '#276890', 'padding': '1px'}}>
                    <Grid.Row>
                        <UserInfo user={props.currentUser} />
                    </Grid.Row>
                </Grid.Column>
                
            </Grid.Row>
        </Grid>
    </Container>
  ) 
}

const mapSTP = state => {
    // console.log(state)
    return {
        allUsers: state.users,
        currentUser: state.currentUser
    }
}

const mapDTP = dispatch => {
    return {
      fetchUsers: users => dispatch(fetchUsers(users)),
      getExchanges: exchanges => dispatch(getExchanges(exchanges)),
      setUser: user => dispatch({type: 'LOGGED_IN', payload: user}),
      getReviews: reviews => dispatch({type: 'GET_REVIEWS', payload: reviews})
    }
  }

export default connect(mapSTP, mapDTP)(CurrentUserProfilePage)


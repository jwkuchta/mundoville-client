import React from 'react'
import { connect } from 'react-redux'
import CurrentUserProfileCard from '../components/CurrentUserProfileCard'
import { Grid, Container } from 'semantic-ui-react'
import UserInfo from '../components/UserInfo'
import { fetchUsers, getExchanges } from '../redux/actions'
import { useAuth0 } from "../react-auth0-spa"

const CurrentUserProfilePage = (props) => {

    const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

    const fetchExchanges = () => {
        fetch('http://localhost:4000/api/v1/findExchanges', {
          method: 'POST',
          headers: {
            // 'Authorization': `Bearer ${localStorage.jwt}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({id: props.currentUser.id})
        })
        .then(resp => {
          return resp.json()
        })
        .then(data => {
          props.getExchanges(data)
        })
        .catch(e => console.log(e))
      }
      
      const fetchReviews = () => {
        // debugger
        fetch('http://localhost:4000/api/v1/reviews', {
          headers: {
            // 'Authorization': `Bearer ${localStorage.jwt}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(resp => console.log(resp))
      }
    
      const addNewUser = user => {
        // debugger
        fetch('http://localhost:4000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              "user": {
                'nickname': user.nickname, 
                'name': user.name, 
                'picture': user.picture, 
                'email': user.email,
                'sub': user.sub
              }
            })
        })
        .then(r => r.json())
        .then(data => {
          // debugger
            localStorage.setItem('jwt', data.jwt)
        })
    }
    
      const fetchProfile = (user) => {
        debugger
        fetch(`http://localhost:4000/api/v1/users/${user.sub}`, {
            headers: {
                // 'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
          })
          .then(resp => {
            debugger
            resp.json()
          })
          .then(data => {
            debugger
            props.setUser(data)
          }
        )
      }
    
        if (user) {
          addNewUser(user)
          fetchProfile(user)
          fetchExchanges()
          fetchReviews()
          props.fetchUsers()
        }


        // console.log(props)
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

const mapStateToProps = state => {
    // console.log(state)
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}
  
  const mapDTP = dispatch => {
    return {
      fetchUsers: users => dispatch(fetchUsers(users)),
      getExchanges: exchanges => dispatch(getExchanges(exchanges)),
      setUser: user => dispatch({type: 'LOGGED_IN', user: user}),
      getReviews: reviews => dispatch({type: 'GET_REVIEWS', payload: reviews})
    }
  }

export default connect(mapStateToProps, mapDTP)(CurrentUserProfilePage)
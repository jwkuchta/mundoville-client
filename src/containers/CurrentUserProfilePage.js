import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CurrentUserProfileCard from '../components/CurrentUserProfileCard'
import { Grid, Container } from 'semantic-ui-react'
import UserInfo from '../components/UserInfo'
import { fetchUsers, getExchanges } from '../redux/actions'
import { useAuth0 } from "../react-auth0-spa"

const CurrentUserProfilePage = (props) => {

    const { loading, user, isAuthenticated } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
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

export default connect(mapStateToProps)(CurrentUserProfilePage)


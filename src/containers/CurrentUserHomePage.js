import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Avatar from './Avatar'
// import SemanticGoodies from '../components/SemanticGoodies'
import CurrentUserProfileCard from '../components/CurrentUserProfileCard'
import { Grid, Container } from 'semantic-ui-react'
// import { Button, Link } from 'semantic-ui-react'
import UserInfo from '../components/UserInfo'


class CurrentUserHomePage extends Component {

    render() {

        // console.log(this.props)
        return (
            <Container>
                <Grid>
                <br></br>
                <Grid.Row>
                <Grid.Column width={4}>
                        <CurrentUserProfileCard /> 
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <UserInfo user={this.props.currentUser} />
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        )
    }  
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(CurrentUserHomePage)
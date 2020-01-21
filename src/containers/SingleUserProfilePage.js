import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import SingleUserProfileCard from '../components/SingleUserProfileCard'
// import {Button, Link} from 'semantic-ui-react'
// import {selectedUser} from '../redux/actions'
import {connect} from 'react-redux'

class SingleUserProfilePage extends Component {

    render() {

        let username = window.location.pathname.split('/')[2]
        // debugger
        let allUsers = this.props.users
        let selectedUser = allUsers.filter(user => user.username === username)

            return (
                <div>
                <h1>Profile for {selectedUser.username}</h1>
                <Grid.Column>
                    <Grid.Row>
                    <SingleUserProfileCard user={selectedUser} /> 
                    </Grid.Row>
                </Grid.Column>    
                </div>
            )
    }
}

const mapSTP = state => {
    return {
        users: state.users,
        // currentUser: state.currentUser,
        // selectedUser: state.selectedUser
    }
}

export default connect(mapSTP)(SingleUserProfilePage)
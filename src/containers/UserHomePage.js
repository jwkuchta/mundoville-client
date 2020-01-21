import React, { Component } from 'react'
import {connect} from 'react-redux'
// import Avatar from './Avatar'
// import SemanticGoodies from '../components/SemanticGoodies'
import ProfileCard from '../components/ProfileCard'
import { Grid } from 'semantic-ui-react'
// import {Button, Link} from 'semantic-ui-react'


class UserHomePage extends Component {

    render() {

        // console.log(this.props)
        return (
            <div>
            <h1>Hello, {this.props.currentUser.username}</h1>
            <Grid.Column>
                <Grid.Row>
                <ProfileCard /> 
                </Grid.Row>
            </Grid.Column>    
            </div>
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

export default connect(mapStateToProps)(UserHomePage)
import React, { Component } from 'react'
import {connect} from 'react-redux'
// import Avatar from './Avatar'
// import SemanticGoodies from '../components/SemanticGoodies'
import CurrentUserProfileCard from '../components/CurrentUserProfileCard'
import { Grid } from 'semantic-ui-react'
// import {Button, Link} from 'semantic-ui-react'


class CurrentUserHomePage extends Component {

    render() {

        // console.log(this.props)
        return (
            <div>
            <h1>Hello, {this.props.currentUser.username}</h1>
            <Grid.Column>
                <Grid.Row>
                <CurrentUserProfileCard /> 
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

export default connect(mapStateToProps)(CurrentUserHomePage)
import React, { Component } from 'react'
import {connect} from 'react-redux'
// import Avatar from './Avatar'
// import SemanticGoodies from '../components/SemanticGoodies'
import ProfileCard from '../components/ProfileCard'
// import {Button, Link} from 'semantic-ui-react'


class UserHomePage extends Component {

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     const formData = new FormData()

    render() {

        // console.log(this.props)
        return (
            <div>
            <h1>You are currently logged in as {this.props.currentUser.username}</h1>
                {/* <p>{loremIpsum}</p> */}
                {/* <SemanticGoodies />  */}
                <ProfileCard />  
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
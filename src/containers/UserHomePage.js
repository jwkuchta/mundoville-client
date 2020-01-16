import React, { Component } from 'react'
import {connect} from 'react-redux'
// import Avatar from './Avatar'
// import SemanticGoodies from '../components/SemanticGoodies'
import ProfileCard from '../components/ProfileCard'
// import { setCurrentUser } from '../redux/actions'
// import {loremIpsum} from './loremIpsum'

class UserHomePage extends Component {

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     const formData = new FormData()

    render() {

        console.log(this.props.user.username)
        return (
            <div>
            {/* <h1>You are currently logged in as {user.username}</h1> */}
                {/* <p>{loremIpsum}</p> */}
                {/* <SemanticGoodies />  */}
                <ProfileCard />  
            </div>
        )
    }  
}

const mapStateToProps = state => {
    return {
        users: state.users,
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(UserHomePage)
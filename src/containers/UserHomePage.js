import React from 'react'
import {connect} from 'react-redux'
// import Avatar from './Avatar'
import SemanticGoodies from '../components/SemanticGoodies'
import ProfileCard from '../components/ProfileCard'
// import {loremIpsum} from './loremIpsum'

const UserHomePage = (props) => {

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()

    }
         
    return (
        <div>
            <h1>This is the UserHomePage</h1>
            {/* <p>{loremIpsum}</p> */}
            {/* <SemanticGoodies />  */}
            <ProfileCard />  
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserHomePage)
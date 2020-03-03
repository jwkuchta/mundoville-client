

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Button, Container, Rating } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { connect } from 'react-redux'
import PicUpload from './PicUpload'
// import PicUploadNoCrop from './PicUploadNoCrop'

class CurrentUserProfileCard extends Component {

    render() {
        
        // debugger
        let pic_url = `http://localhost:3000/${this.props.currentUser.profile_pic_url}`
        let first_name = this.props.currentUser.first_name
        let last_name = this.props.currentUser.last_name
        let username = this.props.currentUser.username
        let currentUser = this.props.currentUser

        return (
            <div style={{'backgroundColor': '#d5d5d8', 'padding': '2px'}}>
                <div style={{'backgroundColor': 'rgb(249, 249, 252)', 'padding': '2px'}}>
                    <Image src={currentUser.profile_pic_url ? pic_url : placeholder}></Image>
                </div>
                <br></br>
                <div style={{'backgroundColor': '#d5d5d8', 'padding': '2px'}}>
                    <h3>to change your profile picture click "Choose File" and then "save"</h3>
                    <PicUpload /><br></br>
                </div>
                <br></br>
                <div style={{'backgroundColor': '#d5d5d8', 'padding': '2px'}}>
                <Button className='ui button'>
                        <Link 
                        to={`/users/${currentUser.username}/edit`}
                        style={{fontSize: '4vh', textAlign: 'justify'}}
                        >Edit your profile</Link>
                </Button>
                </div><br></br>
                
                <div style={{'backgroundColor': '#d5d5d8', 'padding': '2px'}}><br></br>
                {currentUser.rating ? 
                    <Rating 
                        icon='star' 
                        defaultRating={currentUser.rating} 
                        maxRating={5} 
                        disabled
                    />
                    : null }<br/>
                    {currentUser.rating ? currentUser.rating + '/5' : 'No reviews yet'}<br/><br/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        users: state.users
    }
}
export default connect(mapStateToProps)(CurrentUserProfileCard)


import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Button, Rating } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { connect } from 'react-redux'
import PicUpload from './PicUpload'
// import PicUploadNoCrop from './PicUploadNoCrop'
// import { apiBaseUrl } from '../utils/constants'

const CurrentUserProfileCard = props => {

    const apiBaseUrl = "http://mundoville-api.herokuapp.com"

    let pic_url = `${apiBaseUrl}${props.currentUser.profile_pic_url}`
    let currentUser = props.currentUser

    return (
        <div style={{'backgroundColor': '#eeeef0', 'padding': '1px'}}>
            <div style={{'backgroundColor': 'rgb(249, 249, 252)', 'padding': '1px', marginLeft: 'auto', display: 'block'}}>
                <Image src={currentUser.profile_pic_url ? pic_url : placeholder}
                style={{margin: 'auto', display: 'block', width: '22vw'}}
                ></Image>
            </div>
            <br></br>
            <div style={{'backgroundColor': '#eeeef0', 'padding': '1px'}}>
                <h3>to change your profile picture click "Choose File" and then "save"</h3>
                <PicUpload /><br></br>
            </div>
            <br></br>
            <div style={{'backgroundColor': '#eeeef0', 'padding': '1px'}}>
            <Button className='ui button'>
                    <Link 
                    to={`/users/${currentUser.username}/edit`}
                    style={{fontSize: '2vh', textAlign: 'justify'}}
                    >Edit your profile</Link>
            </Button>
            </div><br></br>
            
            <div style={{'backgroundColor': '#eeeef0', 'padding': '1px'}}><br></br>
            {currentUser.rating && 
                <Rating 
                    icon='star' 
                    defaultRating={currentUser.rating} 
                    maxRating={5} 
                    disabled
                />}<br/>
                {currentUser.rating? + '/5' : 'No reviews yet'}<br/><br/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        users: state.users
    }
}
export default connect(mapStateToProps)(CurrentUserProfileCard)


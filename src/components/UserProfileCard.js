import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { selectedUser } from '../redux/actions'

class UserCard extends Component {

    render() {
        // debugger

        let profilePicUrl = `http://localhost:3000/${this.props.user.profile_pic_url}`

        return (
            <div style={{'backgroundColor': '#276890', 'padding': '2px'}}>
            <div style={{'backgroundColor': 'white', 'padding': '2px'}}>
                    <Image src={this.props.user.profile_pic_url ? profilePicUrl : placeholder} />
                        <Card.Header as='h3'> {this.props.user.username} </Card.Header>
                </div>
            </div>
        )

        // return (
        //     <div style={{'backgroundColor': '#276890', 'padding': '2px'}}>
        //         <div style={{'backgroundColor': 'white', 'padding': '2px'}}>
        //             <Image src={currentUser.profile_pic_url ? pic_url : placeholder}></Image>
        //         </div>
        //         <br></br>
        //         <div style={{'backgroundColor': 'white', 'padding': '2px'}}>
        //             <h3>to change your profile picture click "Choose File" and then "save"</h3>
        //             <PicUpload /><br></br>
        //         </div>
        //         <br></br>
        //         <div style={{'backgroundColor': 'white', 'padding': '2px'}}><br></br>
        //         {currentUser.rating ? 
        //             <Rating 
        //                 icon='star' 
        //                 defaultRating={currentUser.rating} 
        //                 maxRating={5} 
        //                 disabled
        //             />
        //             : null }<br/>
        //             {currentUser.rating ? currentUser.rating + '/5' : 'No reviews yet'}<br/><br/>
        //         </div>
        //     </div>
        // )
    }
}

const mapDTP = dispatch => {
    return {selectedUser: user => dispatch(selectedUser(user))}
}

export default connect(null, mapDTP)(UserCard)

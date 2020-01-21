import React, {Component} from 'react'
import {Link, Redirect, Route} from 'react-router-dom'
// import {getUsers} from '../redux/actions'
import {connect} from 'react-redux'
import {Grid, Card, Image, Button} from 'semantic-ui-react'
// import {connect} from 'react-redux'
import PicUpload from '../components/PicUpload'
import placeholder from '../photos/profilePicPlaceholder.png'
// import SingleUserProfilePage from '../containers/SingleUserProfilePage'
import {selectedUser} from '../redux/actions'

class SingleUserProfileCard extends Component {

    constructor(props) {
        super(props)
        this.state = {selectedUser: ''}
    }

    render() {

        // let username = window.location.pathname.split('/')[2]
        // let users = this.props.users
        // let selectedUser = users.filter(user => user.username === username)
        
        const handleClick = (e, user) => {
            return <Link to={`/users/${this.props.user.username}`}>Home</Link>
        }

        debugger
    
        return (
            <Card>
                <Card.Content>
                    <Image src={this.props.user.profile_pic_url ? `http://localhost:3000/${this.props.user.profile_pic_url}` : placeholder} />
                        <Card.Header as='h3'> {this.props.user.username} </Card.Header>
                        <Button className='ui button'>
                            <a href={`/users/${this.props.user.username}`} 
                            onClick={(e, user) => handleClick(e, this.props.user)}>See Profile</a>
                        </Button>
                </Card.Content>
            </Card>
        )
    }
}

const mapDTP = dispatch => {
    return {selectedUser: user => dispatch(selectedUser(user))}
}

export default connect(null, mapDTP)(SingleUserProfileCard)

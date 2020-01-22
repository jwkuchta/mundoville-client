import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, Image, Button} from 'semantic-ui-react'
// import {connect} from 'react-redux'
import placeholder from '../photos/profilePicPlaceholder.png'
import {selectedUser} from '../redux/actions'

class SingleUserProfileCard extends Component {

    render() {
        // debugger
    
        return (
            <Card>
                <Card.Content>
                    <Image src={this.props.user.profile_pic_url ? `http://localhost:3000/${this.props.user.profile_pic_url}` : placeholder} />
                        <Card.Header as='h3'> {this.props.user.username} </Card.Header>
                        <Button className='ui button'>
                            <Link to={`/users/${this.props.user.username}`} >See profile</Link>
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

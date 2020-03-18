import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Image, Button } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { selectedUser } from '../redux/actions'

class UserCard extends Component {

    render() {
        // debugger

        let profilePicUrl = `http://localhost:4000/${this.props.user.profile_pic_url}`

        return (
            <Card link style={{marginBottom: 25, padding: 10, backgroundColor: '#eeeeee'}}>
                <Card.Content>
                    <div>
                    <Image src={this.props.user.profile_pic_url ? profilePicUrl : placeholder} />
                    </div>
                    <div>
                    <h3>{this.props.user.first_name}  {this.props.user.last_name}</h3>
                    <h3>{this.props.user.city}, {this.props.user.country}</h3>
                    <Button className='ui button'>
                        <Link to={`/users/${this.props.user.username}`} style={{'font-size': '20px', 'backgroundColor': 'white'}}>Full profile</Link>
                    </Button>
                    </div>
                </Card.Content>
            </Card>
        )

        
    }
}

const mapDTP = dispatch => {
    return {selectedUser: user => dispatch(selectedUser(user))}
}

export default connect(null, mapDTP)(UserCard)





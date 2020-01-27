import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Image, Button } from 'semantic-ui-react'
import placeholder from '../photos/profilePicPlaceholder.png'
import { selectedUser } from '../redux/actions'

class UserCard extends Component {

    render() {
        // debugger

        let profilePicUrl = `http://localhost:3000/${this.props.user.profile_pic_url}`

    
        // return (
        //     <Card>
        //         <Card.Content>
        //             <Image src={this.props.user.profile_pic_url ? profilePicUrl : placeholder} />
        //                 <Card.Header as='h3'> {this.props.user.username} </Card.Header>
        //                 <Button className='ui button'>
        //                     {window.location.pathname === 'http://localhost:3001/users' ?
        //                     <Link to={`/users/${this.props.user.username}`} >See profile</Link>
        //                     :
        //                     <Link to={`/users/`} >Back to search</Link>
        //                     }
        //                     {/* <Link to={`/users/${this.props.user.username}`} >See profile</Link> */}
        //                 </Button>
        //         </Card.Content>
        //     </Card>
        // )

        // return (
        //     <Card>
        //         <Card.Content>
        //             <Image src={this.props.user.profile_pic_url ? profilePicUrl : placeholder} />
        //                 <Card.Header as='h3'> {this.props.user.username} </Card.Header>
        //                 {window.location.pathname === `http://localhost:3001/${this.props.user.username}` ?
        //                 <Button><Link to={'/users'}></Link>Back to search</Button>
        //                 :
        //                 <Button><Link to={`/users/${this.props.user.username}`}></Link>See profile</Button>
        //                 }
        //         </Card.Content>
        //     </Card>
        // )

        return (
            <Card>
                <Card.Content>
                    <Image src={this.props.user.profile_pic_url ? profilePicUrl : placeholder} />
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

export default connect(null, mapDTP)(UserCard)

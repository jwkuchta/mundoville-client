import React, {Component} from 'react'
// import {getUsers} from '../redux/actions'
import {Grid, Card, Image, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import PicUpload from '../components/PicUpload'
import placeholder from '../photos/profilePicPlaceholder.png'

class UsersPage extends Component  {

    render() {

        const users = this.props.users
        const currentUser = this.props.currentUser
        console.log(users)
        console.log(currentUser)

        // const pic_url = `http://localhost:3000/${user.profile_pic_url}`

        return (
            <div>
                <h1>You are logged in as {currentUser.username}</h1>
                {users.map(user => <>
            <Grid.Column>
                <Card>
                    <Card.Content>
                        <Image src={user.profile_pic_url ? `http://localhost:3000/${user.profile_pic_url}` : placeholder} />
                        <Card.Header as='h3'>
                            {user.username}
                        </Card.Header>
                        <PicUpload />
                        <Button className='ui button'>
                            {/* <Link to={`/users/${user.username}/edit`}>See Profile</Link> */}
                            <a href={`/users/${user.username}`}>See Profile</a>
                        </Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
            </>)}
                
            </div>
        )
    } 
}

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(UsersPage)

import React, {Component} from 'react'
// import {getUsers} from '../redux/actions'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import SingleUserProfileCard from '../components/SingleUserProfileCard'

class UsersPage extends Component  {

    render() {

        const currentUser = this.props.currentUser
        let allUsers = this.props.users
        const users = allUsers.filter(user => user.username !== currentUser.username)
        
        return (
            <div>
                <h1>You are currently logged in as {currentUser.username}</h1>
                <Grid columns={4} divided>
                
                    <Grid.Row>
  
                        {users.map(user => <>
                                            <Grid.Column key={user.id}>
                                                <SingleUserProfileCard user={user} />
                                                <Grid.Row></Grid.Row>
                                            </Grid.Column>
                                            </>
                        )}

                    </Grid.Row>
                    
                </Grid>  
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

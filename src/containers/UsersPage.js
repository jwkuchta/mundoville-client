import React, {Component} from 'react'
// import {getUsers} from '../redux/actions'
import {connect} from 'react-redux'

class UsersPage extends Component  {

    render() {

        const users = this.props.users
        const currentUser = this.props.currentUser
        console.log(users)
        console.log(currentUser)

        return (
            <div>
                <h1>You are logged in as {currentUser.username}</h1>
                {users.map(user => <li ley={user.id}>{user.username}</li>)}
                
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

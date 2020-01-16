import React, {Component} from 'react'
import {getUsers} from '../redux/actions'
import {connect} from 'react-redux'

class UsersPage extends Component  {
    
    componentDidMount() {
        this.props.getUsers()
    }

    render() {

        const users = this.props.users
        const currentUser = this.props.currentUser
        console.log(users)
        console.log(currentUser)

        return (
            <div>
                <h1>You are logged in as {this.props.user.username}</h1>
                {users.map(user => <li>{user.username}</li>)}
                
            </div>
        )
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        user: state.currentUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)

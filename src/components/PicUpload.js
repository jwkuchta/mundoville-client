import React, {Component} from 'react'
import { connect } from 'react-redux'

class PicUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {photoFile: null}
    }

    handleInput = e => {
        this.setState({profile_pic: e.currentTarget.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const user = this.props.currentUser
        const formData = new FormData()
        
        formData.append('user[id]', user.id)
        formData.append('user[profile_pic]', this.state.photoFile)

        this.addPhotoToUser(user, formData)
    }

    addPhotoToUser = (user, data) => {
        fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
            },
            body: data
        })
        .then(resp => resp.text())
        .then(text => console.log('success!', text))
        .then(window.location.href = "/profile")
        .catch(error => console.log('Error:', error))
    }

    handleFile = e => {
        this.setState({photoFile: e.target.files[0]})
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="profile_pic"></label>
                <button>Add a Profile Picture</button>
                <input type='file' id='profile_pic' 
                value={this.state.profile_pic} 
                onChange={e => this.handleFile(e)} />
            </form>
        )
    }
}

const mapSTP = state => {
    return {currentUser: state.currentUser}
}
export default connect(mapSTP)(PicUpload)
import React, { Component } from 'react'
import { connect } from 'react-redux'

class PicUploadNoCrop extends Component {

    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
            photoUrl: null
        }
    }

    handleFile = e => {
        this.setState({photoFile: e.target.files[0]})
        const file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }   

        if(file) {
            fileReader.readAsDataURL(file)
        }
    }

    handleSubmit = e => {
        debugger
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
        .then(data => {
            window.location.href = "/profile"
        })
        .catch(error => console.log('Error:', error))
    }

    render() {

        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt='preview'/> : null
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='file' id='profile_pic' 
                value={this.state.profile_pic} 
                onChange={e => this.handleFile(e)} />
                {preview}
                <button>save</button>
            </form>
        )
    }
}

const mapSTP = state => {
    return {currentUser: state.currentUser}
}

export default connect(mapSTP)(PicUploadNoCrop)
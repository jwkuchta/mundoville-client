// this component is not currently being used and was created for a blog

import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addPhotoToUser } from './helpers.js'

class PicUploadNoCrop extends Component {

    constructor() {
        super()
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
        e.preventDefault()
        const formData = new FormData()
        formData.append('user[id]', this.props.currentUser.id)
        formData.append('user[profile_pic]', this.state.photoFile)
        addPhotoToUser(this.props.currentUser, formData)
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt='preview'/> : null
    
        return (
            <Form onSubmit={this.handleSubmit}>
                <input type='file' id='profile_pic' value={this.state.profile_pic} 
                onChange={this.handleFile} />
                {preview}
                <button>save</button>
            </Form>
        )
    }
}

const mapSTP = state => {
    return {currentUser: state.currentUser}
}

export default connect(mapSTP)(PicUploadNoCrop)
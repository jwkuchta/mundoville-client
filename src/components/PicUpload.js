// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Form } from 'semantic-ui-react'

// class PicUpload extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             photoFile: null,
//             photoUrl: null
//         }
//     }

//     handleInput = e => {
//         this.setState({profile_pic: e.currentTarget.value})
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         const user = this.props.currentUser
//         const formData = new FormData()
        
//         formData.append('user[id]', user.id)
//         formData.append('user[profile_pic]', this.state.photoFile)

//         this.addPhotoToUser(user, formData)
//     }

//     addPhotoToUser = (user, data) => {
//         fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Authorization': `Bearer ${localStorage.jwt}`,
//             },
//             body: data
//         })
//         .then(resp => resp.text())
//         .then(text => console.log('success!', text))
//         .then(window.location.href = "/profile")
//         .catch(error => console.log('Error:', error))
//     }

//     handleFile = e => {
//         const file = e.target.files[0]
//         const fileReader = new FileReader()
//         fileReader.onloadend = () => {
//             this.setState({photoFile: file, photoUrl: fileReader.result})
//         }   

//         if(file) {
//             fileReader.readAsDataURL(file)
//         }
//     }

//     render() {

//         const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt='preview'/> : null
//         console.log(this.state)
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                 <label htmlFor="profile_pic"></label>
//                 <input type='file' id='profile_pic' 
//                 value={this.state.profile_pic} 
//                 onChange={e => this.handleFile(e)} />
//                 <button>save</button>
//                 {preview}
//             </Form>
//         )
//     }
// }

// const mapSTP = state => {
//     return {currentUser: state.currentUser}
// }
// export default connect(mapSTP)(PicUpload)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import Slider from '@material-ui/lab/Slider'
import Cropper from 'react-easy-crop'

class PicUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
            photoUrl: null,
            imageSrc: null,
            crop: { x: 0, y: 0 },
            zoom: 1,
            aspect: 1 / 1,
        }
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

    onCropChange = crop => {
        this.setState({ crop })
    }
    
    onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }
    
    onZoomChange = zoom => {
        this.setState({ zoom })
    }

    onFileChange = async e => {
        const file = e.target.files[0]
        if (e.target.files && e.target.files.length > 0) {
          const imageDataUrl = await this.readFile(e.target.files[0])
          this.setState({
            imageSrc: imageDataUrl,
            crop: { x: 0, y: 0 },
            zoom: 1,
            photoFile: file, 
            photoUrl: imageDataUrl
          })
        }
    }

    readFile(file) {
        return new Promise(resolve => {
          const reader = new FileReader()
          reader.addEventListener('load', () => resolve(reader.result), false)
          reader.readAsDataURL(file)
        })
      }

    render() {

        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt='preview'/> : null
        console.log(this.state)
        return (
            <Form onSubmit={this.handleSubmit}>
                <label htmlFor="profile_pic"></label>
                <input type='file' id='profile_pic' 
                onChange={this.onFileChange}
                value={this.state.profile_pic} 
                onChange={e => this.handleFile(e)} />
                {this.state.imageSrc && (
                <React.Fragment>
                    <div className="crop-container">
                        <Cropper
                            image={this.state.imageSrc}
                            crop={this.state.crop}
                            zoom={this.state.zoom}
                            aspect={this.state.aspect}
                            onCropChange={this.onCropChange}
                            onCropComplete={this.onCropComplete}
                            onZoomChange={this.onZoomChange}
                        />
                    </div>
                    <div className="controls">
                        <Slider
                            value={this.state.zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e, zoom) => this.onZoomChange(zoom)}
                            classes={{ container: 'slider' }}
                        />
                    </div>
                </React.Fragment>
                )}
                <button>save</button>
                {preview}
            </Form>
        )
    }
}

const mapSTP = state => {
    return {currentUser: state.currentUser}
}
export default connect(mapSTP)(PicUpload)



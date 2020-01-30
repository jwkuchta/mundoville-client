import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class PicUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
            src: null,
            crop: {
                unit: "%",
                width: 30,
                aspect: 1 / 1
            },
            croppedImageUrl: null,
            croppedFileUrl: null
        }
    }

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener("load", () =>
            this.setState({ src: reader.result })
          );
          reader.readAsDataURL(e.target.files[0]);
        }
        this.setState({photoFile: e.target.files[0]})
    };

    onImageLoaded = image => {
        this.imageRef = image;
    };

    handleSubmit = e => {
        e.preventDefault()
        const user = this.props.currentUser
        const formData = new FormData()
        
        formData.append('user[id]', user.id)
        formData.append('user[profile_pic]', this.state.croppedImage)

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
    
    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };
    
    onCropChange = (crop) => {
        this.setState({ crop });
    };
    
    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(this.imageRef, crop, "newFile.jpeg");
            this.setState({ croppedImageUrl });
        }
    }
    
    getCroppedImg(image, crop) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
    
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );


        return new Promise(() => {
            const reader = new FileReader()
            canvas.toBlob(blob => {
                reader.readAsDataURL(blob)
                reader.onloadend = () => {
                    let base64 = reader.result
                    this.dataURLtoFile(base64, 'cropped.jpg')
                    this.setState({croppedFileUrl: base64})
                }
            })
        })
    }

    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        let croppedImage = new File([u8arr], filename, {type:mime});
        this.setState({croppedImage: croppedImage }) 
    }

    render() {

        const { crop, croppedImageUrl, src } = this.state;
        // console.log(this.state)
        return (
            <Form onSubmit={this.handleSubmit}>
                <label htmlFor="profile_pic"></label>
                <input type='file' id='profile_pic' 
                accept='image/*'
                onChange={this.onSelectFile}
                // value={this.state.profile_pic} 
                />
                {src && (
                    <ReactCrop
                      src={src}
                      crop={crop}
                      ruleOfThirds
                      onImageLoaded={this.onImageLoaded}
                      onComplete={this.onCropComplete}
                      onChange={this.onCropChange}
                    />
                )}
                {croppedImageUrl && (
                    <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
                )}
                <button>save</button>
            </Form>
        )
    }
}

const mapSTP = state => {
    return {currentUser: state.currentUser}
}
export default connect(mapSTP)(PicUpload)
import React from 'react'
import Dropzone from 'react-dropzone'
import { Segment, Grid, Image } from 'semantic-ui-react'

 const PictureUpload = (props) => {

    
    
    const previewFile = () => {
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();

        reader.addEventListener("load", function () {
            let base64 = reader.result

            fetch('http://localhost:3000/api/v1/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.jwt}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    photo: base64,
                    user: props.currentUser
                })
            })
            .then(r => r.json())
            .then()
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    if (props.currentUser.username) {
        return (
            <Dropzone onDrop={this.onDrop} accept="image/png, image/gif,image/jpg,image/jpeg" >

            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
					<input {...getInputProps()} />
					{this.state.image !== null ? "File Uploaded" :
					"Click me to upload a file!" }
              </div>
            )}
            </Dropzone>

            <Segment basic style={{margin: 'auto'}}>
                <Grid columns={2}>
                    <Grid.Column width='8'>
                        <Image size='small' src={props.currentUser.profile_pic}/>
                    </Grid.Column>
                    <Grid.Column width='8'>
                        <div style={{color: 'black'}}><b>Upload Profile Picture</b></div>
                        <input type="file" onChange={previewFile} />
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    } else {
        return null
    }
}

export default PictureUpload
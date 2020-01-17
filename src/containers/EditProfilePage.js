import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Button } from 'semantic-ui-react'
import EditProfileForm from '../components/EditProfileForm'

class EditProfilePage extends Component {

    render() {
        // debugger

        return (
            <Segment tertiary padded='very'>
                <Header as='h1'>
                    <Button 
                            basic 
                            floated='left' 
                            content='Back to Profile' 
                            onClick={() => window.location.href='/profile'}
                        />
                        <div style={{marginRight: 140}}>Edit Profile for {this.props.currentUser.username}</div> 
                </Header><br/>
                    <Segment padded='very'>
                        {/* <EditProfileForm currentUser={props.currentUser}/> */}
                        <EditProfileForm/>
                    </Segment>
            </Segment>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(EditProfilePage)
// export default EditProfilePage
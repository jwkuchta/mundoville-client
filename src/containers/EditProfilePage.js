import React from 'react'
import  { connect } from 'react-redux'
import { Segment, Header, Button, Container } from 'semantic-ui-react'
import EditProfileForm from '../components/EditProfileForm'
// import EditProfileForm from '../components/_EditProfileForm'

const EditProfilePage = () => {

    return (
        <Container >
            <Segment secondary padded='very' className='teal-font'>
            <Header as='h1' >
                <Button 
                        basic 
                        floated='left' 
                        content='Back to Profile' 
                        onClick={() => window.location.href='/profile'}
                    />
                </Header><br/>
                <Segment padded='very'>
                    <EditProfileForm/>
                </Segment>
            </Segment>
        </Container> 
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(EditProfilePage)

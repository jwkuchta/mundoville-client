import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CurrentUserProfileCard from '../components/CurrentUserProfileCard'
import { Grid, Container, Modal, Button, Header, Icon } from 'semantic-ui-react'
import UserInfo from '../components/UserInfo'
import { fetchProfile } from '../redux/actions'
// import PicUpload from '../components/PicUpload'

const CurrentUserProfilePage = ({ currentUser }) => {

    const [ open, setOpen ] = useState(false)

    // *** this works on initial render after login *** //
    useEffect(() => {
        fetchProfile(currentUser)
        missingInfo(currentUser)
    }, [currentUser])

    const missingInfo = (user) => {
        const relevant = ['occupation', 'yob', 'language1', 'language2', 'language3', 'city', 'country']
        for( let [key, value] of Object.entries(user)) {
            if(relevant.includes(key)) {
                if(value === '' || value === null) {
                    setOpen(true)
                    return
                }
            }   
        }  
    }

    const InfoRequestModal = () => (
        <Modal 
        centered={false}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        >
          <Modal.Header>Uh, oh!</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Looks like your profile needs some more details</Header>
              <p>
                We find that users trust you more if you have a complete profile
              </p>
              <p>Would you like to updated now?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' inverted 
            onClick={() => setOpen(false)}
            >
                <Icon name='remove' /> I'll do it later
            </Button>
            <Button color='green' inverted 
            onClick={() => window.location.href = `/users/${currentUser.username}/edit`}>
                <Icon name='checkmark' /> Let's do it!
            </Button>
          </Modal.Actions>
        </Modal>
    )

    return (
        <Container className='profilePage'>
            <InfoRequestModal />
            <Grid >
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Grid.Row>
                            <CurrentUserProfileCard /> 
                        </Grid.Row>
                    </Grid.Column>

                    <Grid.Column width={11} style={{'backgroundColor': '#276890', 'padding': '1px'}}>
                        <Grid.Row>
                            <UserInfo user={currentUser} />
                        </Grid.Row>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDTP = dispatch => {
    return {
        fetchProfile: user => dispatch(fetchProfile(user))
    }
}

export default connect(mapStateToProps, mapDTP)(CurrentUserProfilePage)




import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import world from '../photos/world.jpg'
import friends from '../photos/friends.jpg'
import profile from '../photos/profile.jpg'
import explore from '../photos/explore.jpg'

const AboutPage = (props) => {

    return (
        
        <Container fluid style={{color: 'white'}}> 
        <br></br>
        <h1>How Mundoville Works</h1>
        <br></br>
            <Container>
                <Grid>  
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image src={friends}></Image>
                        </Grid.Column>
                        <Grid.Column width={12} style={{textAlign: 'left'}}>
                            <h2>You have friends all over the world, you just haven't met them yet.</h2>
                            <br></br>
                            <p><h3>Mundoville is a service that connects members to a global community of travelers. 
                            Use Mundoville to connect with hosts around the world or share your hometown with travelers.
                            Mundovillagers organize regular events in cities around the world. 
                            There's always something to do and new friends to meet.</h3></p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={12} style={{textAlign: 'left'}}>
                            <h2>Create a profile</h2>
                            <br></br>
                            <p><h3>First step? Completely fill out your Mundoville profile! 
                            This will be your home base and is a reflection of you: your lifestyle, 
                            your mission and what's important to you. Having a complete profile is the 
                            best way to connect with people – whether it's going to your city's weekly event or hosting a guest. 
                            Here you can tell people if you're traveling or would like to host. 
                            Be sure to include a profile picture and links to your social media profiles.</h3></p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Image src={profile}></Image>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={4}>
                            <Image src={explore}></Image>
                        </Grid.Column>
                        <Grid.Column width={12} style={{textAlign: 'left'}}>
                            <h2>Explore your city</h2>
                            <br></br>
                            <p><h3>Next up, explore your city! Getting in touch with experienced Mundovillagers 
                            in your area is the best way to get a feel for how Mundovill works. 
                            Most cities have a weekly event that is usually held at a bar or coffee shop. 
                            Just head to your city's Place Page and look at the Events happening near you. 
                            Click "Join," show up and you're on your way!</h3></p>
                        </Grid.Column>
                    
                
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12} style={{textAlign: 'left'}}>
                            <h2>See the world</h2>
                            <br></br>
                            <p><h3>If you’re ready to embark on an adventure, search for the city (or cities!) 
                            you plan to visit and browse locals with time available. 
                            Look through profiles and reviews to find people you might want to hang out with. 
                            When you find a few interesting potential hosts, carefully review their 
                            profile and send a message specifying the dates you’ll be there.
                            Make sure to personalize your messages and tell your host why you want to meet!</h3></p>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Image src={world}></Image>
                        </Grid.Column>
                    </Grid.Row> 
                </Grid>
            </Container>
            {!localStorage.jwt && props.option === 'login' && <Container fluid className='login-form'><LoginForm /></Container>}
            {!localStorage.jwt && props.option === 'signup' && <Container fluid className='signup-form'><SignupForm /></Container>} 
        </Container>
    )
}

const mapStateToProps = state => {
    return {option: state.options.option}
}

export default connect(mapStateToProps)(AboutPage)


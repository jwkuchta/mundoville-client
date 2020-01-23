import React, {Component} from 'react'
import {Container, Grid, Image} from 'semantic-ui-react'
import {signup} from '../photos/signup.png'
import {explore} from '../photos/explore.png'
import {world} from '../photos/world.png'
import LoginModal from '../containers/LoginModal'

class AboutPage extends Component {

    render() {
        return (
            <Container className='text-custom'> 
                <Grid.Row>
                    <h1>How Mundoville Works</h1>
                    <h2></h2>
                    <h2>You have friends all over the world, you just haven't met them yet.</h2>
                    <p><h3>Mundoville is a service that connects members to a global community of travelers. 
                       Use Mundoville to connect with hosts around the world or share your hometown with travelers.
                       Mundovillagers organize regular events in cities around the world. 
                       There's always something to do and new friends to meet.</h3></p>
                </Grid.Row>
                <h2></h2>
                <Grid.Row>
                    <h2>Create a profile</h2>
                    <p><h3>First step? Completely fill out your Mundoville profile! 
                        This will be your home base and is a reflection of you: your lifestyle, 
                        your mission and what's important to you. Having a complete profile is the 
                        best way to connect with people – whether it's going to your city's weekly event or hosting a guest. 
                        Here you can tell people if you're traveling or would like to host. 
                        Be sure to include a profile picture and links to your social media profiles.</h3></p>
                </Grid.Row>
                <Container fluid className='about-images'>
                {/* <Image 
                    centered 
                    size='medium' 
                    src={signup} 
                    alt='signup' 
                    href='/'
                /> */}
                </Container>
                <h2></h2>
                <Grid.Row>
                    <h2>Explore your city</h2>
                    <p><h3>Next up, explore your city! Getting in touch with experienced Mundovillagers 
                        in your area is the best way to get a feel for how Mundovill works. 
                        Most cities have a weekly event that is usually held at a bar or coffee shop. 
                        Just head to your city's Place Page and look at the Events happening near you. 
                        Click "Join," show up and you're on your way!</h3></p>

                    {/* <Image 
                    centered 
                    size='medium' 
                    src={explore} 
                    alt='explore' 
                    href='/'
                    />      */}
                </Grid.Row>
                <h2></h2>
                <Grid.Row>
                <h2>See the world</h2>
                    <p><h3>If you’re ready to embark on an adventure, search for the city (or cities!) 
                        you plan to visit and browse locals with time available. 
                        Look through profiles and reviews to find people you might want to hang out with. 
                        When you find a few interesting potential hosts, carefully review their 
                        profile and send a message specifying the dates you’ll be there.
                        Make sure to personalize your messages and tell your host why you want to meet!</h3></p>

                    {/* <Image 
                    centered 
                    size='medium' 
                    src={world} 
                    alt='world' 
                    href='/'
                    />      */}
                </Grid.Row>
                <Grid.Row>{!localStorage.jwt ? <LoginModal /> : null}
                </Grid.Row>
            </Container>
        )
    }
}

export default AboutPage
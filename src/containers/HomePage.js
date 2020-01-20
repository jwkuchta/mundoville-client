import React from 'react'
import { Container, Image} from 'semantic-ui-react'
import sakura from '../photos/sakura.jpg'
// import travel from '../photos/travel.gif'
import logo2 from '../photos/logo2.png'
import LoginModal from './LoginModal'

const HomePage = () => {
    return (
        // <>
        <Container fluid>
            <Image className='background-img'
                fluid 
                // fluid - can take up the whole container
                src={sakura}
                alt='sakura gif'
            />
            <Container fluid className='app-logo'>
                <Image 
                    centered 
                    size='medium' 
                    src={logo2} 
                    alt='logo' 
                    href='/'
                />
            </Container>
            {/* <Container fluid className='main-page-question'>
                <Popup 
                    position='bottom right'
                    content="Find out more"
                    trigger={
                        <Icon 
                            name='question circle outline' 
                            size='big' 
                        />
                    } 
                />
            </Container> */}
            <Container fluid className='main-page-description'>
                <h3>Something about the app</h3>
                <h3>and how it is not at all like couchsurfing</h3>
                <h3>cause no couches are involved</h3>
            </Container>
            <LoginModal />
        </Container>
        // </>
    )
}

export default HomePage



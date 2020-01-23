import React from 'react'
import { Container, Image} from 'semantic-ui-react'
import sakura from '../photos/sakura.jpg'
import logo2 from '../photos/logo2.png'
import LoginModal from './LoginModal'

const HomePage = () => {
    return (
        <Container fluid>
            <Image className='background-img'
                fluid 
                // fluid - can take up the whole container
                src={sakura}
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
            <Container fluid className='main-page-description'>
                <h3>It's just like couchsurfing</h3>
                <h3>except for the creepy factor</h3>
                <h3>'cause no couches are involved</h3>
                <h3>don't just be a tourist</h3>
                <h3>hang out with locals while you travel</h3>
                <h3>feel like one</h3>
            </Container>
            <LoginModal />
        </Container>
        
    )
}

export default HomePage



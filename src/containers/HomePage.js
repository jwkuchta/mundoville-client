import React  from 'react'
import { Container, Image } from 'semantic-ui-react'
import sakura from '../photos/sakura.jpg'
import sakura2 from '../photos/sakura2.gif'
import logo2 from '../photos/logo2.png'
import LoginModal from './LoginModal'

const HomePage = () => {
    
    return (
        <Container fluid className="home">
            <Image className='background-img'
                fluid 
                // fluid - can take up the whole container
                src={sakura2}
            />
            <Container fluid className='app-logo'>
                <Image 
                    centered 
                    size='medium' 
                    src={logo2} 
                    alt='logo' 
                    href='/'
                /><br></br>
            </Container>
            <Container fluid className='main-page-description'>
                <h3>It's just like couch surfing</h3>
                <h3>except for the creepy factor</h3>
                <h3>'cause no couches are involved</h3>
                <h3>don't just be a tourist</h3>
                <h3>hang out with locals while you travel</h3>
            </Container>
            <LoginModal />
        </Container>
    )
}

export default HomePage



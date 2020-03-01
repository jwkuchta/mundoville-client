import React  from 'react'
import { Container, Image } from 'semantic-ui-react'
// import sakura from '../photos/sakura.jpg'
import plane from '../photos/plane.gif'
import logo2 from '../photos/logo2.png'
// import { Redirect } from 'react-router'
// import NavBar from '../components/NavBar'

const HomePage = () => {
    
    return (
        <Container fluid className="home">
            <Image className='background-img'
                fluid 
                src={plane}
            />
            {/* <NavBar /> */}
            <Container fluid className='app-logo'>
                <Image 
                    centered 
                    link
                    size='medium' 
                    src={logo2} 
                    alt='logo' 
                    href='/about'
                /><br></br>
            </Container>
            <Container fluid className='main-page-description'>
                <h3>It's just like couch surfing</h3>
                <h3>except for the creepy factor</h3>
                <h3>'cause no couches are involved</h3>
                <h3>don't just be a tourist</h3>
                <h3>hang out with locals while you travel</h3>
            </Container>
        </Container>
    )
                
}



export default HomePage
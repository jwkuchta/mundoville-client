import React from 'react'
import { connect } from 'react-redux'
import { Container, Image, Icon, Menu, Popup} from 'semantic-ui-react'
// import Logo from '../photos/Logo.png'
import logo_white from '../photos/logo_white.png'

const Navigation = (props) => {
    
    const handleLogOut = () => {
        localStorage.clear()
        window.location.href = "/login"
    }
    
    return (
        <Container fluid >
            <Menu 
            fluid 
            inverted
            pointing 
            secondary 
            size ='huge' 
            widths={7}>
                <Menu.Item link size='medium'>
                <Popup content='back to main page' trigger={<Image
                    inverted='true'
                    name='white-logo'
                    src={logo_white} 
                    size ='huge' 
                    className='white-logo'
                    onClick={() => window.location.href = '/'}/>}
                />     
                </Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item>
                <Popup content='your messages' trigger={<Icon fitted
                    inverted 
                    // name='messages' 
                    size='large' 
                    className='envelope outline icon' 
                    link
                    onClick={() => window.location.href = "/messages"}/>}
                />     
                </Menu.Item>
                <Menu.Item>
                <Popup content='back to main page' trigger={<Icon fitted
                    inverted 
                    name='home' 
                    size='large' 
                    className='home-icon' 
                    link
                    onClick={() => window.location.href = "/"}
                />}
                />        
                </Menu.Item>
                <Menu.Item>
                <Popup content='search destinations' trigger={<Icon fitted
                    inverted 
                    link
                    name='search' 
                    size='large' 
                    className='search icon' 
                    onClick={() => window.location.href = '/users'}
                    />}
                />       
                </Menu.Item>
                <Menu.Item>
                <Popup content='more info' trigger={<Icon fitted
                    inverted 
                    link
                    name='question circle outline' 
                    size='large' 
                    className='iquestion circle outline' 
                    onClick={() => window.location.href = '/users'}
                    />}
                />     
                </Menu.Item>
                <Menu.Item header
                name='LOG OUT'
                size='large'
                // active={activeItem === 'login'}
                onClick={() => handleLogOut()} />
            </Menu>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Navigation)

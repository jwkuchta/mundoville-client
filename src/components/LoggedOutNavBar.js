import React from 'react'
// import { connect } from 'react-redux'
import {Image, Menu, Container} from 'semantic-ui-react'
import logo_white from '../photos/logo_white.png'

const LoggedOutNavBar = () => {

    let activeItem
    
    return (
        <Container fluid> 
            <Menu
            fluid 
            inverted='true'
            pointing 
            secondary 
            size ='huge' 
            widths={6}>
                <Menu.Item link size='medium'> 
                    <Image 
                    inverted='true'
                    name='white-logo'
                    src={logo_white} 
                    size ='huge' 
                    className='white-logo'
                    onClick={() => window.location.href = '/'}/>
                </Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item header
                name='About'
                size='medium'
                active={activeItem === 'about'}
                onClick={() => window.location.href = '/about'}
                />
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
            </Menu>
        </Container>
    )
}  

export default LoggedOutNavBar


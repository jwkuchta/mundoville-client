import React, { Component } from 'react'
import { Menu, Popup, Icon } from 'semantic-ui-react'

class SocialMediaIcons extends Component {
    
    render() {
        return (
            <Menu 
            fluid 
            inverted
            pointing 
            secondary 
            size ='large' 
            widths={7}>
                <Menu.Item></Menu.Item>
                <Menu.Item>
                <Popup content='open messenger' trigger={<Icon fitted
                    inverte
                    name='home' 
                    size='large' 
                    className='facebook messenger' 
                    link
                    onClick={() => window.location.href = "/users"}
                />}
                />        
                </Menu.Item>
                <Menu.Item>
                <Popup content='go to instagram' trigger={<Icon fitted
                    inverted
                    // name='messages' 
                    size='large' 
                    className='instagram' 
                    link
                    onClick={() => window.location.href = "/users"}/>}
                />     
                </Menu.Item>
                
                <Menu.Item>
                <Popup content='go to twitter users' trigger={<Icon fitted
                    inverted
                    link
                    name='search' 
                    size='large' 
                    className='twitter' 
                    onClick={() => window.location.href = '/users'}
                    />}
                />       
                </Menu.Item>
                <Menu.Item>
                <Popup content='open whatsapp' trigger={<Icon fitted
                    inverted
                    link
                    size='large' 
                    className='whatsapp' 
                    onClick={() => window.location.href = '/users'}
                    />}
                />     
                </Menu.Item>
            </Menu>
        )
    }
}

export default SocialMediaIcons
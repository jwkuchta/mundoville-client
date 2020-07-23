import React from 'react'
import { Popup, Icon } from 'semantic-ui-react'

const SocialMediaIcons = () => {
    
    return (
        <div className='social-icons'>
            <div id='popup'> 
            <Popup content='open messenger' trigger={<Icon fitted
                style={{'padding-left': '10px'}}
                name='home' 
                size='large' 
                className='facebook messenger' 
                link
                onClick={() => window.location.href = "/users"}
            />}
            />        
    
            <Popup content='go to instagram' trigger={<Icon fitted
                style={{'padding-left': '10px'}}
                size='large' 
                className='instagram' 
                link
                onClick={() => window.location.href = "/users"}/>}
            />     

            <Popup content='go to twitter users' trigger={<Icon fitted
                style={{'padding-left': '10px'}}
                link
                name='search' 
                size='large' 
                className='twitter' 
                onClick={() => window.location.href = '/users'}
                />}
            />       
            <Popup content='open whatsapp' trigger={<Icon fitted
                style={{'padding-left': '5px', 'padding-right': '5px'}}
                link
                size='large' 
                className='whatsapp' 
                onClick={() => window.location.href = '/users'}
                />}
            />     
            </div>
        </div>
    )
}

export default SocialMediaIcons
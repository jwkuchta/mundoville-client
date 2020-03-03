// import React, { Component } from 'react'
// import { Menu, Popup, Icon } from 'semantic-ui-react'

// class SocialMediaIcons extends Component {
    
//     render() {
//         return (
//             <Menu 
//             fluid 
//             inverted
//             pointing 
//             secondary 
//             className='social-icons'
//             size ='large' 
//             widths={7}>
//                 <Menu.Item></Menu.Item>
//                 <Menu.Item>
//                 <Popup content='open messenger' trigger={<Icon fitted
//                     // inverted
//                     name='home' 
//                     size='large' 
//                     className='facebook messenger' 
//                     link
//                     onClick={() => window.location.href = "/users"}
//                 />}
//                 />        
//                 </Menu.Item>
//                 <Menu.Item>
//                 <Popup content='go to instagram' trigger={<Icon fitted
//                     // inverted
//                     // name='messages' 
//                     size='large' 
//                     className='instagram' 
//                     link
//                     onClick={() => window.location.href = "/users"}/>}
//                 />     
//                 </Menu.Item>
                
//                 <Menu.Item>
//                 <Popup content='go to twitter users' trigger={<Icon fitted
//                     // inverted
//                     link
//                     name='search' 
//                     size='large' 
//                     className='twitter' 
//                     onClick={() => window.location.href = '/users'}
//                     />}
//                 />       
//                 </Menu.Item>
//                 <Menu.Item>
//                 <Popup content='open whatsapp' trigger={<Icon fitted
//                     // inverted
//                     link
//                     size='large' 
//                     className='whatsapp' 
//                     onClick={() => window.location.href = '/users'}
//                     />}
//                 />     
//                 </Menu.Item>
//             </Menu>
//         )
//     }
// }

// export default SocialMediaIcons

import React, { Component } from 'react'
import { Menu, Popup, Icon } from 'semantic-ui-react'

class SocialMediaIcons extends Component {
    
    render() {
        return (
            <div className='social-icons'>
                <div id='popup'> 
                <Popup content='open messenger' trigger={<Icon fitted
                    // inverted
                    style={{'padding-left': '10px'}}
                    name='home' 
                    size='large' 
                    className='facebook messenger' 
                    link
                    onClick={() => window.location.href = "/users"}
                />}
                />        
        
                <Popup content='go to instagram' trigger={<Icon fitted
                    // inverted
                    // name='messages' 
                    style={{'padding-left': '10px'}}
                    size='large' 
                    className='instagram' 
                    link
                    onClick={() => window.location.href = "/users"}/>}
                />     
  
                <Popup content='go to twitter users' trigger={<Icon fitted
                    // inverted
                    style={{'padding-left': '10px'}}
                    link
                    name='search' 
                    size='large' 
                    className='twitter' 
                    onClick={() => window.location.href = '/users'}
                    />}
                />       
                <Popup content='open whatsapp' trigger={<Icon fitted
                    // inverted
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
}

export default SocialMediaIcons
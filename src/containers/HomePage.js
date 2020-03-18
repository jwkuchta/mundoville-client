import React from 'react'
import { connect } from 'react-redux'
import { Container, Image } from 'semantic-ui-react'
import plane from '../photos/plane.gif'
import { clearOption } from '../redux/actions'

const HomePage = (props) => {

    // debugger
    return (
        // <>
        <Container fluid className="mainPage" style={{position: 'relative'}} >
            <Image className='background-img'
                fluid 
                src={plane}
            />
            <Container fluid className='main-page-description' >
                <h3>It's just like couch surfing</h3>
                <h3>except for the creepy factor</h3>
                <h3>'cause no couches are involved</h3>
                <h3>don't just be a tourist</h3>
                <h3>hang out with locals while you travel</h3>
            </Container>
        </Container>
        // </>
    )            
}

const mapSTP = state => {
    // debugger
    return {option: state.options.option}
}

const mapDTP = dispatch => {
    return {clearOption: () => dispatch(clearOption)}
}

export default connect(mapSTP, mapDTP)(HomePage)
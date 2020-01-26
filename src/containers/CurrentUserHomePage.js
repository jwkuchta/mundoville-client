// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// // import Avatar from './Avatar'
// // import SemanticGoodies from '../components/SemanticGoodies'
// import CurrentUserProfileCard from '../components/CurrentUserProfileCard'
// import { Grid, Container, Card, Rating, Button, Modal } from 'semantic-ui-react'
// // import { Button, Link } from 'semantic-ui-react'
// import UserInfo from '../components/UserInfo'
// // import SideBar from '../components/SideBar'
// import Review from '../components/Review'


// class CurrentUserHomePage extends Component {

//     render() {

//         const user = this.props.currentUser

//         console.log(this.props)
//         return (
//             <Container>
//                 <Grid>
//                 <br></br>
//                 <Grid.Row>
//                     <Grid.Column width={5}>
//                         <Grid.Row>
//                             <CurrentUserProfileCard /> 
//                         </Grid.Row>
//                         <Grid.Row>
//                             <Card>
//                                 <Card.Content style={{color: 'teal'}}>
//                                     {user.rating
//                                     ? <Rating 
//                                         icon='star' 
//                                         defaultRating={user.rating} 
//                                         maxRating={5} 
//                                         disabled
//                                     />
//                                     : null }<br/>
//                                     {user.rating
//                                     ? user.rating + '/5'
//                                     : 'No reviews yet'}<br/><br/>
//                                     {}
//                                     <Modal 
//                                         trigger={<Button basic content='Read All Reviews'/>} 
//                                         closeIcon
//                                     >
//                                         <Modal.Header content={`Reviews for ${user.username}`} />
//                                             <Modal.Content>
//                                                 {user.reviews.length < 1 
//                                                 ? <p style={{color: 'teal'}}>This user has no reviews yet</p>
//                                                 : null}
//                                                 {user.reviews.reverse().map(review => 
//                                                     <Review key={review.id} review={review} />
//                                                 )}
//                                             </Modal.Content>
//                                     </Modal><br/><br/>
//                                 </Card.Content>
//                             </Card>
//                         </Grid.Row>
//                     </Grid.Column>
//                     <Grid.Column width={11}>
//                         <UserInfo user={user} />
//                     </Grid.Column>
//                 </Grid.Row>
//                 </Grid>
//             </Container>

            // <Container>
            // <br></br>
            // <Grid>
            // <br></br><br></br>
            //     <Grid.Row>
            //         <Grid.Column width={5}>
            //             <Grid.Row>
            //                 <Card>
            //                     <Card.Content>
            //                         <Image src={user.profile_pic_url ? `http://localhost:3000/${user.profile_pic_url}` : placeholder} />
            //                         <Card.Header as='h3'> {user.username} </Card.Header>
            //                     </Card.Content>
            //                 </Card>   
            //             </Grid.Row>
            //             <Grid.Row>
            //                 <SideBar user={user} />
            //             </Grid.Row>
            //         </Grid.Column>
            //         <Grid.Column width={11}>
            //             <UserInfo user={user} />
            //         </Grid.Column>
            //     </Grid.Row>
            // </Grid>
            // </Container>
//         )
//     }  
// }

// const mapStateToProps = state => {
//     // console.log(state)
//     return {
//         users: state.users,
//         currentUser: state.currentUser
//     }
// }

// export default connect(mapStateToProps)(CurrentUserHomePage)

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Avatar from './Avatar'
// import SemanticGoodies from '../components/SemanticGoodies'
import CurrentUserProfileCard from '../components/CurrentUserProfileCard'
import { Grid, Container } from 'semantic-ui-react'
// import { Button, Link } from 'semantic-ui-react'
import UserInfo from '../components/UserInfo'

class CurrentUserHomePage extends Component {

    render() {

        // console.log(this.props)
        return (
            <Container>
                <Grid>
                <br></br>
                <Grid.Row>
                <Grid.Column width={5}>
                    <Grid.Row>
                        <CurrentUserProfileCard /> 
                    </Grid.Row>
                    <Grid.Row>

                    </Grid.Row>    
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <UserInfo user={this.props.currentUser} />
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        )
    }  
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(CurrentUserHomePage)
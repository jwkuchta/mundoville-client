import React from 'react'
import {Label, Icon, Image, Input, Container, List, Menu, Segment, Grid, Header, Search, Card, Button} from 'semantic-ui-react'

const SemanticGoodies = () => {
    
    const LabelExampleBasic = () => (
        <div>
            <Label>
          <Icon name='mail' /> 23
        </Label>
        </div>
    )

    const ImageExampleAvatar = () => (
        <div>
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
          <span>Username</span>
        </div>
    )

    const InputExampleIconPosition = () => (
        <div>
            <Input icon='users' iconPosition='left' placeholder='Search users...' />
        </div>  
    )

    const LabelExampleImage = () => (
        <div>
          <Label as='a' image>
            <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' alt='image'/>
            Joe
          </Label>
          <Label as='a' image>
            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' alt='image'/>
            Elliot
          </Label>
          <Label as='a' image>
            <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' alt='image'/>
            Stevie
          </Label>
        </div>
    )

    const ListExampleIconShorthand = () => (
        <List>
          <List.Item icon='users' content='Semantic UI' />
          <List.Item icon='marker' content='New York, NY' />
          <List.Item
            icon='mail'
            content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
          />
          <List.Item
            icon='linkify'
            content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}
          />
        </List>
    )

    const LabelExampleFloating = () => (
        <Menu compact>
          <Menu.Item as='a'>
            <Icon name='mail' /> Messages
            <Label color='red' floating>
              22
            </Label>
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='users' /> Friends
            <Label color='teal' floating>
              22
            </Label>
          </Menu.Item>
        </Menu>
    )

    const SegmentExamplePlaceholderGrid = () => (
        <Segment placeholder>
          <Grid columns={1} stackable textAlign='center'>
      
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                  Find Country
                </Header>
      
                <Search placeholder='Search countries...' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    )

    const CardExampleCardProps = () => (
        <Card
          image='/images/avatar/large/elliot.jpg'
          header='Elliot Baker'
          meta='Friend'
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        //   extra={extra}
        />
    )

    const CardExample = () => (
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
    )

    return (

        <Container>
            <div>
                These are the goodies from SemanticGoodies.js
                {LabelExampleBasic()}
                ***************************************************
                {LabelExampleBasic()}
                ***************************************************
                {ImageExampleAvatar()}
                ***************************************************
                {InputExampleIconPosition()}
                ***************************************************
                {LabelExampleImage()}
                ***************************************************
                {ListExampleIconShorthand()}
                ***************************************************
                {LabelExampleFloating()}
                ***************************************************
                {SegmentExamplePlaceholderGrid()}
                ***************************************************
                {CardExampleCardProps()}
                ***************************************************
                {CardExample()}
                ***************************************************

            </div>
        </Container>
    )
}

export default SemanticGoodies


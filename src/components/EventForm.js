import React, { Component } from 'react'
import { Button, Icon, Input } from 'react-materialize'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addEvent } from '../actions'

class EventForm extends Component {
  constructor(){
    super()

    this.state = {
      title: '',
      date: '',
      description: '',
      startTime: '',
      endTime: ''
    }
  }

  submitHandler(e){
    e.preventDefault()
    const event = {
      title: this.state.title,
      date: this.state.date,
      description: this.state.description,
      start_date: this.state.startDate,
      end_date: this.state.endDate
    }
    this.setState({
      title: '',
      date: '',
      description: '',
      startDate: '',
      endDate: ''
    })
    this.props.addEvent(event)
  }

  render(){
    return(
      <div className="row">
        <div className="col s11 z-depth-2">
          <h4 className="center-align">Add an event</h4>
          <form onSubmit={this.submitHandler.bind(this)}>
            <Input
              m={6}
              label="Event Title"
              value={ this.state.title }
              onChange={ (event) => this.setState({ title: event.target.value }) }
            />

            <Input
              m={6}
              label="Event Description"
              value={ this.state.description }
              onChange={ (event) => this.setState({ description: event.target.value }) }
            />

            <Input
              type="datetime-local"
              id="startDate"
              m={6}
              value={ this.state.startDate}
              onChange={ (event) => {
                this.setState({ startDate: event.target.value })} }
              />

            <Input
              type="datetime-local"
              id="endDate"
              m={6}
              value={ this.state.endDate }
              onChange={ (event) => {
                this.setState({ endDate: event.target.value })} }
              />

            <label className='col s6 hide-on-small-only'>Start Date/Time</label>
            <label className='col s6 hide-on-small-only'>End Date/Time</label>

            <Button className='col s2 small-margin-vertical' type='submit'>
              <Icon>done</Icon>
            </Button>
          </form>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addEvent }, dispatch)
}

export default connect(null, mapDispatchToProps)(EventForm)
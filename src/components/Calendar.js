import React, { Component } from 'react'
import EventForm from './EventForm'
import EventList from './EventList'

export default class Calendar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="col s11 z-depth-2 center-align">
              <h3>Events</h3>
            </div>
          </div>
          <EventList />
          <EventForm />
        </div>
      </div>
    )
  }
}
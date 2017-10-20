import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export class MenopauseCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {events: props.events ? props.events : []};
    if (props.events) {
      this.state.events[0].date = props.getDate();
    }
  }

  render() {
    return (
      <div/>
    )
  }

}

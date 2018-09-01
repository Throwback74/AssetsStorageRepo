// import React, { Component } from 'react';
// import { BigCalendar, withDragAndDrop } from "react-big-calendar";
// import moment from 'moment';
// import 'moment/locale/nb';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// // import "./Cal.css";


// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// const DnDCalendar = withDragAndDrop(BigCalendar);

// export default class Cal extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       events: [],
//     };
//   }

//   render() {
//     return (
//       <div className="Calendar">
//         <BigCalendar
//           events={this.state.events}
//         />
//       </div>
//     );
//   }
// }
// export default class Cal extends Component {
//   state = {
//     events: [
//       {
//         start: new Date(),
//         end: new Date(moment().add(1, "days")),
//         title: "Some title"
//       }
//     ]
//   };

//   onEventResize = (type, { event, start, end, allDay }) => {
//     this.setState(state => {
//       state.events[0].start = start;
//       state.events[0].end = end;
//       return { events: state.events };
//     });
//   };

//   onEventDrop = ({ event, start, end, allDay }) => {
//     console.log(start);
//   };

//   render() {
//     return (
//       <div className="Cal">
//         <header className="Cal-header">
          
//           <h1 className="Cal-title">Welcome to React</h1>
//         </header>
//         <p className="Cal-intro">
//           To get started, edit <code>src/Cal.js</code> and save to reload.
//         </p>
//         <DnDCalendar
//           culture='en'
//           defaultDate={new Date()}
//           defaultView="month"
//           events={this.state.events}
//           onEventDrop={this.onEventDrop}
//           onEventResize={this.onEventResize}
//           resizable
//           style={{ height: "100vh" }}
//         />
//       </div>
//     );
//   }
// }

// // export default Cal;

// import React, { Component } from 'react';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
// import 'moment/locale/be';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// import React, { Component } from 'react';
// import BigCalendar from 'react-big-calendar';
// // import globalize from 'globalize'
// import ReactGlobalize from 'react-globalize';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// ReactGlobalize.locale("en");
// // BigCalendar.setLocalizer(BigCalendar.globalizeLocalizer(globalize))

// export default class Calendar extends Component {
//   constructor() {
//     super();
//     this.state = {
//       events: [],
//     };
//   }

//   render() {
//     return (
//       <div className="Calendar">
//         <BigCalendar
//           events={this.state.events}
//         />
//       </div>
//     );
//   }
// }
// import { React, Component, Fragment } from 'react';
// // import {BigCalendar, events, ExampleControlSlot, dates, Entry} from 'react-big-calendar'
// import {BigCalendar, events } from 'react-big-calendar';
// // import AuthService from '../../Auth/AuthService';
// import withAuth from '../../Auth/withAuth';
// // import events from '../events'
// // import ExampleControlSlot from '../ExampleControlSlot'

// const propTypes = {}
// let allViews = ['day', 'agenda', 'work_week', 'month']
// class Cal extends Component {
//   constructor(...args) {
//     super(...args)

//     this.state = { events }
//   }

//   handleSelect = ({ start, end }) => {
//     const title = window.prompt('New Event name')
//     if (title)
//       this.setState({
//         events: [
//           ...this.state.events,
//           {
//             start,
//             end,
//             title,
//           },
//         ],
//       })
//   }

//   render() {
//     const { localizer } = this.props
//     return (
//       <Fragment>
//         <BigCalendar
//           selectable
//           localizer={localizer}
//           events={this.state.events}
//           defaultView={allViews}
//           scrollToTime={new Date()}
//           defaultDate={new Date(2018, 8, 12)}
//           onSelectEvent={event => alert(event.title)}
//           onSelectSlot={this.handleSelect}
//         />
//         </Fragment>
//     )
//   }
// }

// Cal.propTypes = propTypes

// export default withAuth(Cal);



// import React from 'react'
// import BigCalendar from 'react-big-calendar'
// import events from '../events'
// import dates from '../../src/utils/dates'

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

// let Cal = ({ localizer }) => (
//   <BigCalendar
//     events={events}
//     views={allViews}
//     step={60}
//     showMultiDayTimes
//     max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
//     defaultDate={new Date(2015, 3, 1)}
//     localizer={localizer}
//   />
// )

// export default Cal


import React from 'react'
import { BigCalendar, events, dates } from 'react-big-calendar'
import moment from 'moment';
// import events from '../events'
// import dates from '../../src/utils/dates'

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let allViews = ['day', 'agenda', 'work_week', 'month'];

let Cal = ({ localizer }) => (
  <BigCalendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    max={new Date(2022, 3, 1)}
    defaultDate={new Date(2018, 8, 1)}
    localizer={localizer}
  />
)

export default Cal
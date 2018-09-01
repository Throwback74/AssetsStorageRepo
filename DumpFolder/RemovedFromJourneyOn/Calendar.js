import React, {Component} from 'react'
import DateRangePicker from 'react-daterange-picker';
// import Moment from 'moment'
import origMoment from 'moment';
import { extendMoment } from 'moment-range';
// import { extendMoment } from 'moment-range'
const moment = extendMoment(origMoment);
// const moment = extendMoment(Moment);
// import origMoment from 'moment';
// import { extendMoment } from 'moment-range';
// const moment = extendMoment(origMoment);

// export default moment;

// var createClass = require('create-react-class');






const stateDefinitions = {
  available: {
    color: null,
    label: 'Available',
  },
  enquire: {
    color: '#ffd200',
    label: 'Enquire',
  },
  unavailable: {
    selectable: false,
    color: '#78818b',
    label: 'Unavailable',
  },
};

const dateRanges = [
  {
    state: 'enquire',
    range: moment.range(
      moment().add(2, 'weeks').subtract(5, 'days'),
      moment().add(2, 'weeks').add(6, 'days')
    ),
  },
  {
    state: 'unavailable',
    range: moment.range(
      moment().add(3, 'weeks'),
      moment().add(3, 'weeks').add(5, 'days')
    ),
  },
];


class DatePicker extends Component {

  state = {
    dates: null,
    value: "",
    states: ""
  }
  




// const DatePicker = createClass({
  getInitialState() {
    return {
      value:  moment.range(
        moment().add(2, 'weeks').subtract(5, 'days'),
        moment().add(2, 'weeks').add(6, 'days')
      ),
    };
  }
  handleSelect(range, states) {
    // range is a moment-range object
    this.setState({
      value: range,
      states: states,
    });
  }

  render() {
    return (
      <DateRangePicker
        firstOfWeek={1}
        numberOfCalendars={2}
        selectionType='range'
        minimumDate={new Date()}
        stateDefinitions={stateDefinitions}
        dateStates={dateRanges}
        defaultState="available"
        showLegend={true}
        value={this.state.value}
        onSelect={this.handleSelect} />
    );
  }
};


export default DatePicker;
import React, { Component } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

class Calendar extends Component {
	handleSelect(ranges){
		console.log(ranges);
  this.state = {
    dateRange: {
      selection: {
        startDate: new Date(),
        endDate: null,
        key: 'selection',
      },
    },
    dateRangeWithDisabled: {
      selection: {
        startDate: addDays(new Date(), 4),
        endDate: null,
        key: 'selection',
      },
    },
    definedRange: {
      selection: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    },
    dateRangePickerI: {
      selection: {
        startDate: new Date(),
        endDate: null,
        key: 'selection',
      },
      compare: {
        startDate: new Date(),
        endDate: addDays(new Date(), 3),
        key: 'compare',
      },
    },
    multipleRanges: {
      selection1: {
        startDate: addDays(new Date(), 1),
        endDate: null,
        key: 'selection1',
      },
      selection2: {
        startDate: addDays(new Date(), 4),
        endDate: addDays(new Date(), 8),
        key: 'selection2',
      },
      selection3: {
        startDate: addDays(new Date(), 8),
        endDate: addDays(new Date(), 10),
        key: 'selection3',
        showDateDisplay: false,
        autoFocus: false,
      },
    }
	}
	render(){
    
		const selectionRange = {
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
    }
		return (
			<DateRangePicker
				ranges={[selectionRange]}
				onChange={this.handleSelect}
			/>
		)
	}
}

export default Calendar;
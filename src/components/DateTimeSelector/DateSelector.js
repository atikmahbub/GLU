import React, { useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';

const DateSelector = ({ handler, style, icon }) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        handler(date);
    };
    // useEffect(() => {
    //         if (handler) {
    //             handler(selectedDate);
    //         }
       
    // }, []);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                className="custom-input m-0"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                //label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
                color="primary"
                InputProps={{ className: style }}
                keyboardIcon={icon}
                animateYearScrolling={true}
                fullWidth
            />
        </MuiPickersUtilsProvider>
    );
};

DateSelector.propTypes = {
    handler: PropTypes.func,
    style: PropTypes.string,
    icon: PropTypes.element,
};

export default React.memo(DateSelector);

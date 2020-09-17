import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Calendar from 'react-calendar';

export default function LeftGrid() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (selectedDate) => {
        setSelectedDate(selectedDate);
    };
    return (
        <Grid item md={6}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRight: '1px solid lightgrey',
                    paddingRight: '3rem',
                    height: '79.6rem',
                }}
            >
                <div>
                    <Calendar
                        // nextLabel={null}
                        next2Label={null}
                        // prevLabel={null}
                        prev2Label={null}
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </div>

                <div>
                    <h1>9.30am</h1>
                </div>
            </div>
        </Grid>
    );
}

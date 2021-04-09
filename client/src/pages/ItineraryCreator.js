import React, { useState } from 'react';
// Components
import Navbar from '../components/Navbar.js';
// Material UI
import { Container } from '@material-ui/core';
import 'date-fns';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function ItineraryCreator() {
    const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
    const [selectedEndDate, setSelectedEndDate] = useState(Date.now());

    const handleStartDateChange = (date) => { setSelectedStartDate(date); };
    const handleEndDateChange = (date) => { setSelectedEndDate(date); };

    return (
        <>
            <Navbar />
            <Container fixed>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            margin="normal"
                            id="starting-date"
                            label="Start Date"
                            format="MM/dd/yyyy"
                            value={selectedStartDate}
                            onChange={handleStartDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change start date',
                            }}
                        />
                        <KeyboardDatePicker
                            margin="normal"
                            id="ending-date"
                            label="End Date"
                            format="MM/dd/yyyy"
                            value={selectedEndDate}
                            onChange={handleEndDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change end date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </Container>
        </>
    );
}
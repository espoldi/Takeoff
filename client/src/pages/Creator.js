import React, { useState } from 'react';
// Pages
import Editor from './Editor.js';
// Material UI
import {
    Button,
    Container,
    Grid,
    TextField
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

export default function ItineraryCreator() {

    const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
    const [selectedEndDate, setSelectedEndDate] = useState(Date.now());

    const handleStartDateChange = (date) => { setSelectedStartDate(date); };
    const handleEndDateChange = (date) => { setSelectedEndDate(date); };


    return (
        <Container fixed>
            <form>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            id="trip-name"
                            label="Trip Name"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="destination"
                            label="Destination"
                            variant="outlined"
                        />
                    </Grid>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid item xs={6}>
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
                        </Grid>

                        <Grid item xs={6}>
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

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<FlightTakeoffIcon />}
                        onClick={() => {
                            // Insert functionality to save form data above
                            // Insert link to editor with saved data above
                        }}>Takeoff</Button>

                </Grid>
            </form>
        </Container>
    );
}
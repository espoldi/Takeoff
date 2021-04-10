import React, { useState } from 'react';
// Pages
import ItineraryEditor from '../pages/ItineraryEditor.js';
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
    const [selectDestination, setSelectedDestination] = "";

    const handleStartDateChange = (date) => { setSelectedStartDate(date); };
    const handleEndDateChange = (date) => { setSelectedEndDate(date); };
    const handleDestinationChange = () => { setSelectedDestination(); };

    return (
        <>
            <Navbar />
            <Container fixed>
                <form>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                id="destination"
                                label="Destination"
                                variant="outlined"
                                value={selectDestination}
                                onChange={handleDestinationChange} />
                        </Grid>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid item xs={12}>
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

                            <Grid item xs={12}>
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
                                <ItineraryEditor />
                            }}>Takeoff</Button>

                    </Grid>
                </form>
            </Container>
        </>
    );
}
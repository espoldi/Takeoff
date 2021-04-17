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

import { useSelector } from 'react-redux';
import { createTrip } from '../actions/tripActions';

export default function ItineraryCreator() {
  const userId = useSelector(state => (state.auth.user.id));

  const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
  const [selectedEndDate, setSelectedEndDate] = useState(Date.now());

  const handleStartDateChange = (date) => { setSelectedStartDate(date); };
  const handleEndDateChange = (date) => { setSelectedEndDate(date); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...values,
      selectedStartDate,
      selectedEndDate,
      userId
    }
    console.log(newUser);
    //   const newTrip = {...newTrip, userId};
    //   createTrip(newTrip);
  }

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  const [values, setValues] = useState({
    name: '',
    location: '',
    // start: '',
    // end: '',
    userId: userId
  });

  return (
    <Container fixed>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="trip-name"
              label="Trip Name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="destination"
              label="Destination"
              name="location"
              value={values.location}
              onChange={handleInputChange}
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
                name="start"
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
                name="end"
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
            onClick={handleSubmit}
          >Takeoff</Button>

        </Grid>
      </form>
    </Container>
  );
}
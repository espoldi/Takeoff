import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// Material UI
import {
    Button,
    Grid,
    IconButton,
    Paper,
    Snackbar,
    TextField
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    DateTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import {
    Close
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginLeft: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    heading: { fontSize: theme.typography.pxToRem(15) },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
        width: '100%',
      },
}));

export default function EditorMenu() {
    const workingTrip = useSelector(state => state.trips.workingTrip);
    const classes = useStyles();

    const [tripName, setTripName] = useState('');
    const [location, setLocation] = useState('');

    const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
    const handleStartDateChange = (date) => { setSelectedStartDate(date); };

    const [selectedEndDate, setSelectedEndDate] = useState(Date.now());
    const handleEndDateChange = (date) => { setSelectedEndDate(date); };

    const [selectedItemDate, setItemDate] = useState(Date.now());
    const handleItemDateChange = (date) => { setItemDate(date); };

    const [addListOpen, setAddListOpen] = useState(false);
    const handleAddListClick = () => { setAddListOpen(true); };

    const handleAddListClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAddListOpen(false);
    };

    useEffect(() => {
        setTripName(workingTrip.name);
        setLocation(workingTrip.location);
        setSelectedStartDate(workingTrip.start);
        setSelectedEndDate(workingTrip.end);
    }, [workingTrip]);

    return (
        <Paper>
            <h1 align="center">Itinerary Editor: {tripName} in {location}</h1>

            <Grid container>

                <Grid item xs={12} md={6}>

                    <Grid container align="center">
                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disabled
                                    margin="normal"
                                    id="starting-date"
                                    label="Start Date"
                                    value={selectedStartDate}
                                    onChange={handleStartDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'start date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disabled
                                    margin="normal"
                                    id="ending-date"
                                    label="End Date"
                                    value={selectedEndDate}
                                    onChange={handleEndDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'end date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={6}>

                    <Grid container align="center">
                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DateTimePicker
                                    className={classes.textField}
                                    label="DateTimePicker"
                                    inputVariant="outlined"
                                    value={selectedItemDate}
                                    onChange={handleItemDateChange}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                id="itinerary-item"
                                label="Activity"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                        <Button size="small" color="primary" align="right"
                            onClick={handleAddListClick}>Submit</Button>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            open={addListOpen}
                            autoHideDuration={1500}
                            onClose={handleAddListClose}
                            message="Event Added Successfully!"
                            action={
                                <React.Fragment>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleAddListClose}>
                                        <Close fontSize="small" />
                                    </IconButton>
                                </React.Fragment>
                            }
                        />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// Material UI
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
    Typography
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import {
    Close,
    ExpandMore
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginLeft: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    heading: { fontSize: theme.typography.pxToRem(15) },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function EditorMenu() {
    const workingTrip = useSelector(state => state.trips.workingTrip);
    const classes = useStyles();

    const [tripName, setTripName] = useState('');
    const [location, setLocation] = useState('');
    const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
    const [selectedEndDate, setSelectedEndDate] = useState(Date.now());
    const [selectedTime, setSelectedTime] = useState(Date.now());

    const handleStartDateChange = (date) => { setSelectedStartDate(date); };
    const handleEndDateChange = (date) => { setSelectedEndDate(date); };
    const handleTimeChange = (date) => { setSelectedTime(date); };

    const [itemDate, setItemDate] = useState("");
    const handleItemDateChange = (event) => {
        setItemDate(event.target.value);
    };

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
        <>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1-content" id="panel1-header">
                    <Typography className={classes.heading}>Basic Trip Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                id="trip-name"
                                label="Trip Name"
                                variant="outlined"
                                value={tripName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="destination"
                                label="Destination"
                                variant="outlined"
                                value={location}
                            />
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
                    </Grid>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="primary">Save</Button>
                </AccordionActions>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2-content" id="panel2-header">
                    <Typography className={classes.heading}>Add New Itinerary Item</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="Date-Selector">Date</InputLabel>
                                <Select
                                    labelId="item-date"
                                    id="item-date"
                                    value={itemDate}
                                    onChange={handleItemDateChange}
                                    label="Date"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    id="time-picker"
                                    label="Time picker"
                                    value={selectedTime}
                                    onChange={handleTimeChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="itinerary-item"
                                label="Activity"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="primary"
                        onClick={handleAddListClick}>Save</Button>
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
                </AccordionActions>
            </Accordion>
        </>
    );
}
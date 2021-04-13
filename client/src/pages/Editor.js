import React, { useState } from 'react';
// Material UI
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    Collapse,
    Container,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
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
    ChevronRight,
    Close,
    Edit,
    ExpandLess,
    ExpandMore} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginLeft: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
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

export default function ItineraryEditor() {
    const classes = useStyles();

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

    const [listOpen, setListOpen] = useState(true);

    const handleListClick = () => {
        setListOpen(true);
    };


    const [addListOpen, setAddListOpen] = useState(false);
    const handleAddListClick = () => { setAddListOpen(true); };

    const handleAddListClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAddListOpen(false);
    };

    return (
        <Container fixed>
            <h1>Itinerary Editor</h1>
            <Grid container>
                <Grid item xs={12} md={4}>
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
                                    horizontal: 'left',
                                }}
                                open={addListOpen}
                                autoHideDuration={2000}
                                onClose={handleAddListClose}
                                message="Note archived"
                                action={
                                    <React.Fragment>
                                        <Button color="secondary" size="small" onClick={handleAddListClose}>
                                            UNDO</Button>
                                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleAddListClose}>
                                            <Close fontSize="small" />
                                        </IconButton>
                                    </React.Fragment>
                                }
                            />
                        </AccordionActions>
                    </Accordion>
                </Grid>

                <Grid item xs={12} md={8}>
                    {/* Insert function to make nested list items for each day in range of start and end dates */}
                    <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>

                        <ListItem button>
                            <ListItemText primary="4/10/2021" />
                        </ListItem>

                        <ListItem button>
                            <ListItemText primary="4/11/2021" />
                        </ListItem>

                        <ListItem button onClick={handleListClick}>
                            <ListItemText primary="4/12/2021" />
                            {listOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        <Collapse in={listOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText primary="New Activity Listing" />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="edit"
                                            onClick={() => { alert('clicked') }}>
                                            <Edit />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>

                </Grid>
            </Grid>
        </Container>
    );
}
import React, { useState } from 'react';
import clsx from 'clsx';
// Material UI
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    Container,
    Divider,
    Grid,
    TextField,
    Typography
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    heading: { fontSize: theme.typography.pxToRem(15) },
}));

export default function ItineraryEditor() {
    const classes = useStyles();

    const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
    const [selectedEndDate, setSelectedEndDate] = useState(Date.now());
    const [selectDestination, setSelectedDestination] = "";

    const handleStartDateChange = (date) => { setSelectedStartDate(date); };
    const handleEndDateChange = (date) => { setSelectedEndDate(date); };
    const handleDestinationChange = () => { setSelectedDestination(); };

    return (
        <Container fixed>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                    <Typography className={classes.heading}>Basic Trip Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                    </Grid>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="primary">Save</Button>
                </AccordionActions>
            </Accordion>
        </Container>
    );
}
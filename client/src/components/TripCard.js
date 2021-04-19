import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';

import { setWorkingTrip } from '../actions/tripActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

export default function TripCard(props) {
    let history = useHistory();
    const dispatch = useDispatch();
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        await dispatch(setWorkingTrip(props.data._id));
        history.push('/editor');
    }
    const classes = useStyles();
    return (
        <Grid item xs>
            <Paper className={classes.paper}>
                
                    <Typography variant="h6" color="textSecondary">{props.data.name}</Typography>
                    <Typography variant="h6">Destination: {props.data.location}</Typography>
                    <Typography variant="h6">Start Date: {props.data.start}</Typography>
                    <Typography variant="h6">End Date: {props.data.end}</Typography>
                <Divider />
                <Button onClick={handleEditSubmit} color="primary">Edit</Button>
                <Button color="secondary">Archive</Button>
            </Paper>
        </Grid>
    );
}

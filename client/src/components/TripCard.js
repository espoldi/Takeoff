import React, { useEffect } from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import moment from 'moment';
import { setWorkingTrip, updateTrip } from '../actions/tripActions';
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
    const handleEditSubmit = async () => {
        await dispatch(setWorkingTrip(props.data._id));
        history.push('/editor');
    }
    const handleArchiveSubmit = async () => {
        await dispatch(updateTrip(props.data._id, {archived: true}));
    }
    const handleDeleteSubmit = async () => {
        await dispatch(setWorkingTrip(props.data._id));
    }
    const classes = useStyles();
    return (
        <Grid item xs>
            <Paper className={classes.paper}>
                
                    <Typography variant="h6" color="textSecondary">{props.data.name}</Typography>
                    <Typography variant="h6">Destination: {props.data.location}</Typography>
                    <Typography variant="h6">Start Date: {moment(props.data.start).format('MM/DD/YYYY')}</Typography>
                    <Typography variant="h6">End Date: {moment(props.data.end).format('MM/DD/YYYY')}</Typography>
                <Divider />
                <Button onClick={handleEditSubmit} color="primary">Edit</Button>
                <Button onClick={handleArchiveSubmit} color="primary">Archive</Button>
                <Button color="primary">Delete</Button>
            </Paper>
        </Grid>
    );
}

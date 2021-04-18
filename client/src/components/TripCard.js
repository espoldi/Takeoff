import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

export default function TripCard(props) {
    const classes = useStyles();
    return (
        <Grid item xs>
            <Paper className={classes.paper}>
                
                    <Typography variant="h6" color="textSecondary">{props.data.name}</Typography>
                    <Typography variant="h6">Destination: {props.data.location}</Typography>
                    <Typography variant="h6">Start Date: {props.data.start}</Typography>
                    <Typography variant="h6">End Date: {props.data.end}</Typography>
                <Divider />
                <Button color="primary">Edit</Button>
                <Button color="secondary">Archive</Button>
            </Paper>
        </Grid>
    );
}
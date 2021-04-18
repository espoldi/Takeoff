import React from 'react';
// Material UI
import TripCard from '../components/TripCard.js';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

function Current(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid item xs={12}>
                    <Typography variant="h5" color="textSecondary">My Current Adventures</Typography>
                </Grid>
                <Grid container spacing={2}>
                    {props.data.map((trip) => (
                        <Grid item xs={4}>
                            <TripCard data={trip} />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    );
}

export default Current;
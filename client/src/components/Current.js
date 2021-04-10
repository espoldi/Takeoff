import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

function Current() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h5" color="textSecondary">My Current Adventure</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4">Destination: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5">Start Date: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5">End Date: </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Current Activity: </Typography>
                    </Grid>
                </Grid>
                <Button>Edit Itinerary</Button>
            </Paper>
        </div>
    );
}

export default Current;
import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core/';

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
                    <Grid item xs>
                        <Typography variant="h5" color="textSecondary">My Current Adventure</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Typography variant="h4">Destination: </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography variant="h5">Start Date: </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5">End Date: </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Typography variant="h5">Current Activity: </Typography>
                    </Grid>
                </Grid>
                <Button>Edit Itinerary</Button>
            </Paper>
        </div>
    );
}

export default Current;
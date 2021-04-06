import React from 'react';
// Components
import Navbar from '../components/Navbar.js';
// Material UI
import { Container } from '@material-ui/core';
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

export default function MeetTheTeam() {
    const classes = useStyles();
    return(
        <>
            <Navbar />
            <Container fixed>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" color="textSecondary">Nardin Lachowski</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" color="textSecondary">Adrienne Osorio</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" color="textSecondary">Bill Soss</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" color="textSecondary">Emily Spoldi</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" color="textSecondary">Adriana Valdiglesias</Typography>
                        </Paper>
                    </Grid>
                </Grid>
        </div>
            </Container>
        </>
    );
}
import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core/';
import { CardActions } from '@material-ui/core/';
import { CardContent } from '@material-ui/core/';
import { Button } from '@material-ui/core/';

const useStyles = makeStyles({
    root: { minwidth: 275 },
    title: { fontSize: 14 }
});

function Current() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary">My Current Adventure</Typography>
                <Typography component="h2">Destination: </Typography>
                <Typography component="h3">Start Date: </Typography>
                <Typography component="h3">End Date: </Typography>
                <Typography component="h3">Current Activity: </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit Itinerary</Button>
            </CardActions>
        </Card>
    );
}

export default Current;
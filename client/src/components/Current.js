import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core/';
import { CardActions } from '@material-ui/core/';
import { CardContent } from '@material-ui/core/';
import { Button } from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
        minwidth: 275
    },

    title: {
        fontSize: 14
    }
});

function Current() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <ClassContent>
                <Typography className={classes.title} color="textSecondary">My Current Adventure</Typography>
            </ClassContent>
            <CardActions>
                <Button size="small">Edit Itinerary</Button>
            </CardActions>
        </Card>
    );
}

export default Current;
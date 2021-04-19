import React, { useState } from 'react';
// Material UI
import {
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core';
import {
    useTheme,
    makeStyles
} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '95%',
        marginLeft: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Itinerary(props) {
    const classes = useStyles();
    const handleDelete = () => { 
        // given the id of the item, delete the entry at that spot
     };
    return (
        <>
            <List aria-labelledby="itinerary" className={classes.root}>
            {[0, 1, 2, 3].map((value) => (
                    <ListItem key={`item-${value}`}>
                        <ListItemText primary={value} secondary={value} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
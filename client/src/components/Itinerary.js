import React, { useState } from 'react';
// Material UI
import {
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    ChevronRight,
    Edit,
    ExpandLess,
    ExpandMore
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginLeft: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function Itinerary() {
    const classes = useStyles();

    // Handler for opening and closing itinerary dates
    const [open, setOpen] = useState(true);
    const handleClick = () => { setOpen(!open); };


    return (
        <>

            <List
                component="itinerary"
                aria-labelledby="nested-itinerary-events"
                className={classes.root}
            >
                {/* Insert function to make nested list items for each day in range of start and end dates */}
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Insert Itinerary Date" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="Insert Event Activity Text" />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit"
                                    onClick={() => { alert('clicked') }}>
                                    <Edit />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </>
    );
}
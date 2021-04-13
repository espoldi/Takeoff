import React, { useState } from 'react';
// Material UI
import {
    Collapse,
    Grid,
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
    heading: { fontSize: theme.typography.pxToRem(15) },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Itinerary() {
    const classes = useStyles();

    const [listOpen, setListOpen] = useState(true);

    const handleListClick = () => {
        setListOpen(true);
    };



    return (
        <>
            {/* Insert function to make nested list items for each day in range of start and end dates */}
            <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>

                <ListItem button>
                    <ListItemText primary="4/10/2021" />
                </ListItem>

                <ListItem button>
                    <ListItemText primary="4/11/2021" />
                </ListItem>

                <ListItem button onClick={handleListClick}>
                    <ListItemText primary="4/12/2021" />
                    {listOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={listOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="New Activity Listing" />
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
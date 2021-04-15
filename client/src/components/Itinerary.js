import React, { useState } from 'react';
// Material UI
import {
    Button,
    Collapse,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    useMediaQuery
} from '@material-ui/core';
import {
    useTheme,
    makeStyles
} from '@material-ui/core/styles';
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

    // Pop Up Editor Responsiveness
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    // Handler for opening and closing itinerary dates
    const [itemOpen, setItemOpen] = useState(true);
    const handleItemClick = () => { setItemOpen(!itemOpen); };

    // Handler for Pop Up editor
    const [editOpen, setEditOpen] = useState(false);

    const handleEditClickOpen = () => {setEditOpen(true);};
  
    const handleEditClose = () => {setEditOpen(false);};

    return (
        <>

            <List
                component="itinerary"
                aria-labelledby="nested-itinerary-events"
                className={classes.root}
            >
                {/* Insert function to make nested list items for each day in range of start and end dates */}
                <ListItem button onClick={handleItemClick}>
                    <ListItemText primary="Insert Itinerary Date" />
                    {itemOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={itemOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="Insert Event Activity Text" />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit"
                                    onClick={handleEditClickOpen}>
                                    <Edit />
                                </IconButton>
                                <Dialog
                                    fullScreen={fullScreen}
                                    open={editOpen}
                                    onClose={handleEditClose}
                                    aria-labelledby="itinerary-item-editor"
                                    aria-describedby="itinerary-item-description"
                                >
                                    <DialogTitle id="editor-title">{"Itinerary Point Editor"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="itinerary-item-description">
                                            Let Google help apps determine location. This means sending anonymous location data to
                                            Google, even when no apps are running.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleEditClose} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={handleEditClose} color="primary" autoFocus>
                                            Save
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </>
    );
}
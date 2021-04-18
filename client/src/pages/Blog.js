import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// Material UI
import {
    AppBar,
    Container,
    Dialog,
    DialogContent,
    Fab,
    Grid,
    Typography,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { getPosts } from '../actions/postActions';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: "#9DCACB",
      },
      heading: {
        color: "#eaf7f7",
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse"
        }
      },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

export default function Blog() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    // Floating Action Button and Dialog Box for Post Creation
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container fixed>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> BLOG </Typography>
            </AppBar>
            <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClickOpen}><Edit /></Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-add-post"
                aria-describedby="alert-add-post">
                <DialogContent>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </DialogContent>
            </Dialog>
        </Container>
    );
}
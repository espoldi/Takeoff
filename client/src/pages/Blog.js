import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Material UI
import {
    
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
        background: "#cde1d8",
      },
      heading: {
        marginTop: "25px",
        color: "#eaf7f7",
        marginBottom: "50px"
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
    const userId = useSelector(state => state.auth.user.id);
    const classes = useStyles();
    const dispatch = useDispatch();

    // Floating Action Button and Dialog Box for Post Creation
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    useEffect(() => {
        dispatch(getPosts(userId));
    }, [userId, dispatch]);

    const posts = useSelector(state => state.posts.posts);

    // const [formData, setFormData] = useState({
    //     title: '', message: '', tags: '', selectedFile: ''
    // });

    return (
        <Container fixed>
          
                <Typography className={classes.heading} variant="h2" align="center" style={{textDecoration: "none", color: "#113034", fontFamily:"aw-conqueror-didot", fontWeight: "900", fontSize: "5rem", fontStyle: 'normal'}} > Blog </Typography>
           
            <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                <Posts posts={posts} handler={handleClickOpen} />
            </Grid>
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClickOpen}><Edit /></Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-add-post"
                aria-describedby="alert-add-post">
                <DialogContent>
                    <Form />
                </DialogContent>
            </Dialog>
        </Container>
    );
}
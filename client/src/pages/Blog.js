import React, { useEffect, useState } from 'react';
// Material UI
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../actions/postActions';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import useStyles from './styles';

export default function Blog() {
    const userId = useSelector(state => state.auth.user.id);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(userId));
    }, [userId, dispatch]);

    const posts = useSelector(state => state.posts.posts);

    // const [formData, setFormData] = useState({
    //     title: '', message: '', tags: '', selectedFile: ''
    // });

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color ="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> BLOG </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts posts={posts} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
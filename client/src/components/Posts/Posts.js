import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post'; 
import useStyles from './styles';

const Posts = (props) => {
    const classes = useStyles();
    return (
        !props.posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {props.posts.map((post) => (
                    <Grid item xs={12} sm={6}>
                        <Post post={post} handler={props.handler} key={post._id} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;

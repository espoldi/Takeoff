import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Tooltip } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deletePost, starPost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
            <Tooltip title="Edit" aria-label="edit">
                <Button style={{color: 'white'}} size="small" onClick={()=> { setCurrentId(post._id)}} >
                    <MoreHorizIcon fontSize="default" />
                </Button>
                </Tooltip>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Tooltip title="Star" aria-label="star">
                <Button size="small" color="primary" onClick={()=> dispatch(starPost(post._id))}>
                    <StarIcon fontSize="small" />
                    &nbsp; &nbsp;
                    {post.rating}
                </Button>
                </Tooltip>
                <Tooltip title="Delete" aria-label="Delete">
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default Post;
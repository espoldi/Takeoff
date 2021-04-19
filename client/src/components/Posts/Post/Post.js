import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deletePost, setCurrentPost } from '../../../actions/postActions'

const Post = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card} style={{backgroundColor:"#ece3d4" }}>
            <CardMedia className={classes.media} image={props.post.selectedFile || 'https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'} title={props.post.title} />
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(props.post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Tooltip title="Edit" aria-label="edit">
                    <Button style={{ color: 'white' }} size="small" onClick={() => {
                      dispatch(setCurrentPost(props.post._id));
                      props.handler();
                    }}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </Tooltip>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary"style={{textDecoration: "none", color: "#113034", fontFamily:"nimbus-roman, serif", fontWeight: "600", fontStyle: 'normal'}}>{props.post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" style={{textDecoration: "none", color: "#113034", fontFamily:"nimbus-roman, serif", fontWeight: "600", fontStyle: 'normal'}} gutterBottom>{props.post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" style={{textDecoration: "none", color: "#113034", fontFamily:"aw-conqueror-didot", fontWeight: "600", fontStyle: 'normal'}} component="p">{props.post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Tooltip title="Delete" aria-label="Delete">
                    <Button size="small" color="primary" onClick={() => dispatch(deletePost(props.post._id))}>
                        <DeleteIcon fontSize="small" /> Delete
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default Post;
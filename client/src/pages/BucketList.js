import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import {
  getBucketItems,
  createBucketItem,
  deleteBucketItem,
} from "../actions/bucketActions";
=======
import { useDispatch, useSelector } from 'react-redux';
import { getBucketItems, createBucketItem, deleteBucketItem } from '../actions/bucketActions';
>>>>>>> c5617385df99f1ab18a295fdb080c638a292d85f
// Material UI
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
// import { Image } from "src/backgroundImage/palmshadow.jpg";
// import { CardMedia } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    alignItems: "center",
  },
}));

export default function CheckboxListSecondary() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const userId = useSelector((state) => state.auth.user.id);
  useEffect(() => {
    dispatch(getBucketItems(userId));
  }, []);
  const bucketList = useSelector((state) => state.bucket.bucketListItems);
=======
  const userId = useSelector(state => state.auth.user.id);
  useEffect(() => {
    dispatch(getBucketItems(userId));
  }, []);
  const bucketList = useSelector(state => state.bucket.bucketListItems);
>>>>>>> c5617385df99f1ab18a295fdb080c638a292d85f

  const classes = useStyles();
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleDelete = (id) => {
    dispatch(deleteBucketItem(id));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = { description: name, userId };
    dispatch(createBucketItem(newItem));
<<<<<<< HEAD
    setName("");
  };
=======
    setName('');
  }
>>>>>>> c5617385df99f1ab18a295fdb080c638a292d85f

  return (
    <Container
      fixed
      align="center"
      style={{
        backgroundImage:
          'url("https://as1.ftcdn.net/jpg/02/72/49/94/500_F_272499478_1MouzCdyOsh3zOhB1plXxTzfmFLDG5v8.jpg")',
        backgroundRepeat: "no repeat",
        backgroundSize: "cover",
        Width: "1000",
        Height: "667",
        backgroundPosition: "center",
      }}
    >
      <Typography
        className={classes.heading}
        variant="h2"
        align="center"
        style={{
          marginTop: "50px",
          textDecoration: "none",
          color: "#113034",
          fontFamily: "aw-conqueror-didot",
          fontWeight: "900",
          fontSize: "5rem",
          fontStyle: "normal",
        }}
      >
        {" "}
        My Bucket List{" "}
      </Typography>

      <List dense className={classes.root}>
        {bucketList.map((item) => {
          const labelId = `checkbox-list-secondary-label-${item._id}`;
          return (
            <Box>
              <ListItem key={item._id} button>
                <ListItemAvatar>
<<<<<<< HEAD
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(item._id)}
                  >
=======
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item._id)}>
>>>>>>> c5617385df99f1ab18a295fdb080c638a292d85f
                    <DeleteIcon />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`${item.description}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(item._id)}
                    checked={checked.indexOf(item._id) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </Box>
          );
        })}
      </List>
<<<<<<< HEAD
      <br />
      <form onSubmit={onSubmit}>
        <InputLabel align="center" htmlFor="component-outlined"></InputLabel>
=======
      <form onSubmit={onSubmit}>
        <InputLabel htmlFor="component-outlined"></InputLabel>
>>>>>>> c5617385df99f1ab18a295fdb080c638a292d85f
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <br />
        <br />
        <Button
          align="center"
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
=======
        <Button variant="contained" color="primary" onClick={onSubmit}>
>>>>>>> c5617385df99f1ab18a295fdb080c638a292d85f
          Add New Destination
        </Button>
      </form>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBucketItems, createBucketItem, deleteBucketItem } from '../actions/bucketActions';
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
  const userId = useSelector(state => state.auth.user.id);
  useEffect(() => {
    dispatch(getBucketItems(userId));
  }, []);
  const bucketList = useSelector(state => state.bucket.bucketListItems);

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
    setName('');
  }

  return (
    <Container fixed align="center">
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
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item._id)}>
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
      <form onSubmit={onSubmit}>
        <InputLabel htmlFor="component-outlined"></InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Add New Destination
        </Button>
      </form>
    </Container>
  );
}

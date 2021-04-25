import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBucketItems } from '../actions/bucketActions';
import comingSoon from '../images/coming-soon-2.png';
// Material UI
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
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
  const [checked, setChecked] = React.useState([1]);

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
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

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
                  <IconButton edge="end" aria-label="delete">
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
      <FormControl variant="outlined" margin="dense">
        <InputLabel htmlFor="component-outlined"></InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          label="Name"
        />
        <Button variant="contained" color="primary">
          Add New Destination
        </Button>
      </FormControl>
      <br />
      <Box padding={5}>
        <Avatar style={{ height: '150px', width: '150px' }}
          alt="page under construction"
          src={comingSoon}
        />
        <p>The ability to add and delete locations is currently under construction.</p>
      </Box>
    </Container>
  );
}

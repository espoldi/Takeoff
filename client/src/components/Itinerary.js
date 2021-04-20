import React, { useEffect } from 'react';
// Material UI
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import {
  useTheme,
  makeStyles
} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getItineraryItems, deleteItineraryItem } from '../actions/itineraryActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Itinerary(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleDelete = (id) => {
    dispatch(deleteItineraryItem(id));
  };

  const workingTrip = useSelector(state => state.trips.workingTrip);

  useEffect(() => {
    dispatch(getItineraryItems(workingTrip._id));
  }, []);
  
  let itineraryItems = useSelector(state => state.itinerary.itineraryItems);

  return (
    <>
      <List aria-labelledby="itinerary" className={classes.root}>
        {itineraryItems.map((item) => (
          <ListItem key={`item-${item._id}`}>
            <ListItemText primary={moment(item.date).format('MM/DD/YYYY LT')} secondary={item.activity} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item._id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
}
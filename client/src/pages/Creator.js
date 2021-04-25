import React, { useState } from "react";
// Material UI
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

import { useSelector, useDispatch } from "react-redux";
import { createTrip } from "../actions/tripActions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),

  },
  date: {
    width: '50%'

  },
  button: {
    alignItems: "center"
  }
}));

export default function ItineraryCreator(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.id);

  const [start, setStart] = useState(Date.now());
  const [end, setEnd] = useState(Date.now());

  const handleStartDateChange = (date) => {
    setStart(date);
  };
  const handleEndDateChange = (date) => {
    setEnd(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      ...values,
      start,
      end,
    };
    dispatch(createTrip(newTrip));
    props.history.push("/editor");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({
    name: "",
    location: "",
    userId: userId,
  });

  return (
    <Container fixed>
      <Typography
        variant="h2"
        align="center"
        style={{
          textDecoration: "none",
          color: "#113034",
          fontFamily: "aw-conqueror-didot",
          fontWeight: "900",
          fontSize: "5rem",
          fontStyle: "normal",
          marginTop: "50px",
        }}
      >
        {" "}
        Intinerary Creator{" "}
      </Typography>

      <Container fixed>
        <Paper>
          <form onSubmit={handleSubmit}>
            <Grid container align="center">
              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  id="trip-name"
                  label="Trip Name"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  id="destination"
                  label="Destination"
                  name="location"
                  value={values.location}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>

              <Grid container>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={12} sm={6}>
                  <KeyboardDatePicker
                    className={classes.date}
                    margin="normal"
                    id="starting-date"
                    label="Start Date"
                    format="MM/dd/yyyy"
                    name="start"
                    value={start}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change start date",
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <KeyboardDatePicker
                    className={classes.date}
                    margin="normal"
                    id="ending-date"
                    label="End Date"
                    format="MM/dd/yyyy"
                    name="end"
                    value={end}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change end date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<FlightTakeoffIcon />}
                  onClick={handleSubmit}
                >
                  Takeoff
              </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Container>
  );
}

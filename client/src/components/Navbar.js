import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// dark mode
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import LeftMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";

import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import {
  // ChevronLeftIcon,
  Dashboard,
  Description,
  Image,
  Queue,
  Group,
  ContactMail,
  CancelPresentation,
} from "@material-ui/icons/";

import { useDispatch } from "react-redux";
import { logoutUser } from "../actions/authActions";

/// CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 240,
    height: "100%",
  },

  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

const Navbar = (props) => {
  const icon = !props.theme ? <Brightness7Icon /> : <Brightness3Icon />;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const [state, setState] = useState({
    left: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <List>
        <NavLink to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Image />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
        </NavLink>

        <NavLink to="/creator" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Itinerary Creator" />
          </ListItem>
        </NavLink>

        <NavLink to="/blog" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary={"My Blog"} />
          </ListItem>
        </NavLink>

        <NavLink to="/bucket-list" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Queue />
            </ListItemIcon>
            <ListItemText primary={"Bucket List"} />
          </ListItem>
        </NavLink>

        <Divider />

        <NavLink to="/meet-the-team" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary={"Meet the Team"} />
          </ListItem>
        </NavLink>

        <NavLink to="/contact" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <ContactMail />
            </ListItemIcon>
            <ListItemText primary={"Contact Us"} />
          </ListItem>
        </NavLink>
        <ListItem button>
          <ListItemIcon>
            <CancelPresentation />
          </ListItemIcon>
          <ListItemText onClick={handleLogout}>Log Off</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box component="nav">
      <AppBar
        position="static"
        style={{
          palette: {
            type: "dark",
            backgroundColor: "#1e2228",
          },
        }}
      >
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Toolbar>
                <IconButton edge="start" onClick={toggleSlider("left", true)}>
                  <FlightTakeoffIcon style={{ fontSize: 35 }} />
                </IconButton>
                <Typography variant="h5">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontFamily: "aw-conqueror-didot",
                      fontWeight: "900",
                      fontSize: "1.75rem",
                      fontStyle: "normal",
                    }}
                  >
                    TakeOff
                  </Link>
                </Typography>
                <LeftMenuSlider
                  anchor="left"
                  open={state.left}
                  onClose={toggleSlider("left", false)}
                >
                  {sideList("left")}
                </LeftMenuSlider>
              </Toolbar>
            </Grid>
            <Grid item>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => props.changeTheme(!props.theme)}
              >
                {icon}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <Box borderBottom={2.75} style={{ color: "#113034" }}></Box> */}
    </Box>
  );
};

export default Navbar;

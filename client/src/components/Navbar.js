import React from "react";
// Components
import SideNav from '../components/SideNav.js';
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core/";
import { Toolbar } from "@material-ui/core/";
import { Typography } from "@material-ui/core/";
import { IconButton } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/FlightTakeoff";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

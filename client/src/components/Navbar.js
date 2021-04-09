import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import clsx from 'clsx';
// Material UI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography } from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <FlightTakeoffIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Takeoff
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        
        <List>
          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"Dashboard"}/>
            </ListItem>
          </Link>
          <Link to="/ItineraryCreator" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"Itinerary Creator"}/>
            </ListItem>
          </Link>
          <Link to="/Blog" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"My Blog"}/>
            </ListItem>
          </Link>
          <Link to="/BucketList" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"Bucket List"}/>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/MeetTheTeam" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"Meet the Team"}/>
            </ListItem>
          </Link>
          <Link to="/Contact" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"Contact Us"}/>
            </ListItem>
          </Link>
         </List>
      </Drawer>
      <Switch>
        <Route exact path="/">
        Dashboard
        </Route>
      </Switch>
             
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
      </main>
    </div>
    </Router>
  );
}

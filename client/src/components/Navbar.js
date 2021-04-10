import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
  Typography,
} from "@material-ui/core";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

export default function Navbar() {
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
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          <NavLink to="/" className= { classes.link }>
            <ListItem button>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </NavLink>
          
          <NavLink
            to="/creator" className= { classes.link }              >
            <ListItem button>
              <ListItemText primary="Itinerary Creator" />
            </ListItem>
          </NavLink>
          
          <NavLink to="/blog" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"My Blog"} />
            </ListItem>
          </NavLink>
          
          <NavLink to="/bucket-list" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"Bucket List"} />
            </ListItem>
          </NavLink>
          
          <Divider />
          
          <NavLink to="/meet-the-team" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"Meet the Team"} />
            </ListItem>
          </NavLink>
          
          <NavLink to="/contact" className={classes.link}>
            <ListItem button>
              <ListItemText primary={"Contact Us"} />
            </ListItem>
          </NavLink>
          {/* <NavLink to="/" className={classes.link}> THIS NEEDS TO ROUTE TO LOG OFF */}
          <ListItem button>
            <ListItemText primary={"Log Off"} />
          </ListItem>
          {/* </NavLink> */}
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}

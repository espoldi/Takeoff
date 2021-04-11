import React, {useState} from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink} from "react-router-dom";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import LeftMenuSlider from "@material-ui/core/Drawer"
import {
  AppBar,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";

import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import{
  // ChevronLeftIcon,
  Dashboard,
  Description,
  Image,
  Queue,
  Group,
  ContactMail,
  CancelPresentation
} from "@material-ui/icons/";


/// CSS Styles
const useStyles =makeStyles ((theme) => ({
  menuSliderContainer: {
    width: 240,
    height: "100%"
  },

  link: 
  {
    textDecoration: "none",
    color: theme.palette.text.primary,
  }
}));


  const menuItems = [
     
  {
    ListItemIcon: <Group/>,
    ListItemText: "Meet the Team",
    ListItemPath: "/meet-the-team"
  },
  {
    ListItemIcon: <ContactMail/>,
    ListItemText: "Contact Us",
    ListItemPath: "/contact"
  },
  {
    ListItemIcon: <CancelPresentation/>,
    ListItemText: "Log Off",
    ListItemPath: "/"
  },
];
const Navbar = () => {
  const [state, setState] = useState({
    left:false
  });

  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open });
  };

  const classes = useStyles();
  
  const sideList = (slider) => (
    <Box className={classes.menuSliderContainer}
    component="div"
    onClick={toggleSlider(slider, false)}>
      <List>
      <NavLink to="/" className= { classes.link }>
            <ListItem button>
              <ListItemIcon><Image/></ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </NavLink>
          
          <NavLink
            to="/creator" className= { classes.link }              >
            <ListItem button>
              <ListItemIcon>
                <Description/>
              </ListItemIcon>
              <ListItemText primary="Itinerary Creator" />
            </ListItem>
          </NavLink>
          
          <NavLink to="/blog" className={classes.link}>
            <ListItem button>
              <ListItemIcon><Dashboard/></ListItemIcon>
              <ListItemText primary={"My Blog"} />
            </ListItem>
          </NavLink>
          
          <NavLink to="/bucket-list" className={classes.link}>
            <ListItem button>
              <ListItemIcon><Queue/></ListItemIcon>
              <ListItemText primary={"Bucket List"} />
            </ListItem>
          </NavLink>
          
          <Divider />
          
          <NavLink to="/meet-the-team" className={classes.link}>
            <ListItem button>
              <ListItemIcon><Group/></ListItemIcon>
              <ListItemText primary={"Meet the Team"} />
            </ListItem>
          </NavLink>
          
          <NavLink to="/contact" className={classes.link}>
            <ListItem button>
              <ListItemIcon><ContactMail/></ListItemIcon>
              <ListItemText primary={"Contact Us"} />
            </ListItem>
          </NavLink>
          <ListItem button>
            <ListItemIcon><CancelPresentation/></ListItemIcon>
            <ListItemText>
              Log Off
            </ListItemText>
          </ListItem>
        </List>
    </Box>
  );
  return (
   <Box component="nav">
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" onClick={toggleSlider("left", true)}>
          <FlightTakeoffIcon/>
        </IconButton>
        <Typography variant="h5">
          <Link to="/" style={{textDecoration: "none", color: "white" }}>
          Takeoff
          </Link>
        </Typography>
        <LeftMenuSlider
        anchor="left"
        open={state.left}
        onClose={toggleSlider("left", false)}>
          {sideList("left")}
        </LeftMenuSlider>
      </Toolbar>
    </AppBar>
  </Box>
  )  
};

  

export default Navbar;
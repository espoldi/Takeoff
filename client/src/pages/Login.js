import React, { Component } from "react";
import { Link } from "react-router-dom";
import waves from '../images/waves.png';
//Material UI
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core/";
import { createStyles, withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import { connect as reduxConnect } from "react-redux";
import { loginUser } from "../actions/authActions";

import Copyright from "../components/Copyright";

const styles = (theme) =>
  createStyles({
    root: {
      height: "100vh"
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/collection/74439722)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#a8c6ce",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} squarestyle={{color: '#113039'}}>
          <div className={classes.paper}>
            <Avatar
              className={classes.avatar}
              alt="waves"
              src={waves}
            />

            <Typography component="h1" variant="h5" style={{color: '#113034', fontFamily:"aw-conqueror-didot", fontWeight: "900", fontStyle: 'normal'}}>
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={this.onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                onChange={this.onChange}
                value={this.state.email}
                error={this.state.errors.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.onChange}
                value={this.state.password}
                error={this.state.errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <p className="grey-text text-darken-1">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </Grid>
              </Grid>
              <Grid container mt={5}>
                <Grid item xs={12} >
                  <br />
                  <br />
                  <br />
                <Typography variant="h6" style={{color: "#113034", fontFamily:"aw-conqueror-didot", fontWeight: "900", fontStyle: "normal", textAlign:"center"}} >
                    Plan your trips and save your memories with 
                  </Typography>
                  <Typography variant="h6" style={{color: "#113034", fontFamily:"aw-conqueror-didot", fontWeight: "900", fontStyle: "normal", textAlign:"center"}} >TAKE OFF </Typography>
                </Grid>
              </Grid>
                       
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default reduxConnect(mapStateToProps, { loginUser })(
  withStyles(styles)(Login)
);

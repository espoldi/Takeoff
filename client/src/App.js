import React, { Component } from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Navbar from './components/Navbar';
// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Creator from './pages/Creator';
import Editor from './pages/Editor';
import Blog from './pages/Blog';
import BucketList from './pages/BucketList';
import MeetTheTeam from './pages/MeetTheTeam';
import Contact from './pages/Contact';
// Theme
import { light, dark } from "./utils/Theme";
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// JWT
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// Private Route
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  }
}


class App extends Component {
  state = {
    theme: false,
    appliedTheme: light
}
changeTheme = () => {
     const appliedTheme = createMuiTheme(this.state.theme ? light : dark)
     this.setState({
         theme: !this.state.theme,
           appliedTheme: appliedTheme
      })
}
  componentDidMount() {
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.appliedTheme}>
        <CssBaseline />
      <Provider store={store}>
        <Router>
          <Switch>
            {/* Public Routes */}
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <div>
              <Navbar theme = {this.state.theme}  changeTheme = {this.changeTheme}/>

              {/* Private Routes */}
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/creator" component={Creator} />
              <PrivateRoute exact path="/editor" component={Editor} />
              <PrivateRoute exact path="/blog" component={Blog} />
              <PrivateRoute exact path="/bucket-list" component={BucketList} />
              <PrivateRoute exact path="/meet-the-team" component={MeetTheTeam} />
              <PrivateRoute exact path="/contact" component={Contact} />
            </div>
          </Switch>
        </Router>
      </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;

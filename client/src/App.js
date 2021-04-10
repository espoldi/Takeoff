import React, {Component} from 'react';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItineraryCreator from './pages/ItineraryCreator';
import Contact from './pages/Contact';
import BucketList from './pages/BucketList';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/bucket-list">
              <BucketList />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/creator">
              <ItineraryCreator />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;



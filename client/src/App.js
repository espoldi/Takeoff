import React, { Component } from 'react';
// Components
import Navbar from './components/Navbar';
// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ItineraryCreator from './pages/ItineraryCreator';
import ItineraryEditor from './pages/ItineraryEditor';
import Blog from './pages/Blog';
import BucketList from './pages/BucketList';
import MeetTheTeam from './pages/MeetTheTeam';
import Contact from './pages/Contact';
// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
          <Route exact path="/">
            <Navbar />
            <Dashboard />
          </Route>
          <Route exact path="/creator">
            <Navbar />
            <ItineraryCreator />
          </Route>
          <Route exact path="/editor">
            <Navbar />
            <ItineraryEditor />
          </Route>
          <Route exact path="/blog">
            <Navbar />
            <Blog />
          </Route>
          <Route exact path="/bucket-list">
            <Navbar />
            <BucketList />
          </Route>
          <Route exact path="/meet-the-team">
            <Navbar />
            <MeetTheTeam />
          </Route>
          <Route exact path="/contact">
            <Navbar />
            <Contact />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;



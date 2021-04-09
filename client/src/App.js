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

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/creator">Itinerary Creator</Link>
              </li>
            </ul>
          </nav>
  
          
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/creator">
              <ItineraryCreator />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



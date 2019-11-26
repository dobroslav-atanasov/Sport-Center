import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Town from './components/Town';
import Event from './components/Event';
import User from './components/User';
import userService from './services/userService';
import Logout from './components/Logout';
import { protectedRoute, isNotAuthed, isAuthed, isAdmin, authedRoute } from './components/hocs/privateRoutes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  };

  render() {
    const AdminRoute = protectedRoute(['Admin'], isAdmin);
    const AuthedRoute = authedRoute(['Admin'], isAuthed);
    const NotAuthedRoute = protectedRoute(['Admin'], isNotAuthed);

    return (
      <Router>
        <Route path="/" component={Header} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={NotAuthedRoute(Register)} />
          <Route exact path="/login" component={NotAuthedRoute(Login)} />
          <Route exact path="/logout" component={AuthedRoute(Logout)} />
          <Route exact path="/about" render={NotAuthedRoute(About)} />
          <Route exact path="/add-town" render={AuthedRoute(Town)} />
          <Route exact path="/create-event" render={AuthedRoute(Event)} />
          <Route component={NotFound} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
};

export default App;
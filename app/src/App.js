import React from 'react';
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

function render(Component, isLogged) {
  return function (props) {
    return <Component {...props} {...isLogged} />
  }
};

function parseCookies() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {});
};

class App extends React.Component {
  constructor(props) {
    super(props);
    const cookies = parseCookies();
    const isLogged = !!cookies['x-auth-token'];
    this.state = {
      isLogged: isLogged
    }
  };

  login = (history, data) => {
    userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
    });
  }

  render() {
    const { isLogged } = this.state;
    return (
      <Router>
        <div className="App">
          <Header isLogged={isLogged} />

          <Footer />
        </div>

        <Switch>
          <Route path="/" exact render={render(Home, { isLogged })} />
          <Route path="/login" render={render(Login, { isLogged, login: this.login })} />
          <Route path="/register" render={render(Register, { isLogged })} />
          <Route path="/about" render={render(About, { isLogged })} />
          <Route path="/add-town" render={render(Town, { isLogged })} />
          <Route path="/create-event" render={render(Event, { isLogged })} />
          <Route path="/users" render={render(User, isLogged)} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
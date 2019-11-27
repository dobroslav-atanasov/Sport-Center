import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Town from './components/Town';
import Event from './components/Event';
import routes from './components/hocs/routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  };

  render() {
    const superAdminRoute = routes.protectedRoute(['SuperAdmin'], routes.isSuperAdmin);
    const adminRoute = routes.protectedRoute(['Admin'], routes.isAdmin);
    const userRoute = routes.userRoute(['User'], routes.isAuthenticated);
    const publicRoute = routes.protectedRoute(['User'], routes.isNotAuthenticated);

    return (
      <Router>
        <Route path="/" component={Header} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={publicRoute(Register)} />
          <Route exact path="/login" component={publicRoute(Login)} />
          <Route exact path="/logout" component={userRoute(Logout)} />
          <Route exact path="/about" component={About} />
          <Route exact path="/add-town" component={superAdminRoute(Town)} />
          <Route exact path="/create-event" component={adminRoute(Event)} />
          <Route component={NotFound} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
};

export default App;
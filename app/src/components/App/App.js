import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import Register from '../User/Register';
import Login from '../User/Login';
import Logout from '../User/Logout';
import Home from '../Home';
import About from '../About';
import NotFound from '../NotFound';
import Town from '../Town';
import CreateEvent from '../Event/CreateEvent';
import routes from '../hocs/routes';

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
          <Route exact path="/create-event" component={adminRoute(CreateEvent)} />
          <Route component={NotFound} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
};

export default App;
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
import CreateTown from '../CreateTown';
import CreateEvent from '../Event/CreateEvent';
import routes from '../hocs/routes';
import Users from '../User/Users';
import SuperAdminEvents from '../Event/SuperAdminEvents';
import MyCreatedEvents from '../Event/MyCreatedEvents';
import Event from '../Event/Event';
import CreateResult from '../Result/CreateResult';
import MyEvents from '../Event/MyEvents';
import MyResults from '../Result/MyResults';
import Result from '../Result/Result';

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
          <Route exact path="/about" component={publicRoute(About)} />
          <Route exact path="/add-town" component={superAdminRoute(CreateTown)} />
          <Route exact path="/create-event" component={adminRoute(CreateEvent)} />
          <Route exact path="/users" component={superAdminRoute(Users)} />
          <Route exact path="/super-admin-events" component={superAdminRoute(SuperAdminEvents)} />
          <Route exact path="/my-created-events" component={adminRoute(MyCreatedEvents)} />
          <Route exact path="/event/:id" component={userRoute(Event)} />
          <Route exact path="/add-result/:id" component={adminRoute(CreateResult)} />
          <Route exact path="/my-events" component={userRoute(MyEvents)} />
          <Route exact path="/my-results" component={userRoute(MyResults)} />
          <Route exact path="/result/:id" component={userRoute(Result)} />
          <Route component={NotFound} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
};

export default App;
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
  }

  render() {
    let AdminRoute = protectedRoute(['Admin'], isAdmin);
    let AuthedRoute = authedRoute(['Admin'], isAuthed);
    let NotAuthedRoute = protectedRoute(['Admin'], isNotAuthed);

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
}

// function render(Component, isLogged) {
//   return function (props) {
//     return <Component {...props} {...isLogged} />
//   }
// };

// function parseCookies() {
//   return document.cookie.split('; ').reduce((acc, cookie) => {
//     const [cookieName, cookieValue] = cookie.split('=');
//     acc[cookieName] = cookieValue;
//     return acc;
//   }, {});
// };

// function jwtDecode(token) {
//   return token !== undefined ? jwt.decode(token) : null;
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     const cookies = parseCookies();
//     const isLogged = !!cookies['x-auth-token'];
//     let isSuperAdmin = false;
//     const userInfo = jwtDecode(cookies['x-auth-token']);
//     if (userInfo !== null && userInfo.role === 'SuperAdmin') {
//       isSuperAdmin = true;
//     }
//     this.state = {
//       isLogged: isLogged,
//       isSuperAdmin: isSuperAdmin
//     }
//   };

//   login = (history, data) => {
//     userService.login(data).then(() => {
//       this.setState({ isLogged: true });
//       history.push('/');
//     });
//   };

//   logout = (history) => {
//     userService.logout().then(() => {
//       this.setState({ isLogged: false });
//       history.push('/');
//     });
//   };

//   render() {
//     const { isLogged, isSuperAdmin } = this.state;
//     return (
//       <Router>
//         <div className="App">
//           <Header isLogged={isLogged} isSuperAdmin={isSuperAdmin}/>

//           <Footer />
//         </div>

//         <Switch>
//           <Route path="/" exact render={render(Home, { isLogged, isSuperAdmin })} />
//           <Route path="/login" render={render(Login, { isLogged, login: this.login })} />
//           <Route path="/register" render={render(Register, { isLogged })} />
//           <Route path="/about" render={render(About, { isLogged })} />
//           <Route path="/add-town" render={render(Town, { isLogged })} />
//           <Route path="/create-event" render={render(Event, { isLogged })} />
//           <Route path="/users" render={render(User, { isLogged })} />
//           <Route path="/logout" render={render(Logout, { isLogged, logout: this.logout })} />
//           <Route component={NotFound} />
//         </Switch>
//       </Router>
//     );
//   }
// }
export default App;
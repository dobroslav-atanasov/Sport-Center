import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Footer />
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/about" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './components/HomePage/Home';
import About from './components/AboutUs/About';
import Signup from './components/SignUp/SignUp';
import Login from './components/Login/Login';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
     
    </Router>
    </>
  );
}

export default App;

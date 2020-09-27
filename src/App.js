import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/adventure-react/services' component={Services} />
          <Route path='/adventure-react/products' component={Products} />
          <Route path='/adventure-react/sign-up' component={SignUp} />
          <Route path='/adventure-react/' exact component={Home} />

        </Switch>
      </Router>
    </>);
}

export default App;

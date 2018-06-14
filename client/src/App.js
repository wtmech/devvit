import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;

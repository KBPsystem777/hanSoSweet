import React, { Component } from 'react';
import './App.css';
import logo from './logo.jpg';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Your Source of Locally-Priced Imported Sweets
            <div className="row">
                <Contact />
              </div>
            </p>
          </header>
        </div>
      </div>
    );
  }
}

export default App;

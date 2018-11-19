import React, { Component } from 'react';
import './App.css';
import logo from './logo.jpg';

class Facebook extends Component {
  render() {
    return(
      <div className="btn">
        <a href="https://facebook.com/hanssosweet/" target="_blank" rel="noopener noreferrer">
          <button className="fa fa-facebook"> Facebook</button>
        </a>
      </div>
    )
  }
}


class Instagram extends Component {
  render() {
    return(
      <div className="btn">
        <a href="https://www.instagram.com/hanssosweet_/" target="_blank" rel="noopener noreferrer">
          <button className="fa fa-instagram"> Instagram</button>
        </a>
      </div>
    )
  }
}



class Contact extends Component {
  render() {
    return(
      <div className="container">
        <div>
          <p className="Contact">
            Contact Us:
          </p>
          <h5 className="Contact">GLOBE: 0905 4847198</h5>
          <h5 className="Contact">SMART: 0999 7542792</h5>
        </div>
        <div>
          <Facebook />
          <Instagram />
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>
              Your Source of Locally-Priced Imported Sweets
            <div className="row">
                <Contact />
              </div>
            </h3>
          </header>
        </div>
      </div>
    );
  }
}

export default App;

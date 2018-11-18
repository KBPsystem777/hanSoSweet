import React, { Component } from 'react';
import './App.css';

const logo = 'https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/44129394_244408512896552_6034732683592990720_n.jpg?_nc_cat=101&_nc_ht=scontent.fmnl7-1.fna&oh=0af2bea6272943643b0a1de3da71f881&oe=5C7834A3';



class Facebook extends Component {
  render() {
    return(
      <div className="btn">
        <a href="https://facebook.com/hanssosweet/" target="_blank">
          <button className="fa fa-facebook btn-lg"> Facebook</button>
        </a>
      </div>
    )
  }
}


class Instagram extends Component {
  render() {
    return(
      <div className="btn">
        <a href="https://www.instagram.com/hanssosweet_/" target="_blank">
          <button className="fa fa-instagram btn-lg"> Instagram</button>
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            Your Source of Locally-Priced Imported Sweets
            <div className="row">
              <Contact/>
            </div>
          </h3>
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';


class Facebook extends React.Component {
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


class Instagram extends React.Component {
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



class Contact extends React.Component {
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

export default Contact;
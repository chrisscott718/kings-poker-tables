import React, {Component} from 'react';

import './../styles/components/mainHeader.scss';

export default class MainHeader extends Component {
  render () {
    return (
      <header>
        <div className="container">
          <div className="jumbotron">
            <h1 className="animated fadeInUp">Your Poker Table</h1>
            <h1 className="h--light animated fadeInUp">Redefined</h1>
            <h2 className="h--light animated fadeIn">Customized luxury poker tables made to perfection.</h2>
            <div className="header--cta animated fadeIn">
              <span><strong>Call Us <a href="tel:800-897-1189">(800) 897-1189</a></strong></span>
              <button className="btn btn-default">Learn More</button>
            </div>
          </div>
        </div>
        <img className="header-img animated fadeIn" src='./images/header-bg.png' />
        <div className="header--bottom">
          BUILD YOUR OWN <span className="lnr lnr-chevron-down"></span>
        </div>
      </header>
    )
  }
}

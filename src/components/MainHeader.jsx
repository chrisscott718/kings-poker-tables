import React, {Component} from 'react';

import './../styles/components/mainHeader.scss';

export default class MainHeader extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.props.scrollToElement("byo");
  }

  render () {
    return (
      <header>
        <div className="container">
          <div className="jumbotron">
            <h1 className="animated fadeInUp">Your Poker Table</h1>
            <h1 className="h--light animated fadeInUp">Redefined</h1>
            <h2 className="h--light animated fadeIn">Customized luxury poker tables made to perfection.</h2>
            <div className="header--cta animated fadeIn">
              <button className="btn btn-default" onClick={this.handleScroll}>Start Building</button>
            </div>
          </div>
          <div className="header--bottom">
            <span className="arrow arrow-down"></span>
          </div>
        </div>
        <img className="header-img animated fadeIn" src='./images/header-bg.png' />
      </header>
    )
  }
}

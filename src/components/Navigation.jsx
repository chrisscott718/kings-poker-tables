import React, {Component} from 'react';
import { Transition } from 'react-transition-group';

import './../styles/components/navigation.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { in: false }
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({in: !this.state.in});
  }

  render () {
    let toggled = this.state.in ? 'in' : '';

    return (
      <nav className="navbar">
        <div className="container nav-container">
          <img className="navbar-brand" src='/images/kings-logo.png' />
          <button className={`navbar-toggler ${toggled}`} type="button" onClick={this.toggleNavigation}>
            <div className="bar bar-top"></div>
            <div className="bar bar-middle"></div>
            <div className="bar bar-bottom"></div>
          </button>
        </div>
        <NavItems in={!!this.state.in} />
      </nav>
    )
  }
}
import './../styles/components/navItems.scss';
const navDuration = 300;

const NavItems = ({ in: inProp }) => (
  <Transition in={inProp} timeout={navDuration}>
    { (state) => (
      <div className={`navbar-items ${state}`}>
        <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Build Your Own</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Collections</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Our Story</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Contact Us</a>
          </li>
        </ul>
        </div>
        <svg className="circle">
          <g><ellipse className="background" ry="18" rx="18" cy="18" cx="18" strokeWidth="0"/></g>
        </svg>
      </div>
    )}
  </Transition>
);

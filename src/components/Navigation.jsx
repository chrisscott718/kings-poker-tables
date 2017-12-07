import React, {Component} from 'react';
import { Transition } from 'react-transition-group';

import './../styles/components/navigation.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { in: false }
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleNavigation(el) {
    this.setState({in: !this.state.in});
  }

  handleClick(section) {
    this.toggleNavigation();
    this.props.scrollToElement(section);
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
        <NavItems in={!!this.state.in} handleClick={this.handleClick}/>
      </nav>
    )
  }
}

import './../styles/components/navItems.scss';
const navDuration = 300;

const NavItems = ({ in: inProp, handleClick }) => (
  <Transition in={inProp} timeout={navDuration}>
    { (state) => (
      <div className={`navbar-items ${state}`}>
        <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link" onClick={handleClick.bind(this,'byo')}>Build Your Own</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handleClick.bind(this,'col')}>Collections</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handleClick.bind(this,'sty')}>Our Story</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handleClick.bind(this,'con')}>Contact Us</button>
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

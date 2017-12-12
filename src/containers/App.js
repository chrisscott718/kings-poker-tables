import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Navigation from 'Navigation';
import MainHeader from 'MainHeader';
import BuildYourOwn from 'BuildYourOwn';
import About from 'About';
import Collections from 'Collections';

import './../styles/main.scss';

export default class App extends Component {

  constructor(props){
    super(props);

    this.scrollToElement = this.scrollToElement.bind(this);
  }

  scrollToElement(refName) {
    const node = ReactDOM.findDOMNode(this[refName]);
    if(node)
      node.scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  render () {
    return (
      <div>
        <Navigation scrollToElement={this.scrollToElement} />
        <MainHeader scrollToElement={this.scrollToElement} />
        <BuildYourOwn ref={(el) => {this.byo = el; }} />
        <Collections ref={(el) => {this.col = el; }} />
        <About ref={(el) => {this.story = el; }} />
      </div>
    )
  }
}

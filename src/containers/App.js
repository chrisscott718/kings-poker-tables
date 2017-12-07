import React, {Component} from 'react';

import Navigation from 'Navigation';
import MainHeader from 'MainHeader';

import './../styles/main.scss';

export default class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <MainHeader />
      </div>
    )
  }
}

import React, {Component} from 'react';

export default class TBSuccess extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
        <div className="quote-confirmation">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
          <h1>Your inquery has been submitted. We'll get back to you shortly.</h1>
          <h3 className="h--light">In the meantime feel free to learn more about us below.</h3>
          <span className="arrow-down"></span>
        </div>
    )
  }
}

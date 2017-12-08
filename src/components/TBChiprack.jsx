import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

import {OptionControls} from 'OptionControls';

export default class TBChiprack extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  render () {
    const {chipRack, handleInputChange} = this.props;
    return (
        <div className="option-selector">
          <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: false}}>
            <div className="option">
              <input
                type="radio"
                name="chipRack"
                id="groovedChiprack"
                value="groovedChiprack"
                checked={chipRack === 'groovedChiprack'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="groovedChiprack">Grooved </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="chipRack"
                id="flatChiprack"
                value="flatChiprack"
                checked={chipRack === 'flatChiprack'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="flatChiprack">Flat </label>
            </div>
          </ReactSwipe>
          <OptionControls next={this.next} prev={this.prev} />
        </div>
    )
  }
}

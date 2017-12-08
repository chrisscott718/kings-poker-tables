import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

import {OptionControls} from 'OptionControls';

export default class TBPedestal extends Component {
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

    const {pedestal, handleInputChange} = this.props;

    return (
        <div className="option-selector">
          <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: true}}>
            <div className="option">
              <input
                type="radio"
                name="pedestal"
                id="clawPedestal"
                value="clawPedestal"
                checked={pedestal === 'clawPedestal' }
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="clawPedestal">
                <img src="./images/buildyourown/pedestal-claw.png" />
                Claw
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="pedestal"
                id="reedPedestal"
                value="reedPedestal"
                checked={pedestal === 'reedPedestal' }
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="reedPedestal">
                <img src="./images/buildyourown/pedestal-claw.png" />
                Reed
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="pedestal"
                id="executivePedestal"
                value="executivePedestal"
                checked={pedestal === 'executivePedestal' }
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="executivePedestal">
                <img src="./images/buildyourown/pedestal-claw.png" />
                Executive
              </label>
            </div>
          </ReactSwipe>
          <OptionControls next={this.next} prev={this.prev} />
        </div>
    )
  }
}

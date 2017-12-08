import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

export default class TBArmrest extends Component {
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
    const {armRest, handleInputChange} = this.props;
    return (
        <div className="option-selector">
          <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: true}}>
            <div className="option">
              <input
                type="radio"
                name="armRest"
                id="vinylArmrest"
                value="vinyl"
                checked={armRest === 'vinyl'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="vinylArmrest">
                <img src="./images/buildyourown/armrest-vinyl.png" />
                Vinyl
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="armRest"
                id="leatherArmrest"
                value="leather"
                checked={armRest === 'leather'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="leatherArmrest">
                <img src="./images/buildyourown/armrest-leather.png" />
                Leather
              </label>
            </div>
          </ReactSwipe>
          <div className="option-controls">
            <button className="option--btn" type="button" onClick={this.prev}>Prev</button>
            <button className="option--btn" type="button" onClick={this.next}>Next</button>
          </div>
        </div>
    )
  }
}

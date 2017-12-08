import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

export default class TBShape extends Component {
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
    const {tableShape, handleInputChange} = this.props;
    return (
        <div className="option-selector">
          <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: true}}>
              <div className="option">
                <input
                  type="radio"
                  name="tableShape"
                  id="round"
                  value="round"
                  checked={tableShape === 'round'}
                  onChange={handleInputChange} />
                <label className="option-label" htmlFor="round">
                  <img src="./images/buildyourown/shape-round.png" />
                  Round
                </label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="tableShape"
                  id="oval"
                  value="oval"
                  checked={tableShape === 'oval'}
                  onChange={handleInputChange} />
                <label className="option-label" htmlFor="oval">
                  <img src="./images/buildyourown/shape-oval.png" />
                  Oval
                </label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="tableShape"
                  id="ellipse"
                  value="ellipse"
                  checked={tableShape === 'ellipse'}
                  onChange={handleInputChange} />
                <label className="option-label" htmlFor="ellipse">
                  <img src="./images/buildyourown/shape-ellipse.png" />
                  Ellipse
                </label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="tableShape"
                  id="octagon"
                  value="octagon"
                  checked={tableShape === 'octagon'}
                  onChange={handleInputChange} />
                <label className="option-label" htmlFor="octagon">
                  <img src="./images/buildyourown/shape-octogon.png" />
                  Octagon
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

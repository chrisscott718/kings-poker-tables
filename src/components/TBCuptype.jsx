import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

export default class TBCuptype extends Component {
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
    const {cupType, handleInputChange} = this.props;
    return (
        <div className="option-selector">
          <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: false}}>
            <div className="option">
              <input
                type="radio"
                name="cupType"
                id="steelCups"
                value="steelCups"
                checked={cupType === 'steelCups'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="steelCups">Stainless Steel</label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="cupType"
                id="brassCups"
                value="brassCups"
                checked={cupType === 'brassCups'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="brassCups">Brass</label>
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

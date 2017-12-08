import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

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
          <div className="option-controls">
            <button className="option--btn" type="button" onClick={this.prev}>Prev</button>
            <button className="option--btn" type="button" onClick={this.next}>Next</button>
          </div>
        </div>
    )
  }
}

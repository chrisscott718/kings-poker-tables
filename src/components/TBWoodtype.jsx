import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

export default class TBWoodtype extends Component {
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
    const {woodType, handleInputChange} = this.props;
    return (
        <div className="option-selector">
          <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: false}}>
            <div className="option">
              <input
                type="radio"
                name="woodType"
                id="wtMahogany"
                value="woodMahogany"
                checked={woodType === 'woodMahogany'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="wtMahogany">Mahogany </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="woodType"
                id="wtCherry"
                value="woodCherry"
                checked={woodType === 'woodCherry'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="wtCherry">Cherry </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="woodType"
                id="wtWalnut"
                value="woodWalnut"
                checked={woodType === 'woodWalnut'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="wtWalnut">Walnut </label>
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

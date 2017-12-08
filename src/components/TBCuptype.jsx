import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

export default class TBCuptype extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {cupType, handleInputChange} = this.props;
    return (
        <div className="option-selector">
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
        </div>
    )
  }
}

import React, {Component} from 'react';

export default class TBChiprack extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {chipRack, handleInputChange} = this.props;
    return (
        <div className="option-selector">
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
        </div>
    )
  }
}

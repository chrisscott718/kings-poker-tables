import React, {Component} from 'react';

export default class TBChiprack extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {chipRack, handleInputChange} = this.props;
    return (
        <div className="option-selector multi-selector">
          <div className="options-text">
            <h3>Chiprack Style</h3>
            <p className="help-text">More chiprack options available. Call for more info.</p>
          </div>
          <div className="option">
            <input
              type="radio"
              name="chipRack"
              id="groovedChiprack"
              value="groovedChiprack"
              checked={chipRack === 'groovedChiprack'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="groovedChiprack">
              <img src="./images/buildyourown/chiprack-grooved.svg" />
              Grooved
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="chipRack"
              id="flatChiprack"
              value="flatChiprack"
              checked={chipRack === 'flatChiprack'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="flatChiprack">
              <img src="./images/buildyourown/chiprack-solid.svg" />
              Flat
            </label>
          </div>
        </div>
    )
  }
}

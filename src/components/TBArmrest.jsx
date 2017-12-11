import React, {Component} from 'react';

export default class TBArmrest extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {armRest, handleInputChange} = this.props;
    return (
        <div className="option-selector multi-selector">
          <div className="options-text">
            <h3>Armrest Material</h3>
            <p className="help-text">More colors available. Call for details.</p>
          </div>
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
        </div>
    )
  }
}

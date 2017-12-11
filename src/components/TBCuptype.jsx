import React, {Component} from 'react';

export default class TBCuptype extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {cupType, handleInputChange} = this.props;
    return (
        <div className="option-selector multi-selector">
          <div className="options-text">
            <h3>Metal Accent Color</h3>
            <p className="help-text">Metal accents include cups and nail heads around table. Custom options available.</p>
          </div>
          <div className="option">
            <input
              type="radio"
              name="cupType"
              id="stainlessSteelMetal"
              value="stainlessSteelMetal"
              checked={cupType === 'stainlessSteelMetal'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="stainlessSteelMetal">
              <img src="./images/buildyourown/metaltype-silver.jpg" />
              Stainless Steel
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="cupType"
              id="brassMetal"
              value="brassMetal"
              checked={cupType === 'brassMetal'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="brassMetal">
              <img src="./images/buildyourown/metaltype-brass.jpg" />
              Brass
            </label>
          </div>
        </div>
    )
  }
}

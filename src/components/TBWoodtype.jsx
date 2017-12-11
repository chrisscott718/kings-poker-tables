import React, {Component} from 'react';

export default class TBWoodtype extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    const {woodType, handleInputChange} = this.props;
    return (
        <div className="option-selector multi-selector">
          <div className="options-text">
            <h3>Wood Type</h3>
            <p className="help-text">Wood types include custom staining options. Call for details.</p>
          </div>
          <div className="option">
            <input
              type="radio"
              name="woodType"
              id="wtMahogany"
              value="woodMahogany"
              checked={woodType === 'woodMahogany'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="wtMahogany">
              <img src="./images/buildyourown/woodtype-mahogany.jpg" />
              Mahogany
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="woodType"
              id="wtCherry"
              value="woodCherry"
              checked={woodType === 'woodCherry'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="wtCherry">
              <img src="./images/buildyourown/woodtype-cherry.jpg" />
              Cherry
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="woodType"
              id="wtWalnut"
              value="woodWalnut"
              checked={woodType === 'woodWalnut'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="wtWalnut">
              <img src="./images/buildyourown/woodtype-walnut.jpg" />
              Walnut
            </label>
          </div>
        </div>
    )
  }
}

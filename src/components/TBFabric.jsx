import React, {Component} from 'react';

export default class TBFabric extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {fabricColor, handleInputChange} = this.props;
    return (
        <div className="option-selector">
          <div className="option">
            <input
              type="radio"
              name="fabricColor"
              id="fcBlack"
              value="blackFabric"
              checked={fabricColor === 'blackFabric'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="fcBlack">
              <img src="./images/buildyourown/fabric-black.png" />
              Black
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="fabricColor"
              id="fcBurgundy"
              value="burgundyFabric"
              checked={fabricColor === 'burgundyFabric'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="fcBurgundy">
              <img src="./images/buildyourown/fabric-burgundy.png" />
              Burgundy
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="fabricColor"
              id="fcBrown"
              value="brownFabric"
              checked={fabricColor === 'brownFabric'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="fcBrown">
              <img src="./images/buildyourown/fabric-brown.png" />
              Brown
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="fabricColor"
              id="fcGreen"
              value="greenFabric"
              checked={fabricColor === 'greenFabric'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="fcGreen">
              <img src="./images/buildyourown/fabric-green.png" />
              Green
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="fabricColor"
              id="fcBlue"
              value="blueFabric"
              checked={fabricColor === 'blueFabric'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="fcBlue">
              <img src="./images/buildyourown/fabric-blue.png" />
              Blue
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="fabricColor"
              id="fcCustom"
              value="customFabric"
              checked={fabricColor === 'customFabric'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="fcCustom">
              <img src="./images/buildyourown/fabric-custom.png" />
              Custom
            </label>
          </div>
        </div>
    )
  }
}

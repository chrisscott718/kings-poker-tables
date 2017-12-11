import React, {Component} from 'react';
import Slider from 'react-slick';

export default class TBPedestal extends Component {
  constructor(props) {
    super(props);
  }

  render () {

    const {pedestal, handleInputChange, settings} = this.props;

    return (
        <div className="option-selector">
          <h3>Pedestal Style</h3>
          <p className="help-text">Custom pedestal options available. Call for details.</p>
          <Slider {...settings}>
            <div className="option">
              <input
                type="radio"
                name="pedestal"
                id="clawPedestal"
                value="clawPedestal"
                checked={pedestal === 'clawPedestal' }
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="clawPedestal">
                <img src="./images/buildyourown/pedestal-claw.svg" />
                Claw
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="pedestal"
                id="reedPedestal"
                value="reedPedestal"
                checked={pedestal === 'reedPedestal' }
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="reedPedestal">
                <img src="./images/buildyourown/pedestal-reed.svg" />
                Reed
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="pedestal"
                id="executivePedestal"
                value="executivePedestal"
                checked={pedestal === 'executivePedestal' }
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="executivePedestal">
                <img src="./images/buildyourown/pedestal-executive.svg" />
                Executive
              </label>
            </div>
          </Slider>
        </div>
    )
  }
}

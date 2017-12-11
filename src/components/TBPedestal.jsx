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
                <img src="./images/buildyourown/pedestal-claw.png" />
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
                <img src="./images/buildyourown/pedestal-claw.png" />
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
                <img src="./images/buildyourown/pedestal-claw.png" />
                Executive
              </label>
            </div>
          </Slider>
        </div>
    )
  }
}

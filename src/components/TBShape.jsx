import React, {Component} from 'react';
import Slider from 'react-slick';

export default class TBShape extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {tableShape, handleInputChange, settings} = this.props;
    return (
        <div className="option-selector">
          <Slider {...settings}>
            <div className="option">
              <input
                type="radio"
                name="tableShape"
                id="round"
                value="round"
                checked={tableShape === 'round'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="round">
                <img src="./images/buildyourown/shape-round.svg" />
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="tableShape"
                id="oval"
                value="oval"
                checked={tableShape === 'oval'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="oval">
                <img src="./images/buildyourown/shape-oval.svg" />
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="tableShape"
                id="ellipse"
                value="ellipse"
                checked={tableShape === 'ellipse'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="ellipse">
                <img src="./images/buildyourown/shape-ellipse.svg" />
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="tableShape"
                id="octagon"
                value="octagon"
                checked={tableShape === 'octagon'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="octagon">
                <img src="./images/buildyourown/shape-octogon.svg" />
              </label>
            </div>
          </Slider>
        </div>
    )
  }
}

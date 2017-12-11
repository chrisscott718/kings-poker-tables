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
          <h3>Table Shape</h3>
          <p className="help-text">Choose a table shape. Custom shapes and dimentions also available.</p>
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
                Round
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
                Oval
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
                Ellipse
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
                Octagon
              </label>
            </div>
          </Slider>
        </div>
    )
  }
}

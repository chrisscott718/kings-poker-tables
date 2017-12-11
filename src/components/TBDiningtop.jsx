import React, {Component} from 'react';

export default class TBDiningtop extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {diningTop, handleInputChange} = this.props;

    return (
        <div className="option-selector multi-selector">
          <div className="options-text">
            <h3>Add a dining top?</h3>
            <p className="help-text">Dining top is an easily removable top to convert your poker table into a dining table.</p>
          </div>
          <div className="option">
            <input
              type="radio"
              name="diningTop"
              id="yesDiningtop"
              value="ADD Dingingtop"
              checked={diningTop === 'ADD Dingingtop'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="yesDiningtop">
              <img src="./images/buildyourown/dining-yes.svg" />
              Yes
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="diningTop"
              id="noDiningtop"
              value="NO Dingingtop"
              checked={diningTop === 'NO Dingingtop'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="noDiningtop">
              <img src="./images/buildyourown/dining-no.svg" />
              No
            </label>
          </div>
        </div>
    )
  }
}

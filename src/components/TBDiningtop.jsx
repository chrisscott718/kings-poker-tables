import React, {Component} from 'react';

export default class TBDiningtop extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {diningTop, handleInputChange} = this.props;

    return (
        <div className="option-selector">
          <div className="option">
            <input
              type="radio"
              name="diningTop"
              id="yesDiningtop"
              value="ADD Dingingtop"
              checked={diningTop === 'ADD Dingingtop'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="yesDiningtop">Yes</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="diningTop"
              id="noDiningtop"
              value="NO Dingingtop"
              checked={diningTop === 'NO Dingingtop'}
              onChange={handleInputChange} />
            <label className="option-label" htmlFor="noDiningtop">No</label>
          </div>
        </div>
    )
  }
}

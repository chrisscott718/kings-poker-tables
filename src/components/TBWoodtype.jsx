import React, {Component} from 'react';

export default class TBWoodtype extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    const {woodType, handleInputChange} = this.props;
    return (
        <div className="option-selector">
            <div className="option">
              <input
                type="radio"
                name="woodType"
                id="wtMahogany"
                value="woodMahogany"
                checked={woodType === 'woodMahogany'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="wtMahogany">Mahogany </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="woodType"
                id="wtCherry"
                value="woodCherry"
                checked={woodType === 'woodCherry'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="wtCherry">Cherry </label>
            </div>
            <div className="option">
              <input
                type="radio"
                name="woodType"
                id="wtWalnut"
                value="woodWalnut"
                checked={woodType === 'woodWalnut'}
                onChange={handleInputChange} />
              <label className="option-label" htmlFor="wtWalnut">Walnut </label>
            </div>
        </div>
    )
  }
}

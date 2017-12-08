import React, {Component} from 'react';

export default class TBForm extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {fullName, email, comments, phone, handleInputChange} = this.props;

    return (
        <div className="option-selector">
          <div>
            <input type="text" value={fullName} name="fullName" onChange={handleInputChange} />
            <input type="email" value={email} name="email" onChange={handleInputChange} />
            <input type="tel" value={phone} name="phone" onChange={handleInputChange} />
            <textarea type="text" value={comments} name="comments" onChange={handleInputChange}></textarea>
          </div>
        </div>
    )
  }
}

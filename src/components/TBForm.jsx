import React, {Component} from 'react';

export default class TBForm extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {fullName, email, comments, phone, handleInputChange} = this.props;

    return (
        <div className="option-selector">
          <h3>Let us know how to contact you.</h3>
          <p className="help-text">We never share your info.</p>
          <div className="">
            <label>Your Name</label>
            <input type="text" value={fullName} name="fullName" onChange={handleInputChange} placeholder="Full Name" />
            <label>Email Address</label>
            <input type="email" value={email} name="email" onChange={handleInputChange} placeholder="example@example.com" />
            <label>Phone Number</label>
            <input type="tel" value={phone} name="phone" onChange={handleInputChange} />
            <label>Comments</label>
            <textarea type="text" value={comments} name="comments" onChange={handleInputChange} placeholder="Anything else we should know?"></textarea>
          </div>
        </div>
    )
  }
}

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
          <div className="input-form">
            <div className="form-group">
              <label>Your Names<span>*</span></label>
              <input autoFocus type="text" value={fullName} required name="fullName" onChange={handleInputChange} placeholder="Full Name" />
            </div>
            <div className="form-group">
              <label>Email Address<span>*</span></label>
              <input type="email" value={email} name="email" required onChange={handleInputChange} placeholder="example@example.com" />
            </div>
            <div className="form-group">
              <label>Phone Number<span>*</span></label>
              <input type="tel" value={phone} name="phone" required onChange={handleInputChange} placeholder="(800) 897-1189" />
            </div>
            <div className="form-group">
              <label>Comments</label>
              <textarea type="text" value={comments} name="comments" onChange={handleInputChange} placeholder="Anything else we should know?"></textarea>
            </div>
          </div>
        </div>
    )
  }
}

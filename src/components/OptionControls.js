import React, {Component} from 'react';

export const OptionControls = ({prev, next}) => {
  return (
    <div className="option-controls">
      <button className="option--btn" type="button" onClick={prev}>
        <span className="lnr lnr-chevron-left-circle"></span>
      </button>
      <button className="option--btn" type="button" onClick={next}>
        <span className="lnr lnr-chevron-right-circle"></span>
      </button>
    </div>
  )
};

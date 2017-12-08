import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

import './../styles/components/tableBuilder.scss';

export default class TableBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableShape: '',
      pedestal: '',
      armRest: '',
      fabricColor: '',
      chipRack: '',
      tableWood: '',
      cups: '',
      diningTop: false,
      currentStep: 1
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  render () {
    return (
      <section id="tableBuilder">
        <div id="stepIndicator">
          steps for the build your own section go here
        </div>
        <div id="optionSelector">
          <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: false}}>
              <div>1. options selectors go here</div>
              <div>2. options selectors go here</div>
              <div>3. options selectors go here</div>
              <div>4. options selectors go here</div>
              <div>5. options selectors go here</div>
              <div>6. options selectors go here</div>
              <div>7. options selectors go here</div>
              <div>8. options selectors go here</div>
              <div>9. options selectors go here</div>
          </ReactSwipe>
        </div>
        <div id="mainControls">
          <button type="button" onClick={this.prev}>Prev</button>
          <button type="button" onClick={this.next}>Next</button>
        </div>
      </section>
    )
  }
}

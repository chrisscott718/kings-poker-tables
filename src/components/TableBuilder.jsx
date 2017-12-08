import React, {Component} from 'react';

import TBShape from 'TBShape';
import TBPedestal from 'TBPedestal';
import TBArmrest from 'TBArmrest';
import TBFabric from 'TBFabric';
import TBChiprack from 'TBChiprack';
import TBWoodtype from 'TBWoodtype';
import TBCuptype from 'TBCuptype';
import TBForm from 'TBForm';
import TBDiningtop from 'TBDiningtop';
import TBSuccess from 'TBSuccess';

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
      woodType: '',
      cupType: '',
      diningTop: '',
      fullName: '',
      email: '',
      comments: '',
      phone: '',
      step: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderStep = this.renderStep.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  next() {
    if(this.state.step !== 10)
      this.setState({step: this.state.step + 1});
  }

  prev() {
    if(this.state.step !== 1)
      this.setState({step: this.state.step - 1});
  }

  renderStep() {
    switch (this.state.step) {
      case 1:
        return <TBShape
                  tableShape={this.state.tableShape}
                  handleInputChange={this.handleInputChange}
                />
        break;
      case 2:
        return <TBPedestal
                  pedestal={this.state.pedestal}
                  handleInputChange={this.handleInputChange}
                />
        break;
      case 3:
        return <TBArmrest
                  armRest={this.state.armRest}
                  handleInputChange={this.handleInputChange}
                />
        break;
      case 4:
        return <TBFabric
                  fabricColor={this.state.fabricColor}
                  handleInputChange={this.handleInputChange}
                />
        break;
      case 5:
        return <TBChiprack
                  chipRack={this.state.chipRack}
                  handleInputChange={this.handleInputChange}
                />
        break;
      case 6:
        return <TBWoodtype
                  woodType={this.state.woodType}
                  handleInputChange={this.handleInputChange}
                />
        break;
      case 7:
        return <TBCuptype
                  cupType={this.state.cupType}
                  handleInputChange={this.handleInputChange}
                />
        break;
      case 8:
        return <TBDiningtop
                  diningTop={this.state.diningTop}
                  handleInputChange={this.handleInputChange}
                />
        break;
      case 9:
        return <TBForm
                  {...this.state}
                  handleInputChange={this.handleInputChange}
                />
        break;
      case 10:
        return <TBSuccess />
        break;
      default:
    }
  }


  render () {
    return (
      <section id="tableBuilder">
        <div id="stepIndicator">
          steps for the build your own section go here
        </div>
        <form onSubmit={() => {console.log('form submitted')}}>
          <div id="currentFieldset">
              {this.renderStep()}
          </div>
          <div id="mainControls">
            <button type="button" disabled={this.state.step === 1} onClick={this.prev}>Prev</button>
            <button type="button" onClick={this.next}>Next</button>
            <input type="submit" onClick={() => {console.log('form submit button clicked')}} value="Request Quote" />
          </div>
        </form>
      </section>
    )
  }
}

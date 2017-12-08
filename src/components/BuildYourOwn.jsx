import React, {Component} from 'react';

import TableBuilder from 'TableBuilder';

import './../styles/components/buildYourOwn.scss';

export default class BuildYourOwn extends Component {
  render () {
    return (
      <section id="build-your-own-table">
        <div className="container">
          <div className="main-section">
            <div className="section-heading">
              <h1 className="display-1">Build Your Own</h1>
              <h2 className="h--light text-secondary">Customize your table below and we'll send you a quote</h2>
            </div>
            <TableBuilder />
          </div>
        </div>
      </section>
    )
  }
}

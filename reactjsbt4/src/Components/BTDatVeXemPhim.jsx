import React, { Component } from 'react'
import ConfirmSeat from './ConfirmSeat';
import FillInformation from './FillInformation';
import Footer from './Footer';
import SelectedSeat from './SelectedSeat';

import "./style.css";
import Title from './Title';

export default class BTDatVeXemPhim extends Component {
  render() {
    return (
<div>
  <Title />
  <div className="container">
    <div className="w3ls-reg">
      {/* input fields */}
      <FillInformation />
      {/* //input fields */}
      {/* seat availabilty list */}
      <SelectedSeat />
      {/* //seat layout */}
      {/* details after booking displayed here */}
      <ConfirmSeat />
      {/* //details after booking displayed here */}
    </div>
  </div>
  <Footer />
</div>

    )
  }
}

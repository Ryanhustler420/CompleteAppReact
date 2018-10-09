import React, { Component } from 'react'

import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';

class CheckOut extends Component {

    state = {
        ingredients:{
            salad : 1,
            cheese:1,
            meat: 1,
            bacon: 1
        }
    }

  render() {
    return (
        <CheckOutSummary ingredients={this.state.ingredients} />
    )
  }
}

export default CheckOut;
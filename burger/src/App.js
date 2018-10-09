import React, { Component } from 'react';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';
import CheckOut from './containers/CheckOut/CheckOut';

class App extends Component {

  // state = {
  //   show: true
  // }

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({show:false});
  //   },5000);
  // }


  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <CheckOut />
        </Layout>
      </div>
    );
  }
}

export default App;

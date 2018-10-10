import React, { Component } from 'react';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';
import CheckOut from './containers/CheckOut/CheckOut';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

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
          <Switch>
            <Route path="/checkout" exact component={CheckOut}/>
            <Route path="/orders" exact component={Orders}/>
            <Route path="/" exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

/**
 * Created by leiyouwho on 6/14/16.
 */

import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import PureComponent from './utils/decorators/PureComponent';
import OperationPanel from './components/OperationPanel';



@PureComponent
class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={OperationPanel} />
      </Router>
    );
  }
}

export default Routes;

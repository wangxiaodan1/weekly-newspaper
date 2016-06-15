/**
 * Created by leiyouwho on 6/14/16.
 */

import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { FlatButton } from 'material-ui';
var Babel = require('babel-standalone');

class StoryBoard extends React.Component {
  static propType = {
    components: PropTypes.instanceOf(Immutable.List),
  }
  _getComponent(componentName, props) {
    switch (componentName) {
      case 'Title':
        return <p {...props} />;
      default:
        return <div />;
    }
  }
  _renderComponents(components) {
    const views = [];
    components.forEach((component, index) => {
      const Com = this._getComponent(component.get('componentName'), component.get('props'));
      views.push(Com);
    });
    return views;
  }
  render() {
    return (
      <div
        style={{
          flex: 2,
        }}
      >
        {this._renderComponents(this.props.components)}
      </div>
    );
  }
}

export default StoryBoard;
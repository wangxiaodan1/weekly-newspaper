/**
 * Created by leiyouwho on 6/16/16.
 */

import React, { PropTypes } from 'react';

const styles = {
  border: '1px dashed gray',
};

class ComponentCell extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    selectedComponentIndex: PropTypes.number,
    componentIndex: PropTypes.number,
  };
  _getStyles() {
    if (this.props.selectedComponentIndex === this.props.componentIndex) {
      return {
        border: '1px solid blue',
      };
    }
    return {
      border: '1px dashed gray',
    };
  }
  render() {
    return (
      <div style={this._getStyles()} {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default ComponentCell;

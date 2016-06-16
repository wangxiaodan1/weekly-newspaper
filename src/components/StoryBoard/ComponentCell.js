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
  };
  render() {
    return (
      <div style={{ ...styles }}>
        {this.props.children}
      </div>
    );
  }
}

export default ComponentCell;

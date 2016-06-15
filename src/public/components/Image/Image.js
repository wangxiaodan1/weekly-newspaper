/**
 * Created by leiyouwho on 6/15/16.
 */

import React, { PropTypes } from 'react';
export default class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    height: PropTypes.string,
  };
  render() {
    return (
      <img {...this.props} />
    );
  }
}

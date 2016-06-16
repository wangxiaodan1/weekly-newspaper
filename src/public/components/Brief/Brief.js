/**
 * Created by leiyouwho on 6/15/16.
 */

import React, { PropTypes } from 'react';

const styles = {
  lineHeight: 1.5,
  fontSize: '1.2rem',
  padding: '10px 10px',
  fontFamily: 'proxima-nova, Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif',
};

export default class Brief extends React.Component {
  static propTypes = {
    brief: PropTypes.string,
  };
  render() {
    return (
      <p style={{ ...styles }}>{this.props.brief}</p>
    );
  }
}

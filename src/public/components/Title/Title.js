/**
 * Created by leiyouwho on 6/15/16.
 */


import React, { PropTypes } from 'react';

const styles = {
  color: '#237dac',
  padding: '10px 10px',
  margin: '0px 0px',
  fontSize: '1.5rem',
};

export default class Title extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    return (
      <p style={{ ...styles }}>{this.props.title}</p>
    );
  }
}

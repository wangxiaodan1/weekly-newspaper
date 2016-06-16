/**
 * Created by leiyouwho on 6/15/16.
 */


import React, { PropTypes } from 'react';

export default class Title extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    return (
      <p>{this.props.title}</p>
    );
  }
}

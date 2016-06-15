
/**
 * Created by leiyouwho on 6/15/16.
 */

import React, { PropTypes } from 'react';

export default class Link extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    target: PropTypes.string,
    content: PropTypes.string,
  };
  render() {
    return (
      <a src={this.props.src} target={this.props.target}>{this.props.content}</a>
    );
  }
}

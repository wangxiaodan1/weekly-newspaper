/**
 * Created by leiyouwho on 6/15/16.
 */

import React, { PropTypes } from 'react';
export default class Brief extends React.Component {
  static propTyps = {
    brief: PropTypes.string,
  };
  render() {
    return (
      <textarea value={this.porps.brief} />
    );
  }
}

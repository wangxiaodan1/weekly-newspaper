
/**
 * Created by leiyouwho on 6/15/16.
 */

import React, { PropTypes } from 'react';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

const styles = {
  padding: '10px 10px',
  width: '100%',
  color: '#414a51',
  display: 'flex',
  alignItems: 'center',
};

export default class Link extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    target: PropTypes.string,
    content: PropTypes.string,
  };
  render() {
    return (
      <a
        style={{
          textDecoration: 'none',
        }}
        href={this.props.src}
        target={this.props.target}
      >
        <div style={{ ...styles }} >{this.props.content} <ArrowForward style={{marginLeft: '10px'}}/> </div>
      </a>
    );
  }
}

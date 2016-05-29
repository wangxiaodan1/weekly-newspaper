/**
 * Created by leiyouwho on 5/29/16.
 */

import React, { PropTypes } from 'react';

class Text extends React.Component {
  static propTypes = {
    /**
     * Used to truncate the text with an elipsis after computing the text
     * layout, including line wrapping, such that the total number of lines
     * does not exceed this number.
     */
    numberOfLines: React.PropTypes.number,
    /**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
    onLayout: React.PropTypes.func,
    /**
     * This function is called on press.
     */
    onPress: React.PropTypes.func,
    /**
     * When true, no visual change is made when text is pressed down. By
     * default, a gray oval highlights the text on press down.
     * @platform ios
     */
    suppressHighlighting: React.PropTypes.bool,
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID: React.PropTypes.string,
    /**
     * Specifies should fonts scale to respect Text Size accessibility setting on iOS.
     */
    allowFontScaling: React.PropTypes.bool,
  };
  render() {
    let props = { ... this.props };
    if (props.accessible !== false) {
      props.accesssible = true;
    }
    return (
      <span
        {...props}
      />
    );
  }
}

export default Text;

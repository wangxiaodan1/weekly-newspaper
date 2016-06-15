/**
 * Created by leiyouwho on 6/14/16.
 */

import React from 'react';
import PureComponent from '../../utils/decorators/PureComponent';
import ComponentsList from '../ComponentsList';
import StoryBoard from '../StoryBoard';
import Inspect from '../Inspect';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  display: 'flex',
  flexDirection: 'row',
};

@PureComponent
class OperationPanel extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={styles}>
          <ComponentsList />
          <StoryBoard />
          <Inspect />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default OperationPanel;

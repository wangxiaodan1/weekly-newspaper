/**
 * Created by leiyouwho on 6/14/16.
 */

import React, { PropTypes } from 'react';
import { List, ListItem, Subheader, Divider } from 'material-ui';
import * as StoryBoardAction from '../../actions/StoryBoardAction';

import PureComponent from '../../utils/decorators/PureComponent';

@PureComponent
class ComponentsList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  _addComponent(componentName) {
    console.log(componentName);
    this.props.dispatch(StoryBoardAction.addComponent('Title', {children: 'hello'}));
  }
  render() {
    return (
      <List style={{ flex: 1 }}>
        <Subheader>组件</Subheader>
        <ListItem
          primaryText="图片"
        />
        <Divider />
        <ListItem
          primaryText="标题"
          onTouchTap={() => {
            this._addComponent('标题');
          }}
        />
        <Divider />
        <ListItem
          primaryText="简介"
        />
        <Divider />
        <ListItem
          primaryText="更多"
        />
        <Divider />
      </List>
    );
  }
}

export default ComponentsList;

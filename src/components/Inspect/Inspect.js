/**
 * Created by leiyouwho on 6/14/16.
 */

import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { List, ListItem, Subheader, TextField } from 'material-ui';

class Inspect extends React.Component {
  static propTypes = {
    components: PropTypes.instanceOf(Immutable.List),
    selectedComponentIndex: PropTypes.number,
  };
  renderProps() {
    if (this.props.selectedComponentIndex !== undefined) {
      const views = [];
      const componentProps = this.props.components.get(this.props.selectedComponentIndex);
      if (componentProps !== undefined) {
        console.log(componentProps.get('props'));
        Object.keys(componentProps.get('props')).map((key, index) => {
          console.warn(key, index);
          views.push(
            <ListItem key={index}>
              <TextField
                style={{ width: '100%' }}
                floatingLabelText={key}
                value={componentProps.get('props')[key]}
              />
            </ListItem>
          );
        });
        return views;
      }
    }
  }
  render() {
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <List>
          <Subheader>检查器</Subheader>
          {this.renderProps()}
        </List>
      </div>
    );
  }
}

export default Inspect;

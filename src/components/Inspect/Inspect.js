/**
 * Created by leiyouwho on 6/14/16.
 */

import React from 'react';
import { List, ListItem, Subheader } from 'material-ui';

class Inspect extends React.Component {
  render() {
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <List>
          <Subheader>检查器</Subheader>
        </List>
      </div>
    );
  }
}

export default Inspect;

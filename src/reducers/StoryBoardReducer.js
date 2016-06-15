/**
 * Created by leiyouwho on 6/15/16.
 */

import Immutable from 'immutable';
import * as StroyBoardAction from '../actions/StoryBoardAction';

const defaultState = Immutable.Map({
  components: Immutable.List([]),
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case StroyBoardAction.ADD_COMPONENT:
      let components = state.get('components');
      components = components.push(Immutable.Map({
        componentName: action.componentName,
        props: action.props,
      }));
      return state.set('components', components);
    default:
      return state;
  }
};

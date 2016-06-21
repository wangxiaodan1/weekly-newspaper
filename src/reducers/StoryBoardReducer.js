/**
 * Created by leiyouwho on 6/15/16.
 */

import Immutable from 'immutable';
import * as StoryBoardAction from '../actions/StoryBoardAction';

const defaultState = Immutable.Map({
  components: Immutable.List([]),
  selectedComponentIndex: null,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case StoryBoardAction.ADD_COMPONENT:
      let components = state.get('components');
      components = components.push(Immutable.Map({
        componentName: action.componentName,
        props: action.props,
      }));
      return state.set('components', components);
    case StoryBoardAction.SELECT_COMPONENT:
      return state.set('selectedComponentIndex', action.index);
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import StoryBoardReducer from './StoryBoardReducer';

// 引入各reducers

// 状态入口
const appReducers = combineReducers({
  routing: routeReducer,
  StoryBoardReducer,
});

export default appReducers;

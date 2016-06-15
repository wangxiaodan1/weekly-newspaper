/**
 * Created by leiyouwho on 6/14/16.
 */

import StoryBoard from './StoryBoard';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  components: state.StoryBoardReducer.get('components'),
});

export default connect(mapStateToProps)(StoryBoard);

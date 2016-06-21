/**
 * Created by leiyouwho on 6/14/16.
 */

import Inspect from './Inspect';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  components: state.StoryBoardReducer.get('components'),
  selectedComponentIndex: state.StoryBoardReducer.get('selectedComponentIndex'),
});

export default connect(mapStateToProps)(Inspect);

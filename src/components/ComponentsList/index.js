/**
 * Created by leiyouwho on 6/14/16.
 */

import ComponentsList from './ComponentsList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(ComponentsList);

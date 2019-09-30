import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Link from '../common/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispach, ownProps) => ({
  onClick: () => dispach(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
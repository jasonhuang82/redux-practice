import { connect } from 'react-redux';
import { setVisibilityFilter } from '~/actions';
import Link from '~/components/Link';

// 第二個參數是給 FliterLink 與store 綁定的組件
// 被使用時設定的props <FliterLink filter="xxx" />
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
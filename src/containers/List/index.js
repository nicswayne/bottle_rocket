import { connect } from 'react-redux';

import { getList } from '../../actions/restaurants';

import List from '../../components/List';

const mapStateToProps = ({ data, hasError, isLoading }) => ({
    data,
    hasError,
    isLoading,
});

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

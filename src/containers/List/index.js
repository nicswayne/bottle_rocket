import { connect } from 'react-redux';

import { getList } from '../../actions/restaurants';

import List from '../../components/List';

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getList()),
});

export default connect(null, mapDispatchToProps)(List);

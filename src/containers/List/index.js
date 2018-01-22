// @flow

import { connect } from 'react-redux';

import { getList } from '../../actions/restaurants';

import List from '../../components/List';

type State = {
    data: Array<Details>,
    hasError: string,
    isLoading: boolean,
};

const mapStateToProps = ({ data, hasError, isLoading }: State): State => ({
    data,
    hasError,
    isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): { getList: () => void } => ({
    getList: () => dispatch(getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

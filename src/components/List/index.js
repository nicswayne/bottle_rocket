import React from 'react';
import { compose, lifecycle } from 'recompose';

const List = () => <div>List page</div>;

const enhance = compose(
    lifecycle({
        componentDidMount() {
            this.props.getList();
        },
    })
);

export default enhance(List);

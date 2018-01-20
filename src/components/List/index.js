import React from 'react';
import { compose, lifecycle } from 'recompose';

import internets from '../../resources/icons/tab_internets@2x.png';
import lunch from '../../resources/icons/tab_lunch@2x.png';

const List = () => (
    <div className="">
        <div>Header</div>
        <div>
            Body
            <div>Item</div>
        </div>
        <div className="footer">
            <button type="button" className="button" onClick={() => {}}>
                <img src={lunch} alt="" />
                <div>lunch</div>
            </button>
            <button type="button" className="button" onClick={() => {}}>
                <img src={internets} alt="" />
                <div>internets</div>
            </button>
        </div>
    </div>
);

const enhance = compose(
    lifecycle({
        componentDidMount() {
            this.props.getList();
        },
    })
);

export default enhance(List);

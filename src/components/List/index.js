import React from 'react';
import { compose, lifecycle } from 'recompose';

import gradient from '../../resources/backgrounds/cellGradientBackground@2x.png';
import internets from '../../resources/icons/tab_internets@2x.png';
import lunch from '../../resources/icons/tab_lunch@2x.png';

const List = () => (
    <div>
        <div>Header</div>
        <div className="list-body">
            <div className="item">
                <img
                    className="background-img"
                    src="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png"
                    alt=""
                />
                <img className="top-img" src={gradient} alt="" />
                <div>
                    <div className="name">
                        <strong>Restaurant Name</strong>
                        <div className="category">Category Type</div>
                    </div>
                </div>
            </div>
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

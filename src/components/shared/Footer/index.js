// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import internets from '../../../resources/icons/tab_internets@2x.png';
import lunch from '../../../resources/icons/tab_lunch@2x.png';

const Footer = () => (
    <div className="footer">
        <Link className="button" to="/">
            <img src={lunch} alt="" />
            <div className="text">lunch</div>
        </Link>
        <Link className="button" to="/web">
            <img src={internets} alt="" />
            <div className="text">internets</div>
        </Link>
    </div>
);

export default Footer;

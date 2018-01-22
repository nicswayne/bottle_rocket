import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../shared/Footer';

import back from '../../resources/icons/ic_webBack@2x.png';
import forward from '../../resources/icons/ic_webForward@2x.png';
import refresh from '../../resources/icons/ic_webRefresh@2x.png';

const Web = () => (
    <div>
        <div className="header">
            <div className="nav">
                <Link className="button" to="/">
                    <img src={back} alt="" />
                </Link>
                <div
                    className="button"
                    onClick={() => window.location.reload(true)}
                >
                    <img src={refresh} alt="" />
                </div>
                <div className="button">
                    <img src={forward} alt="" />
                </div>
            </div>
        </div>
        <div className="web-body">
            <iframe
                src="https://www.bottlerocketstudios.com/contact"
                title="contact"
            />
        </div>
        <Footer />
    </div>
);

export default Web;

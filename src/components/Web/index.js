// @flow

import React from 'react';

import Footer from '../shared/Footer';

import forward from '../../resources/icons/ic_webForward@2x.png';
import back from '../../resources/icons/ic_webBack@2x.png';
import refresh from '../../resources/icons/ic_webRefresh@2x.png';

const Web = () => (
    <div>
        <div className="header">
            <div className="nav">
                <div className="button-group">
                    <button
                        className="button"
                        onClick={() => window.history.back()}
                    >
                        <img src={back} alt="" />
                    </button>
                    <button
                        className="button"
                        onClick={() => window.location.reload(true)}
                    >
                        <img src={refresh} alt="" />
                    </button>
                    <button
                        className="button"
                        onClick={() => window.history.forward()}
                    >
                        <img src={forward} alt="" />
                    </button>
                </div>
            </div>
        </div>
        <div className="web-body">
            <iframe
                src="https://www.bottlerocketstudios.com/contact"
                title="contact"
                sandbox="allow-scripts allow-top-navigation allow-forms allow-same-origin"
            />
        </div>
        <Footer />
    </div>
);

export default Web;

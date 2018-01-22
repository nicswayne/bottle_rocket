// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from '../../containers/List';
import Web from '../Web';

import '../../styles/App.css';

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/web" component={Web} />
                <Route path="/" component={List} />
            </Switch>
        </div>
    );
};

export default App;

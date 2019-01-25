import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';

const Main = (props) => (
    <main>
        <switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/roster'} component={Roster}/>
            <Route path={'/schedule'} component={Schedule}/>
        </switch>
    </main>
)

export default Main;
import React from 'react';

import PlayerAPI from './PlayerApi'

const FullRoster = (props) => {
    return (
        <div>
            <ul>
                {
                    PlayerAPI.all().map(p => (
                        <li key={p.number}>
                            <Link to={`/roster/${p.number}`}>{p.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

const Schedule = () => {
    return (
        <div>
            <ul>
                <li>6/5 @ Evergreens</li>
                <li>6/8 vs Kickers</li>
                <li>6/14 @ United</li>
            </ul>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Tornadoes Website!</h1>
        </div>
    )
};
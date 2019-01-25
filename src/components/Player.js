import React from 'react'
import PlayerApi from './PlayerApi';

const Player = (props) => {
    const player = PlayerApi.get(
        parseInt(props.match.params.number, 10)
    );

    if (!player) {
        return <div>Sorry, but the player was not found.</div>
    }

    return (
        <div>
            <h1>{player.name}(#{player.number})</h1>
        </div>
    )
};


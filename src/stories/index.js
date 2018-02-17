import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import Drawing from '../components/Drawing';
import Artwork from '../components/Artwork';
import PlayerPortrait from '../components/PlayerPortrait';
import GameRound from '../components/GameRound';
import GameSearch from '../components/GameSearch';


import data from '../../public/data'
import game from '../../public/game'
import games from '../../public/games'

storiesOf('Welcome', module)
    .add('to Storybook', () => (
        <Welcome showApp={linkTo('Button')}/>
    ));

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    ));

storiesOf('Drawing', module)
    .add('with one line', () => (
        <Drawing lines={data.drawings[0].lines}/>
    ));

storiesOf('Artwork', module)
    .add('artwork', () => (
        <Artwork lines={data.drawings[0].lines} player={data.drawings[0].player} lies={data.drawings[0].lies}
                 title={data.drawings[0].title}/>
    ));

storiesOf('PlayerPortrait', module)
    .add('player portrait', () => (
        <PlayerPortrait lines={data.playerPortraits[0].lines} player={data.playerPortraits[0].player}/>
    ));

storiesOf('GameRound', module)
    .add('game round', () => (
        <GameRound drawings={data.drawings} playerPortraits={data.playerPortraits} />
    ));

storiesOf('GameSearch', module)
    .add('game search', () => (
        <GameSearch games={games} />
    ));

import React from 'react';
import Drawing from './Drawing';
import ColorTools from './ColorTools';

import './PlayerPortrait.css'

const PlayerPortrait = ({ lines, player, onClick }) => (
    <div className="player-portrait">
      <Drawing lines={lines} scaleFactor="0.5"/>
      <div className="metadata" style={{backgroundColor: ColorTools.getColorsFromLines(lines)[0], color: ColorTools.getTextColorForBackground((ColorTools.getColorsFromLines(lines)[0]).substr(1))}}><strong>{player.name.toLowerCase()}</strong></div>
    </div>
);

PlayerPortrait.propTypes = {
  lines: React.PropTypes.array.isRequired,
  player: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
};

export default PlayerPortrait;

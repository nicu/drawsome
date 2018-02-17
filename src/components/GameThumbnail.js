import React from 'react';
import { Link } from 'react-router-dom';
import './GameThumbnail.css';

const getMatchingKeywords = (query, keywords) =>
  keywords.filter(keyword => keyword.includes(query));

const getMatchingKeywordsElement = (query, keywords) => {
  const matchingKeywords = getMatchingKeywords(query, keywords);
  if (matchingKeywords.length === 0) {
    return null;
  }
  return (
    <div className="matching-keywords">
      Matching titles/lies:
      {getMatchingKeywords(query, keywords).map((keyword, i) => (
        <span key={keyword + i} className="highlight">
          {keyword}{' '}
        </span>
      ))}
    </div>
  );
};

const GameThumbnail = ({ date, id, keywords, players, query, filename }) => (
  <div className="game-thumbnail">
    <header>{players.length} player game</header>
    <div className="players">
      <span className="title">Players</span>
      {players.map(player => (
        <span
          key={player}
          className={player.includes(query) ? 'highlight' : 'player'}
        >
          {player}{' '}
        </span>
      ))}
    </div>
    {getMatchingKeywordsElement(query, keywords)}
    <div className="actions">
      <Link to={'/games/' + filename}>View</Link>
    </div>
  </div>
);

export default GameThumbnail;

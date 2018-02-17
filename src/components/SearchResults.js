import React from 'react';
import GameThumbnail from './GameThumbnail';
import './SearchResults.css';

const filterGames = (query, games) =>
  games.filter(
    game =>
      game.players.some(player => player.includes(query)) ||
      game.keywords.some(a => a.includes(query))
  );

const groupGames = games => {
  const gamesByDate = games.reduce((prev, curr) => {
    if (!prev[curr.date]) {
      prev[curr.date] = [];
    }
    prev[curr.date].push(curr);
    return prev;
  }, {});

  return Object.keys(gamesByDate).map(key => {
    return { date: key, games: gamesByDate[key] };
  });
};

const SearchResults = ({ query, games }) => (
  <div className="search-results">
    <h2>Search Results for {query}</h2>
    {groupGames(filterGames(query, games)).map(({ date, games }) => {
      return (
        <div className="group" key={date}>
          <h3>Games on {new Date(date).toLocaleDateString()}</h3>
          {games.map(game => (
            <GameThumbnail key={game.id} query={query} {...game} />
          ))}
        </div>
      );
    })}
  </div>
);

export default SearchResults;

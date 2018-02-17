import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import GameRoundLoader from './components/GameRoundLoader';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import './App.css';

const baseUrl = '/drawsome';

const GameRoundPage = ({ match }) => (
  <GameRoundLoader apiUrl={baseUrl + '/games/'} gameId={match.params.id} />
);
const SearchRoute = ({ component: Component, games, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Component games={games} query={props.match.params.query} />
    )}
  />
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      selectedGame: null,
      game: {
        metadata: {},
        game: {
          drawings: [],
          playerPortraits: []
        }
      },
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(baseUrl + '/games/games.json')
      .then(data => data.json())
      .then(data => this.setState({ games: data, loading: false }));
  }

  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <h1>drawsome</h1>
            <SearchBar />
          </header>
          <Route path="/games/:id" component={GameRoundPage} />
          <SearchRoute
            path="/search/:query"
            games={this.state.games}
            component={SearchResults}
          />
        </div>
      </Router>
    );
  }
}

export default App;

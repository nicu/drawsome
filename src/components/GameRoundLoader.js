import React, { Component } from 'react';
import GameRound from './GameRound';

class GameRoundLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      game: null,
      metadata: null
    };
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.gameId !== nextProps.gameId ||
      this.props.apiUrl !== nextProps.apiUrl
    ) {
      this.loadGame(nextProps.apiUrl, nextProps.gameId);
    }
  }

  componentDidMount() {
    this.loadGame(this.props.apiUrl, this.props.gameId);
  }
  loadGame(apiUrl, gameId) {
    this.setState({ loading: true });
    fetch(apiUrl + gameId)
      .then(data => data.json())
      .then(({ game, metadata }) => {
        this.setState({ game, metadata, loading: false });
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.loading ? 'Game Loading..' : ''}</div>
        {!this.state.loading && this.state.game && this.state.metadata ? (
          <GameRound {...this.state.game} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default GameRoundLoader;

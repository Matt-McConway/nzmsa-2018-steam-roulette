import { createBrowserHistory } from 'history';
import * as React from 'react';


import './css/App.css';

const history = createBrowserHistory().location.pathname.slice(6); // This is so damn hacky, will fix it later!

/*
  TSLINT BACKUP "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "rules": {
    "no-console": false
  },

*/

interface IState {
  history: {},
  game: string,
  games: [],
  gamesCount: number
}

export default class App extends React.Component<{}, IState> {

  
  constructor(props: {}){
    super(props);

    this.state = {
      history: {history}.history,
      game: "",
      games: [],
      gamesCount: 0
    }
  }

  public componentDidMount(){
    this.setState({history: createBrowserHistory().location.pathname.slice(6)})
    fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=DAD089B9DA1A8114E0D7C3B6F07DCE5C&steamid=${this.state.history}&format=json`).then((response) => {return response.json();}).then((response) => {
      this.setState({games: response.response.games, gamesCount: response.response.game_count});

      this.setState({game: this.state.games[Math.floor(Math.random() * this.state.gamesCount)]});
      console.log(this.state.games); 
      console.log(this.state.game);
    });
    // console.log(this.state.gamesCount);
}


  

  public render() {
    return (
      <h1>{this.state.history}</h1>
    );
  }
}
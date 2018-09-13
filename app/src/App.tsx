import { createBrowserHistory } from 'history';
import * as React from 'react';


import './css/App.css';



/*
  TSLINT BACKUP "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "rules": {
    "no-console": false
  },

*/

interface IState {
  history: {},
  game: {appid: number, has_community_visible_stats: boolean, img_icon_url: string, img_logo_url: string, name: string, playtime_forever: number},
  games: [],
  gamesCount: number
}

export default class App extends React.Component<{}, IState> {

  
  constructor(props: {}){
    super(props);
    const history = createBrowserHistory().location.pathname.slice(6); // This is so damn hacky, will fix it later!
    this.state = {
      history: {history}.history,
      game: {appid: 1, has_community_visible_stats: true, img_icon_url:"404", img_logo_url:"404", name:"", playtime_forever: 0},
      games: [],
      gamesCount: 0
    }
  }

  public componentDidMount(){
    this.setState({history: createBrowserHistory().location.pathname.slice(6)})
    fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=DAD089B9DA1A8114E0D7C3B6F07DCE5C&steamid=${this.state.history}&include_appinfo=1&include_played_free_games=1&format=json`).then((response) => {return response.json();}).then((response) => {
      this.setState({games: response.response.games, gamesCount: response.response.game_count});

      this.setState({game: this.state.games[Math.floor(Math.random() * this.state.gamesCount)]});
      console.log(this.state.games); 
      console.log(this.state.game.name);
      console.log(response);
      console.log(this.state.game);
      
    });
    // console.log(this.state.gamesCount);
}


  

  public render() {
    return (
      <div className="App">
        <h1>{this.state.game.name}</h1>
      </div>
      
    );
  }
}
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

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
      game: {appid: 1, has_community_visible_stats: true, img_icon_url:"", img_logo_url:"", name:"", playtime_forever: 0},
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


  public refreshPage = () => {
    window.location.reload();
  }

  public render() {
    return (
      <div className="App">
        <img height="200px" width="600px" src={`http://media.steampowered.com/steamcommunity/public/images/apps/${this.state.game.appid}/${this.state.game.img_logo_url}.jpg`} alt="Game Icon" />
        <h2>You rolled: {this.state.game.name}</h2>
        <br />
        <h2>Play time: {this.state.game.playtime_forever} minutes.</h2>
        <Button href={`https://store.steampowered.com/app/${this.state.game.appid}`} variant="contained" color="primary">Visit Steam Store Page</Button>
        <Button onClick={this.refreshPage} variant="contained" color="primary">Reroll</Button>
        <br />
        <Button component={Link} {...{to: "/"} as any} variant="contained" color="primary">Home</Button>
      </div>
      
    );
  }
}
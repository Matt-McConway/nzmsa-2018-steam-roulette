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
  history: {}
}

export default class App extends React.Component<{}, IState> {

  
  constructor(props: {}){
    super(props);

    this.state = {
      history: {history}.history
    }
  }

  public componentDidMount(){
    this.setState({history: createBrowserHistory().location.pathname.slice(6)})
    console.log(this.state.history);
}


  

  public render() {
    return (
      <h1>{this.state.history}</h1>
    );
  }
}
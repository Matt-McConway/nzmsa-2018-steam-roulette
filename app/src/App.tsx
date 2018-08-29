import * as React from 'react';


import './css/App.css';

interface IState {
  username: string,
  results: any,
}


export default class App extends React.Component<{}, IState> {

  
  constructor(props: any){
    super(props);

    this.state = {
      results: "",
      username: ""
    };
  }

  public componentDidMount(){
    console.log(this.props.match.history.);
}


  

  public render() {
    return (
      <h1>{this.state.username}</h1>
    );
  }
}
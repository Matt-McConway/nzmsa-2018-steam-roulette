import * as React from 'react';
import logo from './assets/images/logo.png';
import './css/App.css';


export default class App extends React.Component<{}> {
  public render() {
    return (
      <div className="container-fluid">
      <div className="centreText">
        {/* React components must have a wrapper node/element */}
        <h1>Steam Roulette</h1>
        <img src={logo} height="512px" width="512px"/>
        <h3>What will you play today?</h3>
      </div>
    </div>
    );
  }
}
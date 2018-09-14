import { History } from 'history';
import * as React from 'react';
import Button from '@material-ui/core/Button';

import '../css/App.css';
import logo from '../assets/images/logo.png';


interface IProps {
  history : History,
  usernameInput: React.RefObject<HTMLInputElement>
  
}

export default class Landing extends React.Component<IProps> {
    private usernameInput: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
        super(props);
        this.usernameInput = React.createRef();
      }

    
    
    public onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Removed this to ensure that the randomized game is displayed on first submission of UID
        if (this.usernameInput.current){
            const uid = this.usernameInput.current.value;
            this.props.history.push(`/user/${uid}`)
        }
    
      }

    public render() {
        return (
        <div className="container-fluid">
            <div className="centreText">
                <h1>Steam Roulette</h1>
                <h3>What will you play today?</h3>
                <img src={logo} height="512px" width="512px"/>
                <form onSubmit={this.onSubmit}>
                    <h4>Enter your 64bit steam id: </h4>
                    <p>Unsure what yours is? Check <a href="https://steamid.io/" target="_blank" >here</a></p>
                    <input type="text" required={true} placeholder="Username" defaultValue="76561198050724109" name="username" ref={this.usernameInput}/>
                    <br />
                    <Button type="submit" variant="contained" color="primary" >Submit</Button>
                    
                </form>
            </div>
        </div>
        );
}
}
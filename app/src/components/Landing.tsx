import { History } from 'history';
import * as React from 'react';

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
        event.preventDefault();
        if (this.usernameInput.current){
            const uid = this.usernameInput.current.value;
            console.log(uid);
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
                    <h4>Enter your steam username: </h4>
                    <input type="text" required={true} placeholder="Username" defaultValue="Mirkea" name="username" ref={this.usernameInput}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        );
}
}
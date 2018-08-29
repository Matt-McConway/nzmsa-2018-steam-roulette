import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Landing from './components/Landing';
import NotFound from './components/NotFound';

import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Landing}/>
                <Route path="/user/:userID" component={App}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>

    );
}
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Login = React.lazy(()=> import('./Views/Auth/Login/Login'));
const Signup = React.lazy(()=> import('./Views/Auth/Signup/Signup'));




export class App extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default App;

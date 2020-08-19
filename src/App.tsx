import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Close } from '@material-ui/icons';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Routes/PrivateRoutes/PrivateRoute';
import { rootRoute } from './Routes/RootRoute/rootRoute';
import { rootRouteInterface } from './Interfaces/rootRouteInterface';
import { rootPrivateRoute } from './Routes/RootRoute/rootPrivateRoute';

export class App extends React.Component {
    CloseButton = ({ closeToast }: { closeToast: any }) => <Close onClick={closeToast} />;
    render() {
        return (
            <React.Fragment>
                <ToastContainer closeButton={this.CloseButton} />
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            {rootRoute.map((item: rootRouteInterface) => {
                                return <Route exact path={item.name} component={item.component} />;
                            })}
                            {rootPrivateRoute.map((item: rootRouteInterface) => {
                                return <PrivateRoute path={item.name} component={item.component} />;
                            })}
                        </Switch>
                    </Suspense>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;

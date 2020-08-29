import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import routes from '../../Routes/Parents';

const ParentHomePage: FC = () => {
    // const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid container direction="column">
                <Switch>
                    {routes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))}
                    <Redirect to="/parent-homepage/" />
                </Switch>
            </Grid>
        </Grid>
    );
};

export default ParentHomePage;
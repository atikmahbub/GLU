import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { tutorRoutes } from '../../Routes/Tutor/Index';

const Index = () => {
    return (
        <Switch>
            {tutorRoutes.map((route: any) => (
                <Route exact key={uuidv4()} {...route} />
            ))}
        </Switch>
    );
};

export default Index;

import React from 'react';
import SchoolInfoHeader from './SchoolInfoHeader';
import SchoolInfoBody from './SchoolInfoBody';
import MadeBy from '../../Views/Footer/MadeBy';
import { makeStyles } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center',
        marginTop: '3rem',
    },
});
const SchoolInfo = () => {
    const classes = useStyles();

    return (
        <div>
            <NavigationMenu background="secondary" />
            <SchoolInfoHeader />
            <SchoolInfoBody />
            <div className={classes.footer}>
                <MadeBy />
            </div>
        </div>
    );
};

export default SchoolInfo;

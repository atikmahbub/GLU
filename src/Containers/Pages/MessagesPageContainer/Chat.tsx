import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGridContainer from '../../CardsGridContainer';
import FullHeightContainer from '../../FullHeightContainer';
import ChatSidebar from './ChatSidebar';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    messageIcon: {
        fontSize: '1.5rem',
        marginLeft: '1.25rem'
    },
});

const Chat: FC = () => {
    const classes = useStyles();
    return (
        <FullHeightContainer>
            <Grid container className={classes.root}>
                <Grid container item xs={8}>
                    <CardsGridContainer>1</CardsGridContainer>
                </Grid>
                <Grid container item xs={4}>
                    <ChatSidebar />
                </Grid>
            </Grid>
        </FullHeightContainer>
    );
};

export default Chat;

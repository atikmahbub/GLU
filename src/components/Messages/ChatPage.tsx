import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MessageRecieved from './MessageReceived';
import makeStyles from '@material-ui/core/styles/makeStyles';
import UserCardSidePanel from './UserCardSidePanel';
import userData from './data';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    body: {
        marginRight: 0,
        paddingRight: 0,
        position: 'relative',
        // backgroundColor: 'grey',
        minWidth: '100%',
        height: '100vh',
        fontFamily: 'CircularXXWeb-Book',
        paddingBottom: "50px",
    },
    contentContainer:{
        marginRight: 0,
        paddingRight: 0,
        
    },
    userContainer:{
        backgroundColor: "white",
        paddingTop: '9.25rem',
    },

    userContainerSidePane:{
        backgroundColor: "white",
        marginTop: '20px',
        display: 'flex',
        // paddingTop: '9.25rem',
    },
    userName:{
        fontSize: "2.625rem",
        // paddingLeft: "24px",
    },
    sidePanelTitle:{
        fontSize: "2.625rem",
    },
    messageBox:{
        backgroundColor: "white",
        border:"2px solid grey",
        height: "60vh",
        marginTop: '5.187rem',
    },
    sidePanelContainer:{
        marginRight: 0,
        paddingRight: 0,
        // backgroundColor: '#F7F7F7',
        // width: "39.625rem",
    },
    messageContainer:{
        marginLeft: 0,
        paddingLeft: 0,
        paddingTop: '5.593rem',
    },
    sidePanel:{
        width: "49.625rem",
        height: '100vh',
        backgroundColor: '#F7F7F7',
        marginRight: 0,
        paddingTop: '9.25rem',
    }

})
const ChatPage: FC = () => {
    const classes = useStyles();
    return (
        <Container className={classes.body}>
            <Grid container className={classes.contentContainer}>
                <Grid item xs={6} className={classes.userContainer}>
                    <Typography className={classes.userName}>Matt Oliver </Typography> 
                    <Grid className={classes.messageBox}>
                        <MessageRecieved/>
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classes.sidePanelContainer}>
                    <Container className={classes.sidePanel}>
                      <Typography className={classes.sidePanelTitle}>Messages <i className="icon-Message" style={{ fontSize: "1.906rem" }} /></Typography> 
                      <Container className={classes.messageContainer}>
                        <Grid container item className={classes.userContainerSidePane}>
                                <UserCardSidePanel key={userData[3].id} image={userData[3].img} userName={userData[3].userName} onlineStatus={userData[3].onlineStatus}/>
                                <Divider width="100%"/>
                        </Grid>
      
                        <Grid container item className={classes.userContainerSidePane}>
                                <UserCardSidePanel key={userData[3].id} image={userData[3].img} userName={userData[3].userName} onlineStatus={userData[3].onlineStatus}/>
                                <Divider width="100%"/>

                        </Grid>  
      
                        <Grid container item className={classes.userContainerSidePane}>
                                <UserCardSidePanel key={userData[3].id} image={userData[3].img} userName={userData[3].userName} onlineStatus={userData[3].onlineStatus}/>
                                <Divider width="100%"/>

                        </Grid>                                  
                      </Container>
                    </Container>

                </Grid>
            </Grid>
            
        </Container>
    )
}

export default ChatPage

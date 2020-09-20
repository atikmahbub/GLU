import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    messageContainer:{
        backgroundColor: "lightgrey",
        maxWidth: "48.062rem",
        marginLeft:0,
    },
    message:{
        fontColor: "black",
        fontSize: "1.562rem",
        lineHeight: "1.875rem",
    },
    messageTime:{
        fontColor: "grey",
        fontSize: "1.125rem",
    }
})

const MessageReceived: FC = () => {
    const classes = useStyles()
    return (
        <Container className={classes.messageContainer}>
           <Typography className={classes.message}> Hey, I need some help with the new French vocab homework. Do you have a bit of time to walk me through it?</Typography> 
           <Typography className={classes.messageTime}>3.10pm </Typography> 
        </Container>
    )
}

export default MessageReceived

import React, { FC, useState, ReactNode, memo } from 'react';
import { Typography} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Divider from '@material-ui/core/Divider';
import CustomizedProgressBars from "./CustomizedProgressBars";

const useStyles = makeStyles(() => ({
    container: {
        width: "100vw",
        // height: "32.375rem",
        height: "100vh",
        backgroundColor: "white",
        fontFamily: 'CircularXXWeb-Book',
        margin: '0rem',
        paddingLeft: '3.125rem',
        paddingRight: '3.062rem',
        paddingTop: "5.593rem",
    },
    dateAndTextContainer: {
        color: "black",
    },
    resourcesAndTextContainer:{
        marginTop: "-6.937rem"
    },
    left:{
        fontSize: "2.625rem",
        lineHeight: "2.812rem",
    },
    right:{
        fontSize: "2.625rem",
        lineHeight: "3.125rem",
    },

    leftResources:{
        fontSize: "2.625rem",
        lineHeight: "2.812rem",
    },
    rightResources:{
        fontSize: "2.625rem",
        lineHeight: "3.125rem",
    },
    resourcesInfoContainer:{
        fontSize: "1.562rem",
        lineHeight: "1.906rem",
    },
    textResourceContainer:{
        marginTop: "1.812rem"
    },
    resourceHeading:{
        color: "black",
        fontSize: "1.562rem",
        lineHeight: "1.875rem",
    },
    download:{
        fontSize: "1.25rem",
        color: "#5F5F5F",
        marginTop: ".6rem;",
    },
    progressBarContainer:{
        width: "100%",
        marginTop: "2rem",
    },
    audioInfoContainer:{
        justifyContent: "space-between",
        marginTop: "1rem"
    },
    audioPlayContainer:{
        alignItems: "center",
    },
    playText:{
        fontSize: "1.562rem",
        lineHeight: "1.875rem",
    },
    audioTimeContainer:{
        alignItems: "center",
    },
    audioTime: {
        fontSize: '1.562rem',
        lineHeight: '1.906rem',
    }
}));

const DateAndResources: FC = () => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
        <Grid container className={classes.container}>
            <Grid container className={classes.dateAndTextContainer} lg={12}>
                <Grid item container lg={6}>
                    <Typography className={classes.left}>Due <br/> 11/08/20 <br/>9.30am</Typography>
                </Grid>

                <Grid item container lg={6}>
                    <Typography className={classes.right}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</Typography>
                </Grid>
            </Grid>

            <Divider height="4px" width="98%"/>

            <Grid container className={classes.resourcesAndTextContainer} lg={12}>
                <Grid item container lg={6}>
                    <Typography className={classes.leftResources}>Resources</Typography>
                </Grid>
                <Grid item container lg={6} className={classes.resourcesInfoContainer}>
                     <Divider orientation="vertical"/>
                     <Grid item lg={1}/>

                    <Grid item container direction="column" lg={4} >
                        <Typography className={classes.resourceHeading}>Text books</Typography>
                        <Grid className={classes.textResourceContainer}>
                             <Typography className={classes.resourceHeading}>AQA Algebra</Typography>
                             <Typography className={classes.download}>Download</Typography>

                        </Grid>
                        <Grid className={classes.textResourceContainer}>
                            <Typography className={classes.resourceHeading}>Algebra for beginners</Typography>
                            <Typography className={classes.download}>Download</Typography>
                        </Grid>

                    </Grid>
                    <Divider orientation="vertical"/>
                    <Grid item lg={1}/>

                    <Grid item container direction="column" lg={5}>
                    <Typography className={classes.resourceHeading}>Audio Clips</Typography>
                        <Grid className={classes.textResourceContainer}>
                             <Typography className={classes.resourceHeading}>Extract From AQA Algebra</Typography>
                             <div className={classes.progressBarContainer}>
                                 {/* <LinearProgress variant="determinate" color={"primary"} value={progress} /> */}
                                 <CustomizedProgressBars value={progress}/>
                             </div>
                             <Grid container direction="row" className={classes.audioInfoContainer} lg={12}>
                                 <Grid item container className={classes.audioPlayContainer} lg={10}>
                                    <Grid container>
                                        <PlayArrowIcon style={{ fontSize: "2rem", color:"black" }}/>
                                        <Typography className={classes.playText}>Play</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.audioTimeContainer} lg={2}>
                                        <Typography className={classes.audioTime}>\ 33.21</Typography>
                                </Grid>
                             </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DateAndResources;

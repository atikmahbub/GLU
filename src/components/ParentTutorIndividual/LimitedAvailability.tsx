import React, { FC, useState, ReactNode, memo } from 'react';
import { Typography, TextField } from '@material-ui/core';
import commonImg from '../../Assets/images';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FavoriteBorder, StarBorder } from '@material-ui/icons';
// import './style.scss';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';


const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: "100%",
        marginTop: "2.75rem",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    inputLabel: {
        fontSize: "1.562rem",
        lineHeight: "1.875rem",
        color: "#000000",
    },
    selectLabel:{
        fontSize: "1.562rem",
    },
    container: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        fontFamily: 'CircularXXWeb-Book',
        margin: '0rem',
        paddingLeft: '3.125rem',
        paddingRight: '3.062rem',
    },
    elementsContainer: {
        height: "90vh",
        marginTop: "9.25rem",
        // border: '2px solid red',
    },
    left: {
        fontSize: "1.562rem",
        lineHeight: "1.875rem",
    },
    right: {
        color: "black",
        fontSize: "2.625rem",
        lineHeight: "2.812rem",
    },
    form: {
        marginTop: "4.25rem",
    }



}));

const ParentIndividualTutorBanner: FC = () => {
    const classes = useStyles();
    const [subject, setSubject] = React.useState("");
    const [date, setDate] = React.useState("");
    const [startTime, setStartTime] = React.useState("");
    const [endTime, setEndTime] = React.useState("");

    const handleChangeSubject = (event) => {
      setSubject(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
      };

    
    const handleChangeStartTime = (event) => {
        setStartTime(event.target.value);
    };


const handleChangeEndTime = (event) => {
    setEndTime(event.target.value);
    };

    return (
        <Grid container className={classes.container}>
            <Grid container className={classes.elementsContainer}>
                <Grid item lg={6}>
                    <Typography className={classes.left}>Limited Availability</Typography>
                </Grid>

                <Grid item lg={6}>
                    <Typography className={classes.right}>
                        I am an American author, life coach, and philanthropist. Known for my infomercials, seminars, and self-help books including the books Unlimited Power and Awaken the Giant Within. In 2015 and 2016 I was listed on the Worth Magazine Power 100 list.
                    </Typography>
                    <Grid direction="column" className={classes.form} lg={6} spacing={2}>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <InputLabel className={classes.inputLabel} id="demo-simple-select-label">Students</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={subject}
                                    IconComponent = {ExpandMoreIcon}
                                    onChange={handleChangeSubject}
                                    fullWidth
                                >
                                    <MenuItem value={10}>Maths</MenuItem>
                                    <MenuItem value={20}>English</MenuItem>
                                    <MenuItem value={30}>Science</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <InputLabel className={classes.inputLabel} id="demo-simple-select-label">Date</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    IconComponent={CalendarTodayIcon}
                                    id="demo-simple-select"
                                    value={date}
                                    onChange={handleChangeDate}
                                    fullWidth
                                >
                                    <MenuItem value={10}>10/07/20</MenuItem>
                                    <MenuItem value={20}>11/07/20</MenuItem>
                                    <MenuItem value={30}>12/07/20</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container item spacing={2}>
                            <Grid item lg={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel className={classes.inputLabel} id="demo-simple-select-label">Start Time</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        IconComponent = {ExpandMoreIcon}
                                        id="demo-simple-select"
                                        value={startTime}
                                        onChange={handleChangeStartTime}
                                        fullWidth
                                    >
                                        <MenuItem value={10}>10:00 AM</MenuItem>
                                        <MenuItem value={20}>11:00 AM</MenuItem>
                                        <MenuItem value={30}>12:00 AM</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel className={classes.inputLabel} id="demo-simple-select-label">End Time</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        IconComponent = {ExpandMoreIcon}
                                        id="demo-simple-select"
                                        value={endTime}
                                        onChange={handleChangeEndTime}
                                        fullWidth
                                    >
                                        <MenuItem value={10}>12:30 PM</MenuItem>
                                        <MenuItem value={20}>01:30 PM</MenuItem>
                                        <MenuItem value={30}>02:30 PM</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ParentIndividualTutorBanner;

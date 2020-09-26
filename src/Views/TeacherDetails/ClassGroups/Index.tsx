import React, { useEffect, useState } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../../Styles/colors';
import ArrowCard from '../../../components/Dashobard/ArrowCard';
import { useHistory, useLocation } from 'react-router';

const useStyles = makeStyles({
    headingParent: {
        padding: '1.875rem',
        background: colors.white,
        marginBottom: '1.25rem',
    },
    contentParent: {
        height: '88vh',
        background: colors.white,
    },
    heading: {
        fontSize: '1.875rem',
        lineHeight: '3.437rem',
        color: colors.lightGray,
        fontWeight: 500,
        '& span': {
            color: colors.black,
        },
    },
    bottomTittle: {
        fontSize: '1rem',
        fontFamily: 'CircularXXMonoWeb-Regular',
        padding: '1.875rem',
        marginTop: '28vh',
    },
});

const Index = () => {
    const classes = useStyles();
    const [groups, setGroups] = useState([
        'Students',
        'Attendance/Punctuality',
        'Exam Results',
        'Homework',
        'Feedback',
        'Merits/Sanctions',
    ]);
    const [teacherdata, setTeacherdata] = useState({ name: '' });
    const routes = useHistory();
    const handleRoute = (group: string) => {
        routes.push({
            pathname: `/dashboard/teacher-details/class-group-details/${String(group).toLowerCase().replace(' ', '-')}`,
            state: {
                forTeacher: true,
                teacherData: teacherdata,
            },
        });
    };
    const findRoutes = useLocation();
    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('teacherData')) {
                setTeacherdata((findRoutes as any).state.teacherData);
            }
        }
    }, []);
    return (
        <Box component="div">
            <Box component="div" className={classes.headingParent}>
                <Typography className={classes.heading}>
                    Year <span>8 Blue </span>
                </Typography>
            </Box>
            <Box className={classes.contentParent}>
                {groups.map((group: string, i: number) => (
                    <ArrowCard title={group} key={i} onClick={() => handleRoute(group)} />
                ))}
                <Typography className={classes.bottomTittle}>{teacherdata.name}</Typography>
            </Box>
        </Box>
    );
};

export default Index;

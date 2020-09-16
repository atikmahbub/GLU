import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, Container, Divider } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import TotalClasses from './TotalClasses';
import UpcomingClasses from './UpcomingClasses';
import TutorListMiddle from './TutorListMiddle';
import UpcomingClassesPartSec from './UpcomingClassesPartSec';
import OutlineButton from '../../components/Button/OutlineButton';
import Footer from '../Footer/Footer';
import TutorListBottom from './TutorListBottom';
import { useHistory } from 'react-router';
import { parentMenus } from '../../Helper/parentMenus';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    filterContainer:{
        display: "flex",
        alignItems: "center",
    },
    filter:{
        marginLeft: "-57px",
    },
}));
const ClassesTutorsWithFilter: React.FunctionComponent = () => {
    const route = useHistory();
    const gotoClasses = () => {
        route.push('/parent/classes');
    };
    const gotoTutors = () => {
        route.push('/parent/classes');
    };
    const classes = useStyles();
    return (
        <NavigationMenu menuList={parentMenus}>
            <div className="student__classes__tutor classes_page">
                <div className="filter__row__container">
                    <div className="button__container">
                        <Typography className="title active" onClick={gotoClasses}>
                            Classes
                        </Typography>
                        <Typography className="title" onClick={gotoTutors}>
                            Tutors
                        </Typography>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                             <Typography variant="h3" className={classes.filter}>Filter</Typography>
                             <AddIcon fontSize="large" />
                    </div>
                    <div className="sort__container">
                        {/* <ExpandMore className="arrow__downward" /> */}
                        <Typography className="sort__title"></Typography>
                    </div>
                </div>
                <TotalClasses />
                <UpcomingClasses />
                <TutorListMiddle />
                <UpcomingClassesPartSec />
                <TutorListBottom />

                <div className="row">
                    <div className="show__more__wrapper">
                        <div className="show__more__contianer">
                            <OutlineButton text="Show more" />
                            <Typography className="title">Showing 50 of 5488</Typography>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </NavigationMenu>
    );
};

export default ClassesTutorsWithFilter;
import React from 'react';
import { Typography, TextField, makeStyles } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';

// import MadeBy from '../Footer/MadeBy';
const useStyles = makeStyles({
    navigationContainer: {
        backgroundColor: '#F7F7F7 !important',
    },
});
const TutorClass: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const classes = useStyles();
    return (
        <>
            <NavigationMenu menuList={menu} containerClassName={classes.navigationContainer} />
            <div className="tutor_review_container">
                <div className="tutor_review_banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="tutor_review_heading1wrapper">
                                    <Typography className="tutor_review_text">Latest Review</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="tutor_review_heading2wrapper">
                                    <Typography className="tutor_review_bigtext">George Lee, Parent 4/5</Typography>
                                </div>
                            </div>
                        </div>
                        <div className="tutor_review_banner_subcontainer">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <div className="class_rating">
                                        <div className="class_rating_star">
                                            <Typography className="tutor_review_text">4/5</Typography>
                                            <span>
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-star-fill"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </span>{' '}
                                        </div>
                                        <Typography className="tutor_review_extrasmalltext">Class Rating</Typography>
                                    </div>
                                    <div className="tutoring_rating">
                                        <div className="class_rating_star">
                                            <Typography className="tutor_review_text">4/5</Typography>
                                            <span>
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-star-fill"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </span>{' '}
                                        </div>
                                        <Typography className="tutor_review_extrasmalltext">Tutoring Rating</Typography>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="tutor_review_parawrapper">
                                        <Typography className="tutor_review_paratext">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren.
                                        </Typography>
                                        
                                    </div>
                                    <div className="tutor_review_tutoringhistroy">
                                        <Typography className="tutor_review_smalltext">Tutoring, History</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="profile_footer">
                <div className="footer">
                    <MadeBy />
                </div>
            </div> */}
        </>
    );
};

export default TutorClass;

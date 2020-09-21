import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import SmallTextButton from './SmallTextButton';
import Reusable from './ReusableEduExp';
// import { getTeacherEducationApiCall } from '../../Redux/Actions/teacherAction';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    detailsText: {
        fontSize: '2.625rem',
        fontFamily: 'CircularXXWeb-Book',
    },

    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '2.6875rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        marginBottom: '6.0625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
});

const Education = ({ education }) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.detailsText}>Education</div>
            {education &&
                education.map((item) => (
                    <Reusable
                        key={item.qualificationId}
                        startDate={item.QualificationDetail.startDate.substring(0, 4)}
                        endDate={
                            item.QualificationDetail.endDate ? item.QualificationDetail.endDate.substring(0, 4) : null
                        }
                        institute={item.QualificationDetail.school}
                        position={item.QualificationDetail.qualification}
                        deleteEducationId={item.QualificationDetail.id}
                    />
                ))}

            <div className={classes.upload}>Add more</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        education: state.teacherReducer.teacherEducation,
    };
};

export default connect(mapStateToProps)(Education);

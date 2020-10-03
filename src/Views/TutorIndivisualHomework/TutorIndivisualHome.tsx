import React, { useEffect, useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, makeStyles } from '@material-ui/core';
import ReusableSubmissions from './ReusableSubmissions';
import PlayContainer from '../../components/PlayContainer';
import PlayBanner from '../../components/PlayBanner';
import PageFooter from '../../components/PageFooter';
import MadeBy from '../Footer/MadeBy';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeworkById } from '../../Redux/Actions/teacherAction';

const useStyles = makeStyles({
    navigationContainer: {
        backgroundColor: '#F7F7F7 !important',
    },
});
const TutorRecord: React.FunctionComponent = ({ match }) => {
    const dispatch = useDispatch();
    const homeworkData = useSelector((state) => state.teacherReducer.singleHomework);

    useEffect(() => {
        const param = match.params.id;
        console.log('Param data: ', param);
        dispatch(getHomeworkById(param));
    }, []);
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const studentArray = homeworkData
        ? homeworkData.studentData.map(
              (student) =>
                  `${student?.Student?.firstName ? student.Student.firstName : 'NAME MISSING'} ${
                      student?.Student?.lastName ? student.Student.lastName : ''
                  }`
          )
        : [];
    const halfArray = (arr, num) => {
        if (num === 0) {
            let hafarr = [];
            let iter = Math.ceil(arr.length / 2);
            for (let i = 0; i < iter; i++) {
                hafarr.push(arr[i]);
            }
            return hafarr;
        }
        if (num === 1) {
            let seconfHafArr = [];
            let iter = Math.ceil(arr.length / 2);
            for (let i = iter; i < arr.length; i++) {
                seconfHafArr.push(arr[i]);
            }
            return seconfHafArr;
        }
    };
    const student1Array = halfArray(studentArray, 0);
    const student2Array = halfArray(studentArray, 1);
    const subArr =
        homeworkData &&
        homeworkData.studentData.map((el) => {
            return {
                name: `${el?.Student?.firstName ? el.Student.firstName : 'NAME MISSING'} ${
                    el?.Student?.lastName ? el.Student.lastName : ''
                }`,
                date: '07/08/20',
                time: '9.37am',
                isSubmitted: el.isSubmitted ? 'Submitted' : 'Incomplete',
                isEdit: 'Edit',
            };
        });
    const submissionArray = subArr;
    const resourcesArray = [
        {
            title: 'AQA Algebra',
            subtitle: 'Download',
        },
        {
            title: 'Algebra for beginners',
            subtitle: 'Download',
        },
    ];
    const classes = useStyles();
    return (
        <NavigationMenu
            menuList={menu}
            showBurgerNav={'hide'}
            tutorOptions={'show'}
            reverseButtons={'yes'}
            background="secondary"
        >
            <div className="tutor_indivisual_homework">
                <div className="container_1">
                    <div className="container_1_1">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <Typography className="leftText">Assignment</Typography>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="container_1_1_rightcontainer">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Typography className="rightTitle">
                                                {homeworkData ? homeworkData.homeworkData[0].Subject.subjectName : ''}.
                                                <br></br>
                                                {homeworkData ? homeworkData.homeworkData[0].title : ''}
                                            </Typography>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="button_container">
                                                <Typography className="smallText1">Edit</Typography>
                                                <Typography className="smallText2">Cancel</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container_2">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <Typography className="leftText">
                                Due<br></br> {homeworkData ? homeworkData.homeworkData[0].dueDate.split('T')[0] : ''}{' '}
                                <br></br>
                                {homeworkData ? `${homeworkData.homeworkData[0].endTime.substring(0, 5)}am` : ''}
                            </Typography>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="rightContainer_2">
                                <Typography className="paraText">
                                    {homeworkData ? homeworkData.homeworkData[0].description : ''}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resources_play_container_3">
                    <div className="row horizontalline_md"></div>
                    <div className="resources_play_container_3_1">
                        <PlayBanner
                            heading={'Resources'}
                            subHeading1={'Text Books'}
                            subHeading2={'Audio Clips'}
                            subText2={'Extract from AQA Algebra'}
                            isDivider={true}
                            resourcesArray={resourcesArray}
                        />
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="leftTextPadding">
                                    <Typography className="leftText ">Students</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 borderLineMain">
                                <div className="students_container">
                                    <div className="row">
                                        <div className="col-6 p-0">
                                            <div className="resources_container_1">
                                                {student1Array.map((val, index) => (
                                                    <div key={index} className="col-md-12">
                                                        <Typography className="textArray">{val}</Typography>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-6 p-0 left_md_border">
                                            <div className="resources_container_2">
                                                <div className="row">
                                                    {student2Array.map((val, index) => (
                                                        <div key={index} className="col-md-12">
                                                            <Typography className="textArray">{val}</Typography>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="horizontalline_new"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="col-md-6 p-0">
                                    <div className="leftTextPadding">
                                        <Typography className="leftText ">Hand In</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 borderLineMain">
                                <div className="students_container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Typography className="textArray">
                                                Submissions{' '}
                                                {homeworkData
                                                    ? `${homeworkData.submission}/${
                                                          homeworkData.missing + homeworkData.submission
                                                      }`
                                                    : ''}
                                            </Typography>
                                        </div>
                                        <div className="col-md-12">
                                            {homeworkData &&
                                                submissionArray.map((val, index) => (
                                                    <div className="submissions">
                                                        <ReusableSubmissions
                                                            date={val.date}
                                                            isSubmitted={val.isSubmitted}
                                                            time={val.time}
                                                            isEdit={val.isEdit}
                                                            name={val.name}
                                                        />
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="complete">
                                            <div className="col-md-12">
                                                <div className="complete_button">
                                                    <Typography className="complete_text">Complete</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonWhiteFooter">
                    <PageFooter />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default TutorRecord;

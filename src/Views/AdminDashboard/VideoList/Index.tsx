import React, { useEffect, useState } from 'react';
import TeacherList from '../../TeacherList';
import { useDispatch, useSelector } from 'react-redux';
import { getallVideoAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import commonImg from '../../../Assets/images';
import VideoList from './VideoList';

const Index = () => {
    const dispatch = useDispatch();
    const video = useSelector((state: any) => state.superAdminReducer.videoList);
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        dispatch(getallVideoAPIcall());
        console.log("======= action dispatche =========Video")
    }, []);
    useEffect(() => {
        if (video) {
            const data = video.map((element: any) => {
                return {
                    title: element.title,
                    description: element.description,
                    resource: element.resource,
                    coverImage: element.coverImage,
                    videoLink: element.videoLink,
                    maxStudent: element.maxStudent,
                };
            });
            setVideoList(data);
        }
    }, [video]);

    // return <TeacherList teacherList={teacherList} />;
    return <VideoList videoList={videoList}/>
};

export default Index;

import React from 'react';
import HomePageContainer from '../../Containers/Pages/HomePageContainer';
import useFeatureTeachers from '../../Hooks/students/useFeatureTeachers';
import { calendarSubjectsCards, recommendedCards, recommendedCards2 } from '../../data/homepage';

const Index: React.FunctionComponent = () => {
    const { teachersBannerCards, teachersImageCards, featuredTeachersCard } = useFeatureTeachers();
    console.log(teachersBannerCards, teachersImageCards, featuredTeachersCard);
    return (
        <HomePageContainer
            userType="students"
            cardsData={{
                nextClass: {
                    img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607726/jump_frcudj.jpg',
                    date: '19/07/20',
                    startTime: '9am',
                    endTime: '10.15am',
                    subject: 'PE.',
                    description: 'Creating a running',
                    subTitle: '75mins',
                    name: 'Harriet Earl',
                },
                featuredSubjects: {
                    imgBigTitle: 'Business Studies',
                    imgBig: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607716/chairwithman_p09ojq.jpg',
                    imgSmallTitle: 'Computer Science',
                    imgSmall: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607731/vrplayerboy_fyrdco.jpg',
                },
                recordedClasses: recommendedCards,
                upcomingClass: {
                    img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607715/blackbluetop_ggjltn.jpg',
                    date: '24/07/20',
                    startTime: '3pm',
                    endTime: '4.30pm',
                    subject: 'English.',
                    description: 'How to structure',
                    name: 'Jeff Lee',
                    subTitle: 'AED200',
                },
                calendar: {
                    date: 'July 2020',
                    cards: calendarSubjectsCards,
                },
                liveClasses: recommendedCards2,
                ...(teachersBannerCards.length && {
                    bannerCarousel: teachersBannerCards,
                    bannerCarouselCenter: teachersBannerCards,
                    bannerCarouselBottom: teachersBannerCards,
                }),
                ...(featuredTeachersCard && {
                    featuredTutors: { ...featuredTeachersCard },
                }),
                ...(teachersImageCards.length && {
                    tutors: teachersImageCards,
                }),
            }}
        />
    );
};

export default Index;

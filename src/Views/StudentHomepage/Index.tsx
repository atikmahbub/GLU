import React from 'react';
import HomePageContainer from '../../Containers/Pages/HomePageContainer';
import useFeatureTeachers from '../../Hooks/students/useFeatureTeachers';
import { calendarSubjectsCards, recommendedCards, recommendedCards2 } from '../../data/homepage';
import useUpcomingClasses from '../../Hooks/students/useUpcomingClasses';

const Index: React.FunctionComponent = () => {
    const { teachersBannerCards, teachersImageCards, featuredTeachersCard } = useFeatureTeachers();
    const { nextClassCard, featuredSubjectsCard } = useUpcomingClasses();
    return (
        <HomePageContainer
            userType="students"
            cardsData={{
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
                ...(nextClassCard && {
                    nextClass: { ...nextClassCard },
                }),
                ...(featuredSubjectsCard && {
                    featuredSubjects: { ...featuredSubjectsCard },
                }),
            }}
        />
    );
};

export default Index;

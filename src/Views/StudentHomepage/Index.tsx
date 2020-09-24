import React from 'react';
import { calendarSubjectsCards, recommendedCards2 } from '../../data/homepage';
import HomePageContainer from '../../Containers/Pages/HomePageContainer';
import useFeatureTeachers from '../../Hooks/students/useFeatureTeachers';
import useUpcomingClasses from '../../Hooks/students/useUpcomingClasses';
import usePreviousClasses from '../../Hooks/students/usePreviousClasses';
import useFeatureSubjects from '../../Hooks/students/useFeatureSubjects';
import { getCurrentMonth, getCurrentYear } from '../../Helper/date';

const Index: React.FunctionComponent = () => {
    const { teachersBannerCards, teachersImageCards, featuredTeachersCard } = useFeatureTeachers();
    const { nextClassCard, upcomingClassCard } = useUpcomingClasses();
    const { prevClassImageCards } = usePreviousClasses();
    const { featuredSubjectsCard } = useFeatureSubjects();

    return (
        <HomePageContainer
            userType="students"
            cardsData={{
                calendar: {
                    date: `${getCurrentMonth()} ${getCurrentYear()}`,
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
                ...(upcomingClassCard && {
                    upcomingClass: { ...upcomingClassCard },
                }),
                ...(prevClassImageCards.length && {
                    recordedClasses: prevClassImageCards,
                }),
            }}
        />
    );
};

export default Index;

import React from 'react';
import { calendarSubjectsCards, recommendedCards2 } from '../../data/homepage';
import HomePageContainer from '../../Containers/Pages/HomePageContainer';
import useHomepage from '../../Hooks/students/useHomepage';
import { getCurrentMonth, getCurrentYear } from '../../Helper/date';

const Index: React.FunctionComponent = () => {
    const {
        isPending,
        teachersBannerCards,
        teachersImageCards,
        featuredTeachersCard,
        nextClassCard,
        upcomingClassCard,
        prevClassImageCards,
        featuredSubjectsCard,
    } = useHomepage();

    return (
        <HomePageContainer
            isLoading={isPending}
            userType="students"
            cardsData={{
                calendar: {
                    date: `${getCurrentMonth()} ${getCurrentYear()}`,
                    cards: calendarSubjectsCards,
                },
                liveClasses: recommendedCards2,
                bannerCarousel: teachersBannerCards,
                bannerCarouselCenter: teachersBannerCards,
                bannerCarouselBottom: teachersBannerCards,
                featuredTutors: { ...featuredTeachersCard },
                tutors: teachersImageCards,
                nextClass: { ...nextClassCard },
                featuredSubjects: { ...featuredSubjectsCard },
                upcomingClass: { ...upcomingClassCard },
                recordedClasses: prevClassImageCards.slice(0, 4),
            }}
        />
    );
};

export default Index;

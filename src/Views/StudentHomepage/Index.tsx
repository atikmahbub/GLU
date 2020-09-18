import React from 'react';
import HomePageContainer from '../../Containers/Pages/HomePageContainer';
import useFeatureTeachers from '../../Hooks/students/useFeatureTeachers';
import { calendarSubjectsCards, recommendedCards, recommendedCards2 } from '../../data/homepage';

const Index: React.FunctionComponent = () => {
    const [featureTeachers, teacherBannerCards, teacherImageCards] = useFeatureTeachers();
    console.log(featureTeachers, teacherBannerCards, teacherImageCards);
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
                ...(teacherBannerCards.length && {
                    bannerCarousel: teacherBannerCards,
                    bannerCarouselCenter: teacherBannerCards,
                    bannerCarouselBottom: teacherBannerCards,
                }),
                ...(featureTeachers.length &&
                    featureTeachers[0] &&
                    featureTeachers[1] && {
                        featuredTutors: {
                            imgSmallTitle: `- ${featureTeachers[0].Teacher.firstName} ${featureTeachers[0].Teacher.lastName}`,
                            imgSmall: featureTeachers[0].Teacher.document,
                            imgBigTitle: `- ${featureTeachers[1].Teacher.firstName} ${featureTeachers[1].Teacher.lastName}`,
                            imgBig: featureTeachers[1].Teacher.document,
                        },
                    }),
                ...(teacherImageCards.length && {
                    tutors: teacherImageCards
                })
            }}
        />
    );
};

export default Index;

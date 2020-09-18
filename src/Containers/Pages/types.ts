import {
    BannerCardElement,
    FeaturedCardElement,
    ImageCardElement,
    NextClassCardElement,
    UpcomingClassCardElement,
    CalendarDateSubjectsCardElement
} from '../../components/Cards/types';

export interface HomePageCardsData {
    bannerCarousel: BannerCardElement[];
    nextClass: NextClassCardElement;
    featuredSubjects: FeaturedCardElement;
    recordedClasses: ImageCardElement[];
    bannerCarouselCenter: BannerCardElement[];
    upcomingClass: UpcomingClassCardElement;
    calendar?: CalendarDateSubjectsCardElement;
    liveClasses: ImageCardElement[];
    featuredTutors: FeaturedCardElement;
    bannerCarouselBottom: BannerCardElement[];
    tutors: ImageCardElement[];
}

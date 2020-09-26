import {
    BannerCardElement,
    FeaturedCardElement,
    ImageCardElement,
    NextClassCardElement,
    UpcomingClassCardElement,
    CalendarDateSubjectsCardElement,
    WhiteBannerCardElement,
    HomeworkCardElement,
} from '../../components/Cards/types';
import { UserTypes } from '../../Types/user';

export interface UserType {
    userType: UserTypes;
}

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

export interface IndividualSubjectCardData {
    bannerCard?: BannerCardElement[];
    nextClass?: NextClassCardElement;
    featuredSubjects?: FeaturedCardElement;
    recordedClasses: ImageCardElement[];
    upcomingClass: UpcomingClassCardElement;
    calendar?: CalendarDateSubjectsCardElement;
    liveClasses: ImageCardElement[];
    featuredTutors: FeaturedCardElement;
    bannerCarouselBottom: BannerCardElement[];
    tutors: ImageCardElement[];
    whiteBannerCard: WhiteBannerCardElement;
}

export interface HomeworkPage {
    incompleteCount: number;
    overdueCount: number;
    totalCount: number;
    homeworks: HomeworkCardElement[];
    overdueHomework: HomeworkCardElement[];
}

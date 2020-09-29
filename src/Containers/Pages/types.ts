import {
    BannerCardElement,
    FeaturedCardElement,
    ImageCardElement,
    NextClassCardElement,
    UpcomingClassCardElement,
    CalendarDateSubjectsCardElement,
    WhiteBannerCardElement,
    HomeworkCardElement,
    ProfileCardElement, DateSubjectCardElement,
} from '../../components/Cards/types';
import { UserTypes } from '../../Types/user';

export interface UserType {
    userType: UserTypes;
}

export interface Async {
    isLoading: boolean;
}

export interface PaginationPage {
    total: number;
    current: number;
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

export interface DashboardSchool {
    homework: {
        isLoading: boolean;
        count: number;
    };
    upcomingClasses: {
        isLoading: boolean;
        count: number;
    };
    profile: ProfileCardElement;
    dateSubjectCards: DateSubjectCardElement[];
}

export interface DashboardPersonal {
    previousClasses: {
        isLoading: boolean;
        count: number;
    };
    upcomingClasses: {
        isLoading: boolean;
        count: number;
    };
    profile: ProfileCardElement;
    dateSubjectCards: DateSubjectCardElement[];
}

export interface DashboardPage {
    school: DashboardSchool;
    personal: DashboardPersonal;
}

export interface LiveClassesPage {
    data: ImageCardElement[];
}

export interface RecordedClassesPage {
    data: ImageCardElement[];
}

export interface TutorsPage {
    data: ImageCardElement[];
}

export interface ImageCardElement {
    img: string;
    title: string;
    subTitle?: string;
    date?: string;
    time?: string;
    rating?: string;
}

export interface BannerCardElement {
    img: string;
    name: string;
    subject: string;
    description: string;
    time: string;
}

export interface DateTimeCardElement {
    date: string;
    startTime: string;
    endTime: string;
}

export interface DateSubjectCardElement extends DateTimeCardElement {
    subject: string;
    description: string;
    subTitle: string;
    name: string;
}

export interface NextClassCardElement extends DateSubjectCardElement {
    img: string;
}

export interface FeaturedCardElement {
    imgBig: string;
    imgBigTitle: string;
    imgSmall: string;
    imgSmallTitle: string;
}

export interface UpcomingClassCardElement extends DateSubjectCardElement {
    img: string;
}

export interface CalendarDateSubjectsCardElement {
    date?: string;
    time?: string;
    cards: DateSubjectCardElement[]
}

export interface TutorProfileCardElement {
    name: string;
    city: string;
    country: string;
    rating: string;
    description: string;
    img: string;
}

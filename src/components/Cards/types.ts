export interface ImageCardElement {
    id?: number;
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


export interface WhiteBannerCardElement {
    subject: string;
    tutorsCount: number,
    classesCount: number,
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
    title?: string;
    imgBig: string;
    imgBigTitle: string;
    imgBigSubtitle?: string;
    imgSmall: string;
    imgSmallTitle: string;
    imgSmallSubtitle?: string;
}

export interface UpcomingClassCardElement extends DateSubjectCardElement {
    img: string;
}

export interface CalendarDateSubjectsCardElement {
    date?: string;
    time?: string;
    cards: DateSubjectCardElement[];
}

export interface IndividualSubjectBannerCardElement {
    img: string;
    name: string;
    subject: string;
    description: string;
    time: string;
}
export interface TutorProfileCardElement {
    name: string;
    city: string;
    country: string;
    rating: string;
    description: string;
    img: string;
}

export interface PaymentMethodCardElement {
    type: 'visa' | 'ms';
    ends: string;
    expires: string;
}

export interface HomeworkCardElement {
    id: number;
    title: string;
    subject: string;
    dueDate: string;
    name: string;
    description: string;
    submitted?: boolean;
}

export interface MessageUserCardElement {
    img: string;
    name: string;
    status: string;
    newMessagesCount?: number;
}

export interface CalendarSubjectCardElement {
    img: string;
    time: string;
    description: string;
    name: string;
    subject: string;
}

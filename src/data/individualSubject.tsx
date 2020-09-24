import { IndividualSubjectWhiteBannerCardElement } from '../components/Cards/types';

export interface IndividualSubjectBannerCardElement {
    img: string;
    name: string;
    subject: string;
    description: string;
    time: string;
}

export const bannerCardsIndividualSubject: IndividualSubjectBannerCardElement[] = [
    {
        img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607725/smilegirl_stfagl.jpg',
        name: 'Charlie Ray',
        subject: 'Maths.',
        description: 'An introduction to trigonometry',
        time: 'AED200 / 45mins',
    }
]

export const whiteBannerCardIndividualSubject: IndividualSubjectWhiteBannerCardElement[] = [
    {
        subject: 'Maths.',
        tutorsCount: 143,
        classesCount: 2508,
    },
    {
        subject: 'Languages.',
        tutorsCount: 304,
        classesCount: 1058,
    },
    {
        subject: 'Art.',
        tutorsCount: 103,
        classesCount: 187,
    }
]
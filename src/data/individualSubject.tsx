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
        text: 'Maths. is Best',
    },
    {
        text: 'Arts. is Best',
    }
]
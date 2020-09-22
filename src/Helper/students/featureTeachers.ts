import { BannerCardElement, FeaturedCardElement, ImageCardElement } from '../../components/Cards/types';

export function dataToBannerCards(data: any): BannerCardElement[] {
    return data.map(({ Teacher }: any) => ({
        img: Teacher.User.profile,
        name: `${Teacher.firstName} ${Teacher.lastName}`,
        subject: 'Math.',
        description: 'An introduction to trigonometry.',
        time: 'AED200 / 45min',
    }));
}

export function dataToImageCard(data: any): ImageCardElement[] {
    return data.map(({ Teacher }: any) => ({
        img: Teacher.User.profile,
        title: `${Teacher.firstName} ${Teacher.lastName}\nMath`,
        subTitle: 'AED200/h',
        rating: '4/5',
    }));
}

export function dataToFeaturedCard(data: any): FeaturedCardElement {
    return (
        data.length &&
        data[0] &&
        data[1] && {
            imgSmallTitle: `${data[0].subjectId} - ${data[0].Teacher.firstName} ${data[0].Teacher.lastName}`,
            imgSmall: data[0].Teacher.User.profile,
            imgBigTitle: `${data[1].subjectId} - ${data[1].Teacher.firstName} ${data[1].Teacher.lastName}`,
            imgBig: data[1].Teacher.User.profile,
        }
    );
}

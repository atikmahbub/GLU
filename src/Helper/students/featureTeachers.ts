import { BannerCardElement, FeaturedCardElement, ImageCardElement } from '../../components/Cards/types';

export function dataToBannerCards(data: any): BannerCardElement[] {
    return data.map(({ teacher }: any) => ({
        img: teacher.User.profile,
        name: `${teacher.firstName} ${teacher.lastName}`,
        subject: 'Math.',
        description: 'An introduction to trigonometry.',
        time: 'AED200 / 45min',
    }));
}

export function dataToImageCard(data: any): ImageCardElement[] {
    return data.map(({ teacher, review }: any) => ({
        id: review.teacherId,
        img: teacher.User.profile,
        title: `${teacher.firstName} ${teacher.lastName}\nMath`,
        subTitle: 'AED200/h',
        rating: `${review.ratingAvg}/5`,
    }));
}

export function dataToFeaturedCard(data: any): FeaturedCardElement {
    return (
        data.length &&
        data[0] &&
        data[1] && {
            imgSmallTitle: `${data[0].teacher.firstName} ${data[0].teacher.lastName}`,
            imgSmall: data[0].teacher.User.profile,
            imgBigTitle: `${data[1].teacher.firstName} ${data[1].teacher.lastName}`,
            imgBig: data[1].teacher.User.profile,
        }
    );
}

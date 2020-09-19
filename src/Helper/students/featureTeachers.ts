import { BannerCardElement, FeaturedCardElement, ImageCardElement } from '../../components/Cards/types';

export function dataToBannerCards(data: any): BannerCardElement[] {
    return data.map(({ Teacher, subjectId }: any) => ({
        img: Teacher.document,
        name: `${Teacher.firstName} ${Teacher.lastName}`,
        subject: subjectId,
        description: Teacher.bio,
        time: Teacher.User.profile,
    }));
}

export function dataToImageCard(data: any): ImageCardElement[] {
    return data.map(({ Teacher, subjectId }: any) => ({
        img: Teacher.document,
        title: `${Teacher.firstName} ${Teacher.lastName} ${subjectId}`,
        subTitle: Teacher.bio,
        rating: '4/5',
    }));
}

export function dataToFeaturedCard(data: any): FeaturedCardElement {
    return (
        data.length &&
        data[0] &&
        data[1] && {
            imgSmallTitle: `${data[0].subjectId} - ${data[0].Teacher.firstName} ${data[0].Teacher.lastName}`,
            imgSmall: data[0].Teacher.document,
            imgBigTitle: `${data[1].subjectId} - ${data[1].Teacher.firstName} ${data[1].Teacher.lastName}`,
            imgBig: data[1].Teacher.document,
        }
    );
}

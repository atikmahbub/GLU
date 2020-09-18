import { BannerCardElement, ImageCardElement } from '../../components/Cards/types';

export function dataToBannerCards(data: any): BannerCardElement[] {
    return data.map(({ Teacher, subjectId }: any) => ({
        img: Teacher.document,
        name: `${Teacher.firstName} ${Teacher.lastName}`,
        subject: subjectId,
        description: Teacher.bio,
        time: Teacher.User.profile
    }))
}

export function dataToImageCard(data: any): ImageCardElement[] {
    return data.map(({ Teacher, subjectId }: any) => ({
        img: Teacher.document,
        title: `${Teacher.firstName} ${Teacher.lastName} ${subjectId}`,
        subTitle: Teacher.bio,
        rating: '4/5'
    }))
}

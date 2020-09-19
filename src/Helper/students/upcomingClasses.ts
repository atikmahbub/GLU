import { FeaturedCardElement, NextClassCardElement } from '../../components/Cards/types';

export function dataToNextClassCard({
    coverImage,
    Subject,
    Teacher,
    description,
    price,
    scheduledOn,
    startTime,
    endTime,
}: any): NextClassCardElement {
    return {
        img: coverImage,
        subject: Subject.subjectName,
        description,
        subTitle: price,
        name: `${Teacher.firstName} ${Teacher.lastName}`,
        date: scheduledOn,
        startTime,
        endTime,
    };
}

export function dataToFeaturedCard(data: any): FeaturedCardElement {
    return data.length === 1 ? {
        imgSmall: data[0].coverImage,
        imgSmallTitle: data[0].Subject.subjectName,
        imgBig: data[0].coverImage,
        imgBigTitle: data[0].Subject.subjectName,
    } : {
        imgSmall: data[0].coverImage,
        imgSmallTitle: data[0].Subject.subjectName,
        imgBig: data[1].coverImage,
        imgBigTitle: data[1].Subject.subjectName,
    }
}

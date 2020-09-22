import format from 'date-fns/format'
import { FeaturedCardElement, NextClassCardElement } from '../../components/Cards/types';
import { parseTime } from '../date';

export function dataToNextClassCard({
    Subject,
    Teacher,
    description,
    scheduledOn,
    startTime,
    endTime,
}: any): NextClassCardElement {
    return {
        img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596608147/gluschool/vrplayerboy_ddqot7.jpg',
        subject: Subject.subjectName,
        description,
        subTitle: '75 min',
        name: `${Teacher.firstName} ${Teacher.lastName}`,
        date: format(new Date(scheduledOn), 'MM/dd/yy'),
        startTime: parseTime(startTime),
        endTime: parseTime(endTime),
    };
}

export function dataToFeaturedCard(data: any): FeaturedCardElement {
    return data.length === 1 ? {
        imgSmall: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607726/spectsboy_lspzcn.jpg',
        imgSmallTitle: data[0].Subject.subjectName,
        imgBig: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607724/shorthair_wwigyg.jpg',
        imgBigTitle: data[0].Subject.subjectName,
    } : {
        imgSmall: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607726/spectsboy_lspzcn.jpg',
        imgSmallTitle: data[0].Subject.subjectName,
        imgBig: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607724/shorthair_wwigyg.jpg',
        imgBigTitle: data[1].Subject.subjectName,
    }
}

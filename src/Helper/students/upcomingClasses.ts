import { FeaturedCardElement, NextClassCardElement } from '../../components/Cards/types';
import { parseDate, parseTime } from '../date';

export function dataToNextClassCard({
    description,
    scheduledOn,
    startTime,
    endTime,
    sessionName,
    FreelancerSubjectTeacher,
}: any): NextClassCardElement {
    return {
        img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596608147/gluschool/vrplayerboy_ddqot7.jpg',
        subject: sessionName,
        description,
        subTitle: '75 min',
        name: `${FreelancerSubjectTeacher.Teacher.firstName} ${FreelancerSubjectTeacher.Teacher.lastName}`,
        date: parseDate(scheduledOn),
        startTime: parseTime(startTime),
        endTime: parseTime(endTime),
    };
}

export function dataToFeaturedCard(data: any): FeaturedCardElement {
    return data.length === 1
        ? {
              imgSmall: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607726/spectsboy_lspzcn.jpg',
              imgSmallTitle: data[0].subjectName,
              imgBig: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607724/shorthair_wwigyg.jpg',
              imgBigTitle: data[0].subjectName,
          }
        : {
              imgSmall: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607726/spectsboy_lspzcn.jpg',
              imgSmallTitle: data[0].subjectName,
              imgBig: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607724/shorthair_wwigyg.jpg',
              imgBigTitle: data[1].subjectName,
          };
}

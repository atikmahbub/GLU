import { ImageCardElement } from '../../components/Cards/types';

export function dataToImageCard(data: any[]): ImageCardElement[] {
    return data.map(({ sessionName, price, FreelancerSubjectTeacher }) => ({
        img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607728/spoongirl_nmkxxd.png',
        title: `${sessionName} - ${FreelancerSubjectTeacher.Teacher.firstName} ${FreelancerSubjectTeacher.Teacher.lastName}`,
        subTitle: `AED${price} / 45mins`,
    }));
}

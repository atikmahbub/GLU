import { ImageCardElement } from '../../components/Cards/types';

export function dataToImageCard(data: any[]): ImageCardElement[] {
    return data.map(({ coverImage, sessionName, price, Teacher }) => ({
        img: coverImage,
        title: `${sessionName} - ${Teacher.firstName} ${Teacher.lastName}`,
        subTitle: `AED${price} / 45mins`,
    }));
}

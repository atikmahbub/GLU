import { ImageCardElement } from '../../components/Cards/types';

export function dataToImageCard(data: any[]): ImageCardElement[] {
    return data.map(({ sessionName, price, Teacher }) => ({
        img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607728/spoongirl_nmkxxd.png',
        title: `${sessionName} - ${Teacher.firstName} ${Teacher.lastName}`,
        subTitle: `AED${price} / 45mins`,
    }));
}

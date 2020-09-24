import React, { FC, memo } from 'react';
import FeaturedCard from './FeaturedCard';
import ImageCard from './ImageCard';
import { FeaturedCardElement } from './types';

interface IFeaturedTutorsCard extends FeaturedCardElement {}

const FeaturedTutorsCard: FC<IFeaturedTutorsCard> = ({
    title = 'Featured Tutors',
    imgBig,
    imgBigTitle,
    imgBigSubtitle,
    imgSmall,
    imgSmallTitle,
    imgSmallSubtitle,
}) => {
    return (
        <FeaturedCard title={title}>
            <ImageCard
                bigTitle
                imgAspectRatio="69%"
                title={imgSmallTitle}
                img={imgSmall}
                subTitle={imgSmallSubtitle}
                subTitleVariant={2}
                titleMarginBottomVariant={2}
            />
            <ImageCard
                bigTitle
                imgAspectRatio="112%"
                title={imgBigTitle}
                img={imgBig}
                subTitle={imgBigSubtitle}
                subTitleVariant={2}
                titleMarginBottomVariant={2}
            />
        </FeaturedCard>
    );
};

export default memo(FeaturedTutorsCard);

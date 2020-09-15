import React, { FC, memo } from 'react';
import FeaturedCard from './FeaturedCard';
import ImageCard from './ImageCard';
import { FeaturedCardElement } from './types';

interface IFeaturedTutorsCard extends FeaturedCardElement {}

const FeaturedTutorsCard: FC<IFeaturedTutorsCard> = ({ imgBig, imgBigTitle, imgSmall, imgSmallTitle }) => {
    return (
        <FeaturedCard title="Featured Tutors" link="/">
            <ImageCard bigTitle imgAspectRatio="69%" title={imgSmallTitle} img={imgSmall} />
            <ImageCard bigTitle imgAspectRatio="112%" title={imgBigTitle} img={imgBig} />
        </FeaturedCard>
    )
}

export default memo(FeaturedTutorsCard)

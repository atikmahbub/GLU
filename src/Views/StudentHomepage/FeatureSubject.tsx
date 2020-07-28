import React from 'react';
import HeadingRowContainer from '../../components/HeadingRowContainer';
import commonImg from '../../Assets/images';
import SmallLargeImage from '../../components/SmallLargeImage';

const FeatureSubject: React.FunctionComponent = () => {
    return (
        <div className="feature__container">
            <HeadingRowContainer title="Featured Subjects" link="see all" />
            <SmallLargeImage
                orderOne={1}
                orderTwo={2}
                imageOne={commonImg.chairman}
                imageTwo={commonImg.vrplayerboy}
                titleOne="Business Studies"
                titleTwo="Computer Science"
            />
        </div>
    );
};

export default FeatureSubject;

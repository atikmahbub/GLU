import React from 'react';
import HeadingRowContainer from '../../components/HeadingRowContainer';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';

const PreviousClasses: React.FunctionComponent = () => {
    return (
        <div className="class_container">
            <HeadingRowContainer title="Recorded Classes" link="see all" />
            <div className="row">
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.bookredinggirl}
                        title="Natural selection and evolution Biology - Jeff Lee"
                        subtitle="AED200 / 45mins"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.jumpinggirl}
                        title="Week 3 of a begginers guide Skateboarding - Morris Jarman"
                        subtitle="AED200 / 45mins"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.tablegirl}
                        title="Introducing advanced long devision Maths - Sarah Swan"
                        subtitle="AED200 / 45mins"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.women}
                        title="How to structure narrative in fiction English - Freddy Smith"
                        subtitle="AED200 / 45mins"
                    />
                </div>
            </div>
        </div>
    );
};

export default PreviousClasses;

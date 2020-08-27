import React from 'react';
import PresentRowContainer from '../../Containers/Dashboard/PresentRowContainer';
import PresetGridCol from '../../components/Dashobard/PresetGridCol';
import CardContainer from '../../Containers/Cards/CardContainer';

const PresentRow = () => {
    return (
        <CardContainer>
            <div className="preset_row">
                <div style={{ marginLeft: 0, marginRight: 0 }} className="row">
                    <div className="col-lg-6  bg-white p-0">
                        <div className="pd_right">
                        <PresentRowContainer>
                            <PresetGridCol present="25%" status="present" />
                            <PresetGridCol present="25%" status="present" />
                            <PresetGridCol present="25%" status="present" />
                        </PresentRowContainer>
                        </div>
                    </div>
                    <div className="col-lg-6  bg-white p-0">
                        <div className="pd_left">
                        <PresentRowContainer>
                            <PresetGridCol present="25%" status="present" />
                            <PresetGridCol present="25%" status="present" />
                            <PresetGridCol present="25%" status="present" />
                        </PresentRowContainer>
                        </div>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
};

export default PresentRow;

import React from 'react';
import PresentRowContainer from "../../Containers/Dashboard/PresentRowContainer";
import PresetGridCol from '../../components/Dashobard/PresetGridCol';

const PresentRow = () => {
    return (
        <div className="preset_row">
            <div className="row row__margin">
                <div className="col-lg-6 colum__spacing">
                    <PresentRowContainer>
                       <PresetGridCol present="25%" status="present" />
                       <PresetGridCol present="25%" status="present" />
                       <PresetGridCol present="25%" status="present" />
                    </PresentRowContainer>
                </div>
                <div className="col-lg-6 colum__spacing"></div>
            </div>
        </div>
    );
}

export default PresentRow;

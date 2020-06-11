import React from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { months } from '../../Helper/months';

const FormRow = () => {
    return (
        <div className="row">
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={months}
                    label="Select A Month"
                    getValue={() => {}}
                />
            </div>
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={["2020"]}
                    label="Select A Year"
                    getValue={() => {}}
                />
            </div>
        </div>
    );
};

export default FormRow;

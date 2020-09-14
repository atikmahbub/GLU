import React from 'react';
import SelectFieldUnderline from '../../Inputs/SelectFieldUnderline';
import FormControlInput from '../../Form/FormControlInput';
import { Search } from '@material-ui/icons';

const TableFilter = () => {
    return (
        <div className="filter__column__box">
            <div className="column__box">
                <SelectFieldUnderline
                    className="custom-sm-txt-dashbord"
                    label="Year Group"
                    options={[]}
                    getValue={() => {}}
                />
            </div>
            <div className="column__box">
                <SelectFieldUnderline
                    className="custom-sm-txt-dashbord"
                    label="Form Group"
                    options={[]}
                    getValue={() => {}}
                />
            </div>
            <div className="column__box">
                <SelectFieldUnderline
                    className="custom-sm-txt-dashbord"
                    label="Subject"
                    options={[]}
                    getValue={() => {}}
                />
            </div>
            <div className="column__box">
                <SelectFieldUnderline
                    className="custom-sm-txt-dashbord"
                    label="Teacher"
                    options={[]}
                    getValue={() => {}}
                />
            </div>
            <div className="column__box">
                <SelectFieldUnderline
                    className="custom-sm-txt-dashbord"
                    label="Activity"
                    options={[]}
                    getValue={() => {}}
                />
            </div>
            <div className="column__box">
                <SelectFieldUnderline
                    className="custom-sm-txt-dashbord"
                    label="Department"
                    options={[]}
                    getValue={() => {}}
                />
            </div>
            <div className="column__box">
                <FormControlInput name="" id="" fullWidth={true} placeholder="Search" value="" icon={<Search/>} onChange={() => {}} />
            </div>
        </div>
    );
};

export default TableFilter;

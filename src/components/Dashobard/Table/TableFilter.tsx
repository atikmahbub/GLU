import React from 'react';
import SelectFieldUnderline from '../../Inputs/SelectFieldUnderline';

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
    </div>
    );
}

export default TableFilter;

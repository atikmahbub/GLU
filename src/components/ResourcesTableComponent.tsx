

import React from 'react';

import { Typography } from '@material-ui/core';
interface props{
    title?:string;
    subtitle?:string;
}
const ResourcesTableComponent: React.FunctionComponent <props>= ({title,subtitle}) => {
    return (
        <>
            <div className="resources_table_component">
                <div className="col-md-12">
                    <Typography className="resources_text">{title}</Typography>
                    <Typography className="resources_subtext">{subtitle}</Typography>
                </div>
            </div>
        </>
    );
};

export default ResourcesTableComponent;

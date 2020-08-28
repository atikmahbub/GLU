import React from 'react';

import { Typography } from '@material-ui/core';

const ResourcesTableComponent: React.FunctionComponent = () => {
    return (
        <>
            <div className="resources_table_component">
                <div className="col-md-12">
                    <Typography className="resources_text">AQA Algebra</Typography>
                    <Typography className="resources_subtext">Download</Typography>
                </div>
            </div>
        </>
    );
};

export default ResourcesTableComponent;

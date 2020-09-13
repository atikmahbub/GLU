import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
interface props{
    heading?:string;
}
const ReusableSmallButton: React.FunctionComponent <props>= ({heading}) => {
    return (
        <>
            <div className="reusable_smallbutton">
                <Typography className="small_button_text">{heading}</Typography>
            </div>
        </>
    );
};

export default ReusableSmallButton;

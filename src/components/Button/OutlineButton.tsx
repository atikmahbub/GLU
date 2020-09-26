import React from 'react';
import { Button } from '@material-ui/core';

interface props {
    text?: string;
    btnClick?: () => void;
    buttonType?: any;
    style?:any
}
const OutlineButton: React.FunctionComponent<props> = ({ text, btnClick, buttonType, ...props }) => {
    return (
        <Button className="outline-button" {...props} type={buttonType} onClick={btnClick}>
            {text}
        </Button>
    );
};

export default OutlineButton;

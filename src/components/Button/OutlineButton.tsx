import React from 'react';
import { Button } from '@material-ui/core';

interface props {
    text?: string;
    btnClick?: () => void;
    buttonType?: any;
}
const OutlineButton: React.FunctionComponent<props> = ({ text, btnClick, buttonType }) => {
    return (
        <Button className="outline-button" type={buttonType} onClick={btnClick}>
            {text}
        </Button>
    );
};

export default OutlineButton;

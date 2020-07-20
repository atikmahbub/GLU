import React from 'react';
import { Button } from '@material-ui/core';

interface props{
    text?: string;
    btnClick?: ()=> void
}
const OutlineButton: React.FunctionComponent<props> = ({text, btnClick}) => {
    return (
    <Button className="outline-button" onClick={btnClick}>{text}</Button>
    );
}

export default OutlineButton;

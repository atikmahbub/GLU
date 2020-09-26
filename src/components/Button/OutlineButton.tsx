import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    spacing: {
        marginTop: (props: any) => props.mt,
        marginBottom: (props: any) => props.mb,
        width: (props: any) => props.width,
    },
});
interface props {
    text?: string;
    btnClick?: () => void;
    buttonType?: any;
    style?: any;
    mt?: string;
    mb?: string;
    width?: string;
}
const OutlineButton: React.FunctionComponent<props> = ({ text, btnClick, buttonType, mt, mb, width, ...props }) => {
    const classes = useStyles({ mt, mb, width });
    return (
        <Button className={`outline-button ${classes.spacing}`} {...props} type={buttonType} onClick={btnClick}>
            {text}
        </Button>
    );
};

export default OutlineButton;

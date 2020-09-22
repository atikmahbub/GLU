import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import commonImg from '../../Assets/images';
import { colors } from '../../Styles/colors';
import InputWithLabel from '../Inputs/InputWithLabel';
import classNames from 'classnames';

const useStyles = makeStyles({
    show: {
        opacity: 1,
        transition: 'all 0.3s',
    },
    hide: {
        opacity: 0,
        transition: 'all 0.3s',
    },
    parent: {
        maxWidth: '20rem',
        boxShadow: '0 -2px 20px -5px rgba(0,0,0,0.3)',
        marginTop: '1rem',
        position: 'relative',
    },
    arrow: {
        width: 0,
        borderRight: '1rem solid transparent',
        borderLeft: '1rem solid transparent',
        borderTop: '1rem solid transparent',
        borderBottom: '1rem solid #fff',
        position: 'absolute',
        top: '-2rem',
        left: 0,
    },
    photo: {
        width: '3rem',
        height: '3rem',
        objectFit: 'cover',
    },
    title: {
        fontSize: '1.5rem',
        color: colors.black,
        marginLeft: '1rem',
    },
});

interface props {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    palceholder?: string;
}
const SearchProfilePreview: React.FC<props> = ({ value, onChange, palceholder }) => {
    const myclass = useStyles();
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(false);
    };
    useEffect(() => {
        if (value !== '') {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [value]);

    return (
        <Box>
            <InputWithLabel
                fieldName="Students"
                placeholder={palceholder}
                value={value}
                onChange={onChange}
                onBlur={handleShow}
            />
            <Box className={classNames(myclass.parent, show ? myclass.show : myclass.hide)}>
                <Box className={myclass.arrow}></Box>
                <Grid container alignItems="center" justify="flex-start">
                    <img src={commonImg.photo} className={myclass.photo} alt="" />
                    <Typography className={myclass.title}>FirstName</Typography>
                </Grid>
            </Box>
        </Box>
    );
};

export default SearchProfilePreview;

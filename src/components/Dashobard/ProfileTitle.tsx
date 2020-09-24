import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import commonImg from '../../Assets/images';
import { Typography, Box, Grid, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    input: {
        border: 'none',
        outline: 'none',
        fontSize: '1.25rem',
        fontFamily: 'inherit',
        color: colors.primary,
        marginTop: '0.5rem',
        marginLeft: '1rem',
    },
});

interface props {
    hideBtns?: boolean;
    detailName?: string;
    data?: any;
    showDropDown?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
}
const ProfileTitle: React.FunctionComponent<props> = ({
    hideBtns,
    detailName,
    data,
    showDropDown,
    onChange,
    value,
}) => {
    const classes = useStyles();
    return (
        <CardContainer>
            <div className="top_container">
                <div className="image_title_cotainer">
                    <img className="profile" src={commonImg.blueshirtman} alt="" />
                    <div className="title_container">
                        <Typography className="heading">{data?.name}</Typography>
                        <Typography className="title">N/A</Typography>
                    </div>
                </div>
                {hideBtns ? (
                    <Grid container alignItems="center" justify="flex-end">
                        <Typography className="detail_name">{detailName}</Typography>
                        {showDropDown && (
                            <select className={classes.input} value={value} onChange={onChange}>
                                <option value="1">Term 1</option>
                                <option value="2">Term 2</option>
                                <option value="3">Term 3</option>
                            </select>
                        )}
                    </Grid>
                ) : (
                    <div className="button_container">
                        <Typography className="blue-text">Print</Typography>
                        <Typography className="blue-text visible">Visit details</Typography>
                    </div>
                )}
            </div>
        </CardContainer>
    );
};

export default ProfileTitle;

import React from 'react';
import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import { FiberManualRecord } from '@material-ui/icons';

const useStyle = makeStyles(({
    rootParent: {
        borderLeft: '1px solid #e7e7e7',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    flexWrap: {
        flexWrap: 'nowrap',
    },
    icon: {
        fontSize: '1rem',
        marginBottom: '0.5rem',
        marginRight: '1rem',
    },
    mediumImg: {
        width: (props:any)=>props.imgwidth,
        maxHeight:(props:any)=> props.imgHeight,
        marginRight: '2rem',
    },
    mediumTitle: {
        fontSize: (props:any)=> props.fontSize,
        lineHeight:(props:any)=> props.fontSize,
        color: '#000',
    },
    mediumSmallTitle: {
        fontSize:(props:any)=> props.titleFontSize,
        color: '#5F5F5F',
    },
    mediumBottomText: {
        fontSize:(props:any)=> props.fontSize,
        lineHeight:(props:any)=> props.fontSize,
        color: '#000',
        marginTop: (props:any)=> props.marginTop,
    },
}));
interface props{
    imgwidth:any;
    imgHeight:any;
    fontSize:any;
    titleFontSize:any;
    marginTop:any;
}
const SmallImageText:React.FC<props> = ({imgwidth, imgHeight, fontSize, titleFontSize, marginTop}) => {
    const classes = useStyle({imgwidth, imgHeight, fontSize, titleFontSize, marginTop});
    return (
        <div>
            <Grid container className={classes.flexWrap} direction="row" justify="flex-start" alignItems="center">
                <img className={classes.mediumImg} src={commonImg.photo} alt="" />
                <Box component="div">
                    <Typography className={classes.mediumTitle}>
                        <FiberManualRecord className={classes.icon} />
                        9.00-11.30am
                    </Typography>
                    <Typography className={classes.mediumSmallTitle}>Sarah Swan</Typography>
                    <Typography className={classes.mediumBottomText}>
                        How to structure narrative in fiction English
                    </Typography>
                </Box>
            </Grid>
        </div>
    );
};

export default SmallImageText;

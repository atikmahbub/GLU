import React from 'react';
import { Box, makeStyles, Grid } from '@material-ui/core';
import commonImg from '../../Assets/images';

const useStyle = makeStyles(({
    parent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '8rem',
        position: 'relative',
        marginTop: (props:any)=>props.mt,
        marginBottom: '4rem',
    },
    image: {
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        position: 'absolute',
    },
}));

interface props{
    mt:any
}
const ViewerOverlay: React.FC<props> = ({mt}) => {
    const classes = useStyle({mt});
    return (
        <Box className={classes.parent} component="div">
            <img style={{ left: 0 }} className={classes.image} src={commonImg.blueshirtman} alt="" />
            <img style={{ left: 10 }} className={classes.image} src={commonImg.readinggirl} alt="" />
            <img style={{ left: 20 }} className={classes.image} src={commonImg.bookreadingboy} alt="" />
            <img style={{ left: 30 }} className={classes.image} src={commonImg.scaffgirl} alt="" />
            <img style={{ left: 40 }} className={classes.image} src={commonImg.shorthair} alt="" />
            <Grid
                style={{ left: 50, background: '#145DFF', color: '#fff', fontSize: '0.8rem', display: 'flex' }}
                className={classes.image}
                justify="center"
                alignItems="center"
            >
                20+
            </Grid>
        </Box>
    );
};

export default ViewerOverlay;

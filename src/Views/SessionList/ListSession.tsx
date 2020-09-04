import React from 'react';
import { Box, makeStyles, Grid } from '@material-ui/core';
import SmallImageText from './SmallImageText';
import ViewerOverlay from './ViewerOverlay';

const useStyles = makeStyles({
    parent: {
        borderTop: '1px solid  #e7e7e7',
        paddingTop: '3rem',
        paddingBottom: '3rem',
    },
});
const ListSession = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {[1, 2, 3, 4].map(() => (
                <Box component="div" className={classes.parent}>
                    <Grid container spacing={0}>
                        <Grid item xs={8}>
                            <SmallImageText
                                imgwidth="9.75rem"
                                imgHeight="9.25rem"
                                fontSize="1.375rem"
                                titleFontSize="1.125rem"
                                marginTop="0.5rem"
                            />
                        </Grid>
                        <Grid container item xs={4} direction="row" alignItems="flex-start" justify="flex-end">
                            <ViewerOverlay mt="0.8rem" />
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </React.Fragment>
    );
};

export default ListSession;

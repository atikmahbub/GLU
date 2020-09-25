import React, { FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Drawer, { IDrawer } from '../../../components/Drawer';
import AspectRatioImgCard from '../../../components/Cards/AspectRationImgCard';
import TitleBig from '../../../components/Typographies/TitleBig';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import TextLeftIcon from '../../../components/Typographies/TextLeftIcon';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import { UserType } from '../../Pages/types';

const useStyles = makeStyles({
    root: {
        padding: '0 3.125rem 9.375rem 6.25rem',
    },
    imgContainer: {
        marginBottom: '3.875rem',
    },
    titleContainer: {
        marginBottom: '3rem',
    },
    iconText: {
        marginRight: '1.875rem',
    },
    iconTextContainer: {
        marginBottom: '4.6875rem',
    },
    infoContainer: {
        marginBottom: '4.375rem',
    },
    button: {
        marginRight: '1.25rem',
    },
    price: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        color: '#5F5F5F',
    },
    buttonContainer: {
        marginBottom: '4.375rem',
    },
    description: {
        color: '#5F5F5F',
    },
    buttonBlue: {
        color: '#2267FF',
        borderColor: '#2267FF',
        '&:hover': {
            color: '#2267FF',
        }
    },
    textBlue: {
        color: '#2267FF'
    }
});

interface IClassPurchaseDrawer extends IDrawer, UserType {}

const ClassPurchaseDrawer: FC<IClassPurchaseDrawer> = ({ open, onClose, userType }) => {
    const classes = useStyles();
    const [confirm, setConfirm] = useState(false);

    return (
        <Drawer open={open} onClose={onClose} width="57vw">
            <Grid container direction="column" className={classes.root}>
                <Grid container className={classes.imgContainer}>
                    <Grid container item xs={6}>
                        <AspectRatioImgCard
                            ratio="77%"
                            img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607728/spoongirl_nmkxxd.png"
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.titleContainer}>
                    <TitleBig>Introducing advanced long devision</TitleBig>
                </Grid>
                <Grid container className={classes.iconTextContainer}>
                    <TextLeftIcon icon="icon-Favourites_Nav" text="Favourite" className={classes.iconText} />
                    <TextLeftIcon icon="icon-Available_Slots" text="6 available slots" />
                </Grid>
                <Grid container className={classes.infoContainer}>
                    <Grid container direction="column" item xs={5}>
                        <TitlePrimary>19/07/20</TitlePrimary>
                        <TitlePrimary>9.15-10.15am</TitlePrimary>
                    </Grid>
                    <Grid container direction="column" item xs={7}>
                        <TitlePrimary>Frankie Smith</TitlePrimary>
                        <TitlePrimary>Maths</TitlePrimary>
                    </Grid>
                </Grid>
                {confirm ? (
                    <Grid container alignItems="center" className={classes.buttonContainer}>
                        <ButtonPrimary
                            variant="outlined"
                            outlinedVariant={2}
                            className={classNames(classes.button, classes.buttonBlue)}
                            component={Link}
                            to={`/${userType}/wallet`}
                        >
                            Confirm
                        </ButtonPrimary>
                        <Typography className={classNames(classes.price, classes.textBlue)}>AED200</Typography>
                    </Grid>
                ) : (
                    <Grid container alignItems="center" className={classes.buttonContainer}>
                        <ButtonPrimary
                            variant="outlined"
                            outlinedVariant={2}
                            className={classes.button}
                            onClick={() => setConfirm(true)}
                        >
                            Purchase
                        </ButtonPrimary>
                        <Typography className={classes.price}>AED200</Typography>
                    </Grid>
                )}
                <Grid container direction="column">
                    <TextPrimary className={classes.description}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </TextPrimary>
                </Grid>
            </Grid>
        </Drawer>
    );
};

export default memo(ClassPurchaseDrawer);

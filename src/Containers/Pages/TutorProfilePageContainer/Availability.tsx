import React, { FC, memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardsGrid from '../../CardsGrid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import CardsGridContainer from '../../CardsGridContainer';
import FormControlSelect from '../../../components/Form/FormControlSelect';
import FormControlInput from '../../../components/Form/FormControlInput';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';

const useStyles = makeStyles({
    limited: {
        fontSize: '1.5625rem',
        lineHeight: '1.5625rem',
        paddingLeft: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
            content: '""',
            display: 'block',
            width: '0.5em',
            height: '0.5em',
            background: '#FF0000',
            borderRadius: '50%',
            position: 'absolute',
            left: 0,
        },
    },
    descriptionContainer: {
        marginBottom: '4.0625rem',
    },
    label: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
    input: {
        '& select': {
            fontSize: '1.5625rem',
            lineHeight: '1.875rem',
        },
        '& input': {
            fontSize: '1.5625rem',
            lineHeight: '1.875rem',
        },
    },
    formGroupContainer: {
        marginBottom: '2.5rem'
    },
    button: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        paddingLeft: '3.25rem',
        paddingRight: '3.25rem',
        marginRight: '1.25rem'
    },
    price: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        color: '#5F5F5F'
    },
});

const Availability: FC = () => {
    const classes = useStyles();
    return (
        <CardsGridContainer paddingTopVariant={2} paddingBottomVariant={2}>
            <CardsGrid rows={2}>
                <Grid container direction="column">
                    <Typography className={classes.limited}>Limited Availablitiy</Typography>
                </Grid>
                <Grid container>
                    <Grid container direction="column">
                        <Grid container direction="column" className={classes.descriptionContainer}>
                            <TitlePrimary>
                                I am an American author, life coach, and philanthropist. Known for my infomercials,
                                seminars, and self-help books including the books Unlimited Power and Awaken the Giant
                                Within. In 2015 and 2016 I was listed on the Worth Magazine Power 100 list.
                            </TitlePrimary>
                        </Grid>
                        <Grid container>
                            <Grid container direction="column" item xs={6}>
                                <Grid container className={classes.formGroupContainer}>
                                    <FormControlSelect
                                        fullWidth
                                        value=""
                                        options={[]}
                                        onChange={() => {}}
                                        placeholder="Maths"
                                        label="Subject"
                                        inputRootClassName={classes.input}
                                        labelClassName={classes.label}
                                    />
                                </Grid>
                                <Grid container className={classes.formGroupContainer}>
                                    <FormControlInput
                                        fullWidth
                                        id="tutor_book_date"
                                        name="date"
                                        value=""
                                        onChange={() => {}}
                                        label="Date"
                                        labelClassName={classes.label}
                                        inputRootClassName={classes.input}
                                        placeholder="10/07/20"
                                    />
                                </Grid>
                                <Grid container className={classes.formGroupContainer}>
                                    <CardsGrid rows={2}>
                                        <Grid container>
                                            <FormControlInput
                                                fullWidth
                                                id="tutor_book_start-time"
                                                name="startTime"
                                                value=""
                                                onChange={() => {}}
                                                label="Start Time"
                                                labelClassName={classes.label}
                                                inputRootClassName={classes.input}
                                                placeholder="10.00am"
                                            />
                                        </Grid>
                                        <Grid container>
                                            <FormControlInput
                                                fullWidth
                                                id="tutor_book_end-time"
                                                name="endTime"
                                                value=""
                                                onChange={() => {}}
                                                label="End Time"
                                                labelClassName={classes.label}
                                                inputRootClassName={classes.input}
                                                placeholder="12.30am"
                                            />
                                        </Grid>
                                    </CardsGrid>
                                </Grid>
                                <Grid container alignItems="center">
                                    <ButtonPrimary variant="outlined" className={classes.button}>
                                        Book
                                    </ButtonPrimary>
                                    <Typography className={classes.price}>AED200</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardsGrid>
        </CardsGridContainer>
    );
};

export default memo(Availability);

import React, { FC } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import useMenuList from '../../Hooks/useMenuList';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import ColumnsContainer from '../ColumnsContainer';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import TitleBig from '../../components/Typographies/TitleBig';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import FormControlAudio from '../../components/Form/FormControlAudio';
import FormControlUpload from '../../components/Form/FormControlUpload';
import FormGroup from '../../components/Form/FormGroup';
import { UserType } from './types';
import FormControlInput from '../../components/Form/FormControlInput';
import PageFooter from '../../components/PageFooter';

const useStyles = makeStyles({
    iconMessage: {
        fontSize: '2rem',
        marginLeft: '1.25rem',
    },
    text: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
    },
    textContainer: {
        marginBottom: '1.5625rem',
    },
    download: {
        padding: '0.625rem 0',
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    booksContainer: {
        paddingBottom: '4.6875rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    },
    submitContainer: {
        paddingTop: '3.125rem',
        paddingBottom: '5rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    },
    submitTitle: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
        marginBottom: '1.5625rem',
    },
    offlineSubmittedContainer: {
        paddingTop: '3.125rem',
    },
});

interface IIndividualHomeworkPageContainer extends UserType {}

// TODO Split the component to multiple components
const IndividualHomeworkPageContainer: FC<IIndividualHomeworkPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            userType={userType}
            background="secondary"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <Grid container alignItems="center">
                            <TitlePrimary>Mr J Cole </TitlePrimary>
                            <i className={classNames('icon-Message', classes.iconMessage)} />
                        </Grid>
                    </Grid>
                    <Grid container direction="column">
                        <Grid container>
                            <TitleBig>
                                Introducing Advanced Linear Alegbra.
                                <br />
                                Maths
                            </TitleBig>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTopVariant={2} paddingBottom={false}>
                <CardsGrid rows={2}>
                    <Grid container>
                        <Grid container direction="column">
                            <TitlePrimary>Due</TitlePrimary>
                            <TitlePrimary>11/08/20</TitlePrimary>
                            <TitlePrimary>9.30am</TitlePrimary>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container direction="column">
                            <TitlePrimary>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                            </TitlePrimary>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTopVariant={2}>
                <ColumnsContainer
                    leftContent={
                        <Grid container direction="column">
                            <Grid container>
                                <TitlePrimary>Resources</TitlePrimary>
                            </Grid>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            <Grid container direction="column">
                                <Grid container direction="column" className={classes.booksContainer}>
                                    <ColumnsContainer
                                        topBorder={false}
                                        leftContent={
                                            <Grid container direction="column">
                                                <Grid container direction="column" className={classes.textContainer}>
                                                    <Typography className={classes.text}>Text books</Typography>
                                                </Grid>
                                                <Grid container direction="column" className={classes.textContainer}>
                                                    <Typography className={classes.text}>AQA Algebra</Typography>
                                                    <ButtonPrimary color="secondary" className={classes.download}>
                                                        Download
                                                    </ButtonPrimary>
                                                </Grid>
                                                <Grid container direction="column">
                                                    <Typography className={classes.text}>
                                                        Algebra for beginners
                                                    </Typography>
                                                    <ButtonPrimary color="secondary" className={classes.download}>
                                                        Download
                                                    </ButtonPrimary>
                                                </Grid>
                                            </Grid>
                                        }
                                        rightContent={
                                            <Grid container direction="column">
                                                <Grid container direction="column" className={classes.textContainer}>
                                                    <Typography className={classes.text}>Audio clips</Typography>
                                                </Grid>
                                                <Grid container direction="column">
                                                    <FormControlAudio title="Extract from AQA Algebra" />
                                                </Grid>
                                            </Grid>
                                        }
                                    />
                                </Grid>
                                <Grid container direction="column" className={classes.submitContainer}>
                                    <Typography className={classes.submitTitle}>Homework</Typography>
                                    <FormGroup>
                                        <FormControlUpload max={500} />
                                    </FormGroup>
                                    <FormGroup marginBottomVariant={2}>
                                        <Grid container>
                                            <Grid container item xs={10}>
                                                <FormControlInput
                                                    fullWidth
                                                    label="Comment"
                                                    id="submit-comment"
                                                    name="comment"
                                                    value=""
                                                    onChange={() => {}}
                                                    fontSizeVariant={2}
                                                />
                                            </Grid>
                                        </Grid>
                                    </FormGroup>
                                    <ButtonPrimary variant="outlined" outlinedVariant={2}>
                                        Submit
                                    </ButtonPrimary>
                                </Grid>
                                <Grid container direction="column" className={classes.offlineSubmittedContainer}>
                                    <Typography className={classes.submitTitle}>
                                        Submitted your homework physically?
                                    </Typography>
                                    <ButtonPrimary variant="outlined" outlinedVariant={2}>
                                        Complete
                                    </ButtonPrimary>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default IndividualHomeworkPageContainer;

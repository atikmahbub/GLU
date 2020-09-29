import React, { FC } from 'react';
import classNames from 'classnames';
import { UserType } from './types';
import ReactPlayer from 'react-player';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import useMenuList from '../../Hooks/useMenuList';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import TitleBig from '../../components/Typographies/TitleBig';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextLeftIcon from '../../components/Typographies/TextLeftIcon';
import AspectRatioImgCard from '../../components/Cards/AspectRationImgCard';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import ColumnsContainer from '../ColumnsContainer';
import TextPrimary from '../../components/Typographies/TextPrimary';
import { tags } from '../../Views/StudentsModule/Reports/data';
import Tag from '../../components/Tag';
import FormControlAudio from '../../components/Form/FormControlAudio';
import NextClassCard from '../../components/Cards/NextClassCard';
import PageFooter from '../../components/PageFooter';

const useStyles = makeStyles({
    icon: {
        fontSize: '1.5rem',
        marginLeft: '1.25rem'
    },
    titleContainer: {
        marginBottom: '1.875rem',
    },
    textIcon: {
        marginRight: '1.25rem',
    },
    tagsTitleContainer: {
        marginBottom: '1.5625rem',
    },
    textContainer: {
        marginBottom: '1.5625rem',
    },
    download: {
        padding: '0.625rem 0',
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
});

interface IWatchRecordedClassPageContainer extends UserType {}

const WatchRecordedClassPageContainer: FC<IWatchRecordedClassPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            background="secondary"
            userType={userType}
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <Grid container alignItems="center">
                            <TitlePrimary>Jordan Day</TitlePrimary>
                            <i className={classNames('icon-Message', classes.icon)} />
                        </Grid>
                    </Grid>
                    <Grid container direction="column">
                        <Grid container direction="column">
                            <Grid container className={classes.titleContainer}>
                                <TitleBig>How to structure narrative in fiction.</TitleBig>
                                <TitleBig>English</TitleBig>
                            </Grid>
                            <Grid container>
                                <ButtonPrimary color="secondary">
                                    <TextLeftIcon icon="icon-Favourite" text="Favourite" className={classes.textIcon} />
                                </ButtonPrimary>
                                <ButtonPrimary color="secondary">
                                    <TextLeftIcon icon="icon-Copy_Link" text="Copy link" />
                                </ButtonPrimary>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer background="secondary" paddingTop={false}>
                <Grid container item xs={3}>
                    <Grid container direction="column">
                        <TitlePrimary>00.00/</TitlePrimary>
                        <TitlePrimary>05.20</TitlePrimary>
                    </Grid>
                </Grid>
                <Grid container item xs={9}>
                    <AspectRatioImgCard
                        ratio="65%"
                        content={
                            <ReactPlayer url="https://www.youtube.com/watch?v=kn3ss_0J4W8" width="100%" height="100%" />
                        }
                    />
                </Grid>
            </CardsGridContainer>
            <CardsGridContainer paddingTopVariant={2} paddingBottomVariant={2}>
                <CardsGrid rows={2}>
                    <Grid container>
                        <TitlePrimary>
                            Class
                            <br />
                            Summary
                        </TitlePrimary>
                    </Grid>
                    <Grid container>
                        <TitlePrimary>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolore magna aliquyam
                            erat.
                        </TitlePrimary>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false} paddingBottomVariant={2}>
                <ColumnsContainer
                    topBorder={false}
                    leftContent={<div />}
                    rightContent={
                        <Grid>
                            <Grid container className={classes.tagsTitleContainer}>
                                <TextPrimary>Tags</TextPrimary>
                            </Grid>
                            <Grid container item xs={9}>
                                {tags.map((tag, index) => (
                                    <Tag key={index} title={tag} />
                                ))}
                            </Grid>
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false}>
                <ColumnsContainer
                    leftContent={
                        <Grid container direction="column">
                            <TitlePrimary>Resources</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            <ColumnsContainer
                                topBorder={false}
                                leftContent={
                                    <Grid container direction="column">
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <TextPrimary>Text books</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <TextPrimary>AQA Algebra</TextPrimary>
                                            <ButtonPrimary color="secondary" className={classes.download}>
                                                Download
                                            </ButtonPrimary>
                                        </Grid>
                                        <Grid container direction="column">
                                            <TextPrimary>Algebra for beginners</TextPrimary>
                                            <ButtonPrimary color="secondary" className={classes.download}>
                                                Download
                                            </ButtonPrimary>
                                        </Grid>
                                    </Grid>
                                }
                                rightContent={
                                    <Grid container direction="column">
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <TextPrimary>Audio clips</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column">
                                            <FormControlAudio title="Extract from AQA Algebra" />
                                        </Grid>
                                    </Grid>
                                }
                            />
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <NextClassCard
                title="Watch Next"
                background="secondary"
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607731/teacherblueshirt_mwwcwo.jpg"
                subject="English"
                description="Moving forward with a strong narrative"
                subTitle="45min"
                name="Jeff Lee"
                date="24/07/20"
            />
            <PageFooter background="secondary" />
        </NavigationMenu>
    );
};

export default WatchRecordedClassPageContainer;

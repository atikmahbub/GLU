import React, { FC, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import { UserTypes } from '../../Types/user';
import { createMenuList } from '../../Helper/menus';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import TutorProfileCard from '../../components/Cards/TutorProfileCard';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import TitlePrimary from '../../components/Typographies/TitlePrimary';

const useStyles = makeStyles({
    limited: {
        fontSize: '1.5625rem',
        lineHeight: '1.5625rem',
    },
});

interface ITutorProfilePageContainer {
    userType: UserTypes;
}

const TutorProfilePageContainer: FC<ITutorProfilePageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMemo(() => createMenuList(userType), [userType]);
    return (
        <NavigationMenu
            absolute
            colorWhite
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <TutorProfileCard
                name="Jen Holden"
                city="London"
                country="UK"
                rating="5/5"
                description="Primary, Secondary"
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596608142/gluschool/smilegirl_ellmdm.jpg"
            />
            <CardsGridContainer paddingTopVariant={2} paddingBottomVariant={2}>
                <CardsGrid rows={2}>
                    <Grid container>
                        <Typography className={classes.limited}>Limited Availablitiy</Typography>
                    </Grid>
                    <Grid container>
                        <Grid container direction="column">
                            <TitlePrimary>
                                I am an American author, life coach, and philanthropist. Known for my infomercials,
                                seminars, and self-help books including the books Unlimited Power and Awaken the Giant
                                Within. In 2015 and 2016 I was listed on the Worth Magazine Power 100 list.
                            </TitlePrimary>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
        </NavigationMenu>
    );
};

export default TutorProfilePageContainer;

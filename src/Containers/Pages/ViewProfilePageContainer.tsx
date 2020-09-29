import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from '../../components/NavigationMenu';
import { UserType } from './types';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import ProfileCard from '../../components/Cards/ProfileCard';
import useMenuList from '../../Hooks/useMenuList';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import ColumnsContainer from '../ColumnsContainer';

const useStyles = makeStyles({});

interface IViewProfilePageContainer extends UserType {}

const ViewProfilePageContainer: FC<IViewProfilePageContainer> = ({ userType }) => {
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
            <ProfileCard
                editLink={`/${userType}/profile/edit`}
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596608147/gluschool/vrplayerboy_ddqot7.jpg"
                name="Test test"
                email="test@te.cc"
                phone="33121"
                address="12312"
                background="secondary"
            />
            <CardsGridContainer paddingBottomVariant={2} paddingTopVariant={2}>
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <TitlePrimary>About</TitlePrimary>
                    </Grid>
                    <Grid container direction="column">
                        <TitlePrimary>
                            I’m Frank, a secondary Student at GEMS school in Dubai. Currently studying Maths, Business
                            Studies and History.
                        </TitlePrimary>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false}>
                <ColumnsContainer
                    leftContent={
                        <Grid container direction="column">
                            <TitlePrimary>Education</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            12
                        </Grid>
                    }
                />
            </CardsGridContainer>
        </NavigationMenu>
    );
};

export default ViewProfilePageContainer;

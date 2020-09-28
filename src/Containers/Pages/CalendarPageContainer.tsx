import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { UserType } from './types';
import NavigationMenu from '../../components/NavigationMenu';
import useMenuList from '../../Hooks/useMenuList';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';

interface ICalendarPageContainer extends UserType {}

const CalendarPageContainer: FC<ICalendarPageContainer> = ({ userType }) => {
    const menuList = useMenuList(userType)
    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer>
                123
            </CardsGridContainer>
        </NavigationMenu>
    )
}

export default CalendarPageContainer

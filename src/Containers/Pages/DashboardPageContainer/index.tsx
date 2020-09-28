import React, { FC, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../../CardsGridContainer';
import { Tab, Tabs } from '../../../components/Tabs';
import School from './School';
import PageFooter from '../../../components/PageFooter';
import Personal from './Personal';
import useMenuList from '../../../Hooks/useMenuList';
import { DashboardPage, UserType } from '../types';

const useStyles = makeStyles({
    tabsContainer: {
        paddingBottom: '2.4375rem',
    },
    tab: {
        fontSize: '2.625rem',
        marginRight: '1.25rem',
    },
});

interface IDashboardPageContainer extends DashboardPage, UserType {}

const DashboardPageContainer: FC<IDashboardPageContainer> = ({ userType, school, personal }) => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('personal');
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            userType={userType}
            background="secondary"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer background="secondary" rootClassName={classes.tabsContainer}>
                <Tabs value={activeTab} onChange={(_, tab) => setActiveTab(tab)}>
                    <Tab value="personal" label="Personal" className={classes.tab} />
                    <Tab value="school" label="School" className={classes.tab} />
                </Tabs>
            </CardsGridContainer>
            {activeTab === 'school' && <School userType={userType} {...school} />}
            {activeTab === 'personal' && <Personal userType={userType} {...personal} />}
            <PageFooter background="secondary" />
        </NavigationMenu>
    );
};

export default DashboardPageContainer;

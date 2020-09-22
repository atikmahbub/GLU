import React, { FC, useMemo, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../../CardsGridContainer';
import { Tab, Tabs } from '../../../components/Tabs';
import { createMenuList } from '../../../Helper/menus';
import { UserTypes } from '../../../Types/user';
import School from './School';
import PageFooter from '../../../components/PageFooter';
import Personal from './Personal';

const useStyles = makeStyles({
    tabsContainer: {
        paddingBottom: '2.4375rem',
    },
    tab: {
        fontSize: '2.625rem',
        marginRight: '1.25rem',
    },
});

interface IDashboardPageContainer {
    userType: UserTypes;
}

const DashboardPageContainer: FC<IDashboardPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('personal');
    const menuList = useMemo(() => createMenuList(userType), [userType]);
    return (
        <NavigationMenu
            absolute
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
            {activeTab === 'school' && <School />}
            {activeTab === 'personal' && <Personal userType={userType} />}
            <PageFooter background="secondary" />
        </NavigationMenu>
    );
};

export default DashboardPageContainer;

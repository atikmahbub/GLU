import React, { FC, useMemo } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { UserTypes } from '../../Types/user';
import { createMenuList } from '../../Helper/menus';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import TutorProfileCard from '../../components/Cards/TutorProfileCard';

interface ITutorProfilePageContainer {
    userType: UserTypes;
}

const TutorProfilePageContainer: FC<ITutorProfilePageContainer> = ({ userType }) => {
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
        </NavigationMenu>
    );
};

export default TutorProfilePageContainer;

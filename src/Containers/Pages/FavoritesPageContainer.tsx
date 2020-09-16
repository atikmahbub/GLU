import React, { FC } from 'react';
import NavigationMenu from '../../components/NavigationMenu';

interface IFavoritesPageContainer {
    userType: string;
}

const FavoritesPageContainer: FC<IFavoritesPageContainer> = ({ userType }) => {
    return (
        <NavigationMenu>

        </NavigationMenu>
    )
}

export default FavoritesPageContainer

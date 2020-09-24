import { menuListItem } from '../Interfaces/menuTypes';
import { UserTypes } from '../Types/user';
import { useMemo } from 'react';
import { createMenuList } from '../Helper/menus';

function useMenuList(userType: UserTypes): menuListItem[] {
    return useMemo(() => createMenuList(userType), [userType]);
}

export default useMenuList;

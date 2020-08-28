import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import { Button, Typography, IconButton } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Search, Menu } from '@material-ui/icons';
import { BigMenu } from './BigMenu';

const useStyles = makeStyles({
  button: {
      '&:hover': {
          backgroundColor: 'transparent'
      }
  }
})

export interface propsType {
    name: string;
    link: string;
}

interface props {
    menuList?: propsType[];
    customClass?: string;
    handler?: () => void;
    showMenuOptions?: boolean;
    rootClassName?: string;
    containerClassName?: string;
}
const NavigationMenu: React.FunctionComponent<props> = ({ menuList, handler, customClass, showMenuOptions, rootClassName, containerClassName }) => {
    const classes = useStyles()
    const getMenuList = () => {
        if (menuList) {
            return (
                <>
                    <li>
                        <IconButton className="icon-button" onClick={handler}>
                            <Menu className="icon" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className="icon-button">
                            <Search className="icon" />
                        </IconButton>
                    </li>
                    {menuList.map((item: propsType, index) => (
                        <li key={index}>
                            <Link to={item.link}>
                                <Button disableRipple className={classNames('link', classes.button)}>{item.name}</Button>
                            </Link>
                        </li>
                    ))}
                </>
            );
        } else {
            return (
                <>
                    <li>
                        <Link to="/signup">
                            <Button disableRipple className="outline-rec">Sign Up</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <Button disableRipple className={classes.button}>Sign In</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/help-support">
                            <Button disableRipple className={classes.button}>Help</Button>
                        </Link>
                    </li>
                </>
            );
        }
    };
    return (
        <div className={classNames(rootClassName, 'menu__type2__container')}>
            <div className={classNames(containerClassName, 'navigation')}>
                <ul className={customClass}>{getMenuList()}</ul>
                <Typography className={`heading ${customClass}`}>Glu</Typography>
            </div>
            {showMenuOptions && <BigMenu />}
        </div>
    );
};

export default NavigationMenu;

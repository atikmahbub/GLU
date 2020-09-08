import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'CircularXXWeb',
    },
    props: {
        MuiTab: {
            disableRipple: true
        }
    }
});

export default theme;

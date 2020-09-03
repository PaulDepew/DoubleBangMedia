import { createMuiTheme } from '@material-ui/core/styles';

const myTheme = createMuiTheme({
     palette: {
        type: 'dark',
        primary: { 
          main: '#5898b5',
        },
        secondary: { 
          main: '#96454e',
        },
        companyWhite: { 
            main: '#ffffff',
        },
        companyBlack: { 
            color: '#131313',
        },
        companyYellow: { 
            color: '#ffee9f',
        },
        companyGreen: { 
            color: '#7aa890',
        },
        companyPurple: { 
            color: '#7b6bb0',
        },
        companyNeutral: {
            backgroundColor: '#333333',
        },
        background: {
            default: '#333333'
        }
    },
    logo: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            justifyContent: 'center'
        }
    }
});

export default myTheme;
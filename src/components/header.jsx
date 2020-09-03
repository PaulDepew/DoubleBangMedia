import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import Typical from 'react-typing-animation'
import myTheme from '../theme';
import {ReactComponent as DBLogoLite} from '../assets/DB_lite.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily:'bebas-neue-rounded',
    marginLeft:'-15px',
    fontSize:'58pt'
  },
}));

const Header = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar style={myTheme.palette.companyNeutral} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <DBLogoLite style={{width: '75px'}} />
          </IconButton>
          <Typical hideCursor={true} loop={true} className={classes.title} speed={50}>  
          <span  style={{color:'#ffffff' }}>DoubleBang Design</span>
          <Typical.Backspace delay={6000} count={18} />
          <span style={{color:'#96454e' }}>UI/UX</span>
          <Typical.Backspace delay={2000} count={5} />
          <span style={{color:'#ffee9f' }}>Code</span>
          <Typical.Backspace delay={2000} count={5} />
          <span style={{color:'#7aa890' }}>Data </span>
          <Typical.Backspace delay={2000} count={5} />
          <span style={{color:'#7b6bb0' }}>Media</span>
          <Typical.Backspace delay={2000} count={6} />
          <Typical.Reset />
          </Typical>
          {/* <Typography variant="h2" style={{fontFamily:'bebas-neue-rounded', marginLeft:'-15px'}} className={classes.title}>
            Media
          </Typography> */}
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <GraphicEqIcon />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
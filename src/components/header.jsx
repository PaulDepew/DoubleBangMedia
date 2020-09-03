import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Modal} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typical from 'react-typing-animation';
import myTheme from '../theme';
import {ReactComponent as Rock} from '../assets/concert.svg';
import BrandSurvey from './brandSurvey.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'inherit'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily:'bebas-neue-rounded',
    fontSize:'48pt'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:'fit-content'

  },
}));



const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const front = '{!! '
  const end = ' }'

  return (
    <div className={classes.root}>
      <AppBar style={myTheme.palette.companyNeutral} position="static">
        <Toolbar>
        <IconButton style={{background:'transparent'}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <span className={classes.title}> {front} </span>
      
      <Typical hideCursor={true} loop={true} className={classes.title} speed={50}>  
      <Typical.Reset count={2} />
      <span></span>
      <Typical.Backspace delay={4000} count={30} />
     
      <span  style={{color:'#5898b5' }}> Design</span>
      <Typical.Backspace delay={2000} count={30} />
     
      <span style={{color:'#96454e' }}> UI/UX</span>
      <Typical.Backspace delay={2000} count={30} />
     
      <span style={{color:'#ffee9f' }}> Code</span>
      <Typical.Backspace delay={2000} count={30} />
  
      <span style={{color:'#7aa890' }}> Data </span>
      <Typical.Backspace delay={2000} count={30} />
     
      <span style={{color:'#7b6bb0' }}> Media</span>
      <Typical.Backspace delay={2000} count={30} />
    
      </Typical>
      <span className={classes.title}> {end} </span>
      </IconButton>
    
            <div style={{position:'fixed', right:'35px', }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={(e)=> {
                  
                  e.preventDefault();
                  handleOpen();
                }}
                style={{background:'transparent'}} 
              >
                <Rock style={{position:'fixed', right:'35px', height:'30px' }} />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>

      <Modal
        aria-labelledby="brand-identity"
        aria-describedby="a brand identity survey to find out your inner soul"
        className={classes.modal}
        open={open}
        onClose={(e) => {
          e.preventDefault();
          handleClose()}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <BrandSurvey />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Header;
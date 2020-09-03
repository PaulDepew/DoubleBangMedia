import React from 'react';
import ReactDOM from 'react-dom';

import { Typography, Paper} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'


import myTheme from './theme.js'
import Header from './components/header.jsx'


const App = () => {

  return(
    <ThemeProvider  theme={myTheme}>
      <Header />
      <Paper style={myTheme.palette.companyNeutral, {height: '100vh'}} >
      </Paper>
    </ThemeProvider>
  );

};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

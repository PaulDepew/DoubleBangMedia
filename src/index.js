import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'


import myTheme from './theme.js'
import Header from './components/header.jsx'


const App = () => {

  return(
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );

};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

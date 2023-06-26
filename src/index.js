import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import {ThemeProvider} from '@material-ui/core';
import IndexTheme from './components/theme/IndexTheme'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={IndexTheme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './components/app/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

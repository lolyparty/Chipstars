import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary:{
        main:'#fff'
    },
    secondary:{
        main:'#AD0F0A'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    }
  },
});

export {theme}
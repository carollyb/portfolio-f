import {
  karantina,
  inter,
} from '@/frontend/layouts/DefaultLayout/DefaultLayout';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  // breakpoints: {
  //   xs: 0,
  //   sm: 390,
  //   md: 912,
  //   lg: 1272,
  // },
  spacing: [0, 1, 4, 8, 16, 20, 24, 28, 32, 36, 40, 44],
  palette: {
    primary: {
      contrastText: '#1300A2',
      main: '#120096',
      light: '#1E00FF',
    },
    background: {
      default: '#FF99F1',
      paper: '#FFE8FC',
    },
    text: {
      primary: '#707070',
    },
  },
  typography: {
    h1: {
      // desktop - títulos dos projetos
      fontFamily: `${inter.style.fontFamily}`,
      fontSize: '130px',
      fontWeight: 500,
      lineHeight: '130px',
      letterSpacing: '-0.1em',
    },
    h2: {
      // desktop - ano dos projetos
      fontFamily: `${inter.style.fontFamily}`,
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: '62px',
    },
    body1: {
      //desktop descrições dos projetos
      fontFamily: `${inter.style.fontFamily}`,
      fontSize: '40px',
      fontWeight: 500,
      lineHeight: '45px',
    },
    body2: {
      //desktop about - bio
      fontFamily: `${inter.style.fontFamily}`,
      fontSize: '25px',
      fontWeight: 500,
      lineHeight: '40px',
    },
    subtitle1: {
      fontFamily: `${karantina.style.fontFamily}`,
      fontSize: '40px',
      fontWeight: 400,
      lineHeight: '40px',
    },
    subtitle2: {
      //desktop return to projects
      fontFamily: `${inter.style.fontFamily}`,
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
    },
    caption: {
      //social media buttons
      fontFamily: `${inter.style.fontFamily}`,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20px',
      color: '#707070',
    },
  },
});

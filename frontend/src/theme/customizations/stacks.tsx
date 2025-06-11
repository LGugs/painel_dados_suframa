import { type Theme, type Components } from '@mui/material/styles';

export const stackCustomizations: Components<Theme> = {
  MuiStack: {
    styleOverrides: {
      root: {
        '& > :not(style) ~ :not(style)': {
          marginLeft: '0 !important',
        },
      },
    },
  },

};
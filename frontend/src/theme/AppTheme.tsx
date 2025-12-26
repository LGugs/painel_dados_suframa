import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { inputsCustomizations } from './customizations/inputs';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';
import { colorSchemes, typography, shadows, shape } from './themePrimitives';
import { stackCustomizations } from './customizations/stacks';

interface AppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
          },
          colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
          typography,
          shadows,
          shape,
          components: {
            MuiCssBaseline: {
              styleOverrides: {
                body: {
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                  backgroundSize: '10%',
                },
              
              'html[data-mui-color-scheme="light"] body': {
                backgroundImage: 'url("/images/background-suframa.jpg")',
              },

              'html[data-mui-color-scheme="dark"] body': {
                backgroundImage: 'url("/images/background-suframa-alt.png")',
              },
              
              /* OVERLAY (opacidade real) */
              'body::before': {
                content: '""',
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 0,
              },

              /* OVERLAY LIGHT */
              'html[data-mui-color-scheme="light"] body::before': {
                backgroundColor: 'rgba(255, 255, 255, 0.65)',
              },

              /* OVERLAY DARK */
              'html[data-mui-color-scheme="dark"] body::before': {
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
              },
            },
          },
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
            ...stackCustomizations
          },
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

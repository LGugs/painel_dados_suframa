import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
//import AppNavbar from './components/AppNavbar';
import Header from '../../components/Header';
//import MainGrid from './components/MainGrid';
//import SideMenu from './components/SideMenu';
import Dashboard from '../../components/Dashboard';
import AppTheme from '../../theme/AppTheme';
import Copyright from '../../components/Copyright';
import {
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../../theme/customizations';

const xThemeComponents = {
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MainPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/*<SideMenu />
        <AppNavbar />*/}
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            height: '100%',
            minHeight: '100vh',
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              width: '100%',
              maxWidth: '100%',
              mx: 'auto',
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <Dashboard tipo='Mão de Obra'/>
            <Copyright sx={{ mt: 4 }} />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}

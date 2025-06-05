import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
//import AppNavbar from './components/AppNavbar';
import Copyright from '../../components/Copyright';
import Header from '../../components/Header';
//import MainGrid from './components/MainGrid';
//import SideMenu from './components/SideMenu';
//import Dashboard from '../../components/Dashboard';
import AppTheme from '../../theme/AppTheme';
import {
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../../theme/customizations';
import DashboardPage from '../../pages/DashboardPage/';

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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              width: '100%',
              maxWidth: '100%',
              mx: 'auto',
              px: 2,
              py: 4,
              flexGrow: 1,
            }}
          >
            <Header />
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={4}
              sx={{ width: '100%', px: 2, flexWrap: 'wrap' }}
            >
              <Box id='vish1' sx={{ flex: 1, minWidth: 400 }}>
                <DashboardPage tipo="Faturamento" />
              </Box>
              <Box id='vish2' sx={{ flex: 1, minWidth: 400 }}>
                 <DashboardPage tipo="Mão de Obra"/>
              </Box>
            </Stack>
            <Copyright sx={{ mt: 'auto', textAlign: 'center', pb: 2 }} />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}

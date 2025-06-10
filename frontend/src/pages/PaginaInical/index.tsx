import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import PolosToggleGroup from "../../components/ToogleButtons";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Copyright from "../../components/Copyright";
import Header from "../../components/Header";
import AppTheme from "../../theme/AppTheme";
import {
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "../../theme/customizations";
import DashboardPage from "../../pages/DashboardPage/";
import { useAppSelector } from "../../redux/hooks";

const xThemeComponents = {
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MainPage(props: { disableCustomTheme?: boolean }) {
  const poloId = useAppSelector((state) => state.DashboardReducer.id);

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/*<SideMenu />
        <AppNavbar />*/}
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            height: "100%",
            minHeight: "100vh",
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              width: "100%",
              maxWidth: "100%",
              mx: "auto",
              flexGrow: 1,
            }}
          >
            <Header />
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              sx={{ width: "100%", flexWrap: "wrap" }}
            >
              <Box sx={{ flex: 1, minWidth: 400 }}>
                <DashboardPage tipo="Faturamento" polo={poloId} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 400 }}>
                <DashboardPage tipo="Mão de Obra" polo={poloId} />
              </Box>
              <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                alignItems="stretch"
                sx={{ width: "100%" }}
              >
                <PolosToggleGroup />
              </Stack>
            </Stack>
            <Copyright sx={{ mt: "auto", textAlign: "center", pb: 2 }} />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}

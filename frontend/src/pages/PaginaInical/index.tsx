import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import PolosToggleGroup from "../../components/ToogleButtons/PolosToggleButton";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Copyright from "../../components/Copyright";
import Header from "../../components/Header";
import AppTheme from "../../theme/AppTheme";
import {
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "../../theme/customizations";
import DashboardPage from "../../pages/DashboardPage/";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  selectTiposAtivos,
  selectTipoFaltante,
} from "../../redux/selector/dados.selectors";
import {
  substituirEsquerda,
  substituirDireita,
} from "../../redux/slices/dados.slice";
import { CustomToggleButton } from "../../components/ToogleButtons/CustomToggleButton";

const xThemeComponents = {
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MainPage(props: { disableCustomTheme?: boolean }) {
  const poloId = useAppSelector((state) => state.PoloReducer.id);
  const tiposAtivos = useAppSelector(selectTiposAtivos);
  const tipoFaltante = useAppSelector(selectTipoFaltante);

  const dispatch = useAppDispatch();

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
                <DashboardPage tipo={tiposAtivos[0]} polo={poloId} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 400 }}>
                <DashboardPage tipo={tiposAtivos[1]} polo={poloId} />
              </Box>
              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="stretch"
                sx={{ width: "100%", ml: 0 }}
              >
                <CustomToggleButton
                  onClick={() => dispatch(substituirEsquerda())}
                  sx={{ maxWidth: "100%", overflow: "hidden" }}
                >
                  <ArrowBackIosIcon />
                  <Typography
                    fontWeight="bold"
                    noWrap
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tipoFaltante}
                  </Typography>
                </CustomToggleButton>
                <CustomToggleButton
                  onClick={() => dispatch(substituirDireita())}
                  sx={{ maxWidth: "100%", overflow: "hidden" }}
                >
                  <Typography
                    fontWeight="bold"
                    noWrap
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tipoFaltante}
                  </Typography>
                  <ArrowForwardIosIcon />
                </CustomToggleButton>

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

import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import type { DashboardTypes } from "../../interfaces/Dashboard"
import Typography from "@mui/material/Typography";
import CustomCard from "../Cards";
import Grafico from "../Graficos";

export default function Dashboard(config: DashboardTypes) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        px: 2,
        py: 4,
        boxSizing: "border-box",
        bgcolor: "background.default",
      }}
    >
      {/* cards */}
      <Typography component="h1" variant="h6" sx={{ mb: 2 }}>
        {config.tipo}
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="space-between"
        alignItems={"flex-start"}
        mb={(theme) => theme.spacing(2)}
        width={'100%'}
        mt={10}
      >
        <Stack spacing={2} sx={{ minWidth: 200 }}>
        {config.cards.map((card, index) => (
            <CustomCard key={index} {...card} sx={{minHeight: 50, width: 200}} />
        ))}
        </Stack>
      
      {config.graficos && (
          <Box
            sx={{
              flex: 1,
              width: { xs: "100%", md: "40%" },
              minHeight: 300,
            }}
          >
            <Grafico {...config.graficos} />
          </Box>
        )}
        
      </Stack>
      {/*<Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>*/}
    </Box>
  );
}

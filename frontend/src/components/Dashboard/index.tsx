import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import type { DashboardTypes } from "../../interfaces/Dashboard";
import Typography from "@mui/material/Typography";
import CustomCard from "../Cards";
import Grafico from "../Graficos";

export default function Dashboard(config: DashboardTypes) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "auto",
        px: 1,
        pb: 4,
        mb: 1,
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
        width={"100%"}
      >
        <Stack spacing={2} sx={{ minWidth: 200 }}>
          {config.cards.map((card, index) => (
            <CustomCard
              key={index}
              {...card}
              sx={{ minHeight: 50, width: 200 }}
            />
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
    </Box>
  );
}

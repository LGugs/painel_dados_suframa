import { Box, Stack, Typography } from "@mui/material";
import type { DashboardTypes } from "../../interfaces/Dashboard";
import CustomCard from "../Cards";
import Grafico from "../Graficos";

export default function Dashboard(data: DashboardTypes) {
  //console.log("DATA RECEBIDA PELO COMPONENTE DASHBOARD:", data);
  const cardsPorColuna = 3;
  const colunas: DashboardTypes["cards"][] = [];

  for (let i = 0; i < data.cards!.length; i += cardsPorColuna) {
    colunas.push(data.cards!.slice(i, i + cardsPorColuna));
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "auto",
        pb: 4,
        mb: 1,
        boxSizing: "border-box",
        bgcolor: "background.default",
      }}
    >
      {/* cards */}
      <Typography component="h1" variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        {data.tipo.toUpperCase()}
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        alignItems={"flex-start"}
        width={"100%"}
      >
        <Box display={"flex"} gap={2} flexWrap={"wrap"}>
          {colunas.map((coluna, colIndex) => (
            <Stack key={colIndex} spacing={2}>
              {coluna!.map((card, index) => (
                <CustomCard
                  key={index}
                  {...card}
                  sx={{ minHeight: 50, width: 200 }}
                />
              ))}
            </Stack>
          ))}
        </Box>
        {data.graficos && (
          <Box
            sx={{
              flex: 1,
              width: { xs: "100%", md: "60%" },
              minHeight: 300,
            }}
          >
            <Grafico {...data.graficos} />
          </Box>
        )}
      </Stack>
    </Box>
  );
}

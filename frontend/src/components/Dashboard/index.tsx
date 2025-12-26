import { Box, Stack, Typography } from "@mui/material";
import type { DashboardTypes } from "../../interfaces/Dashboard";
import CustomCard from "../Cards";
import Grafico from "../Graficos";

export default function Dashboard(data: DashboardTypes) {
  
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
        height: "400px",
        pb: 2,
        mb: 1,
        boxSizing: "border-box",
        bgcolor: "background.default",
      }}
    >
      {/* cards */}
      <Typography component="h1" variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        {data.tipo.toUpperCase()}
      </Typography>
      <Box display="flex" gap={3} alignItems="flex-start" width="100%">
        <Box display={"flex"} gap={1.5} flexWrap={"wrap"} sx={{ flexShrink: 0 }}>
          {colunas.map((coluna, colIndex) => (
            <Stack key={colIndex} spacing={2}>
              {coluna!.map((card, index) => (
                <CustomCard
                  key={index}
                  {...card}
                  sx={{ minHeight: 50, minWidth: 140, maxWidth: 160, flexShrink: 0 }}
                />
              ))}
            </Stack>
          ))}
        </Box>
        {data.graficos && (
          <Box
            sx={{
              flexGrow: 1,
              minWidth: 0,
              minHeight: 300,
            }}
          >
            <Grafico {...data.graficos} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

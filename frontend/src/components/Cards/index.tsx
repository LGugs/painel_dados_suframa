//import * as React from 'react';
import { Typography, Stack, CardContent, Card } from "@mui/material";
import { convertNumber } from "../../utils/money";
import { type CardProps } from "../../interfaces/Cards";

export default function CustomCard({ tipo, titulo, valor, sx }: CardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "transparent",
        ...sx, // permite sobrescrever caracteristicas visuais
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component="h1" gutterBottom>
          {titulo}
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: "space-between", flexGrow: "1", gap: 1 }}
        >
          <Stack sx={{ justifyContent: "space-between" }}>
            <Typography
              component="p"
              sx={{
                fontSize: valor > 1000000 ? "0.7rem" : "0.9rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {tipo != "Mão de Obra"
                ? `R$ ${convertNumber(valor,2)}`
                : convertNumber(valor)}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

//import * as React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import type { DashboardTypes } from "../../interfaces/Dashboard"
//import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Copyright from '../../components/Copyright';
//import ChartUserByCountry from './ChartUserByCountry';
//import CustomizedTreeView from './CustomizedTreeView';
//import CustomizedDataGrid from './CustomizedDataGrid';
//import HighlightedCard from './HighlightedCard';
import CustomCard from "../Cards";
import { type CardProps } from "../../interfaces/Cards"

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
      id="alo"
        direction="column"
        spacing={3}
        alignItems={"flex-start"}
        mb={(theme) => theme.spacing(2)}
        maxWidth={200}
        width={'100%'}
        mt={10}
      >
        {config.cards.map((card, index) => (
          <Grid key={index} size={{ xs: 6, sm: 6, lg: 3 }}>
            <CustomCard {...card} sx={{minHeight: 50, width: 200}} />
          </Grid>
        ))}
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
      <Copyright sx={{ mt: 4 }} />
    </Box>
  );
}

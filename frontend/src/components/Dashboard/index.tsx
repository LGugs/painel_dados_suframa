//import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//import ChartUserByCountry from './ChartUserByCountry';
//import CustomizedTreeView from './CustomizedTreeView';
//import CustomizedDataGrid from './CustomizedDataGrid';
//import HighlightedCard from './HighlightedCard';
import StatCard, { type StatCardProps } from '../Cards/StatCard';

const data: StatCardProps[] = [
  {
    title: 'Masculina',
    value: '70726',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: 'Feminina',
    value: '35505',
    interval: 'Last 30 days',
    trend: 'down',
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
      780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
  {
    title: 'PNE',
    value: '3854',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
  {
    title: 'Total',
    value: '110085',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', px: 2,  py: 4, boxSizing: 'border-box', bgcolor: 'background.default' }}>
      {/* cards */}
      <Typography component="h1" variant="h6" sx={{ mb: 2 }}>
        Mão de Obra
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 6, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        
      </Grid>
      {/*<Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
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

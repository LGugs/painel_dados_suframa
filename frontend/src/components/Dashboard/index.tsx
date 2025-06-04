//import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//import ChartUserByCountry from './ChartUserByCountry';
//import CustomizedTreeView from './CustomizedTreeView';
//import CustomizedDataGrid from './CustomizedDataGrid';
//import HighlightedCard from './HighlightedCard';
import CustomCard, { type CardProps } from '../Cards';

const data: CardProps[] = [
  {
    title: 'Masculina',
    value: 70726,
  },
  {
    title: 'Feminina',
    value: 35505
  },
  {
    title: 'PNE',
    value: 3854,
  },
  {
    title: 'Total',
    value: 110085,
  },
];

export interface Dashboard{
  tipo: string;
}

export default function Dashboard(props: Dashboard) {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', px: 2,  py: 4, boxSizing: 'border-box', bgcolor: 'background.default' }}>
      {/* cards */}
      <Typography component="h1" variant="h6" sx={{ mb: 2 }}>
        {props.tipo}
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 6, sm: 6, lg: 3 }}>
            <CustomCard {...card} />
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

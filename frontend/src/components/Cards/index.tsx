//import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import convertNumber from '../../utils/money';
import { type CardProps } from '../../interfaces/Cards';

export default function CustomCard({
  titulo,
  valor,
  sx
}: CardProps) {

  return (
    <Card variant="outlined"  sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...sx, // permite sobrescrever
      }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {titulo}
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
        >
          <Stack sx={{ justifyContent: 'space-between' }}>
            
              <Typography variant="h4" component="p">
                {convertNumber(valor)}
              </Typography>
            
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

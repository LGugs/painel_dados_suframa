//import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import convertNumber from '../../utils/money';

export type CardProps = {
  title: string;
  value: number;
};

export default function CustomCard({
  title,
  value,
}: CardProps) {

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
        >
          <Stack sx={{ justifyContent: 'space-between' }}>
            
              <Typography variant="h4" component="p">
                {convertNumber(value)}
              </Typography>
            
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

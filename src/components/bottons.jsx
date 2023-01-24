import * as React from 'react';
import Button from '@mui/material/Button'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Typography from '@mui/material/Typography'

export function IconButtonSizes() {
  return (
    <div>

    <Typography variant="h3" color="secondary" >
        <Button size="medium"  variant="contained" startIcon={<DehazeIcon  />}>

        </Button>
    </Typography>

    <Typography  variant="h3" align="right" color="secondary" >
        <Button  size="medium"  variant="contained" startIcon={<DehazeIcon  />}>

        </Button>
    </Typography>   
    </div>

    
  );
}
import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

const Testimonial = () => {
   return (
      <container>
      <Box sx={{my:3}}>
       <Typography sx={{display:'flex',justifyContent:'left',color:'#069F99',fontWeight:'400'}} variant="h6" gutterBottom component="div">
        TESTIMONIAL
      </Typography>
      <Typography sx={{display:'flex',justifyContent:'left',fontWeight:'500'}} variant ="h4">
        What's Our Patients
        Says 
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <h2>this is testimonial card</h2>
        </Grid>
        <Grid item xs={12} md={4}>
        <h2>this is testimonial card</h2>
        </Grid>
        <Grid item xs={12} md={4}>
          <h2>this is testimonial card</h2>
        </Grid>
        </Grid>
      </Box>
      </Box>
      </container>
   );
};

export default Testimonial;<h1>this is testimonial part</h1>
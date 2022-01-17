import React from 'react';
import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@material-ui/core';

const Booking = ({ booking }) => {
   console.log(booking);
   return (

      <Grid  item xs={12} sm={6} md={4}>
     
         <Paper elevation={3} sx={{py: 5}} >
         <Typography sx={{color:'info.main',fontWeight:600}} variant="h5" gutterBottom component="div">
            {booking.name}
         </Typography>
         <Typography variant="h6" gutterBottom component="div">
            {booking.time}
         </Typography>
         <Typography SX={{fontWeight:300}} variant="caption" display="block" gutterBottom>
            {booking.space}SPACE AVAILABLE
         </Typography>
         <Button variant ="contained">BOOK APPOINTMENT</Button>
        </Paper>
     
      </Grid>

   );
};

export default Booking;
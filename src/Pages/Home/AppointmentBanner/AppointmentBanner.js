import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
   background: `url(${bg})`,
   backgroundColor: 'rgba( 45, 65, 70 )',
   backgroundBlendMode: 'darken, luminosity',
   marginTop: 120
}



const AppointmentBanner = () => {
   return (
      <div>

         <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                  <img
                     style={{ width: 400, marginTop: '-105px' }}
                     src={doctor} alt="" />
               </Grid>
               <Grid item xs={12} md={6} style = {{display:'flex',justifyContent: 'left',textAlign: 'left',alignItems:'center'}}>
                  <Box>
                     <Typography sx={{mb:4}} variant="h6" style={{ color: '#1CD3C5' }} >
                        APPOINTMENT
                     </Typography >
                     <Typography sx={{my:5}} variant="h4" style={{ color: 'white', fontFamily: 'monospace', fontWeight: 300, fontSize: '30px', padding: '10px' }}>
                     Make An Appointment Today
                     </Typography>
                     <Typography  variant="p" style={{ color: 'white', fontSize: '20px', fontFamily: 'inherit', paddingButton: '10px' }}>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its

                     </Typography>

                     <Typography>
                        <Button sx={{mt:4}}   variant="contained" style={{ backgroundColor: '#085D56' }}>
                        Learn More

                     </Button>
                     </Typography>
                  </Box>

               </Grid>
            </Grid>
         </Box>
      </div>
   );
};

export default AppointmentBanner;
import React from 'react';
import { Container, Grid, Typography,Box } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Calender from '../../Shared/Calender/Calender';

const appointHeaderBg = {
   background: `url(${bg})`,
   box_shadow: '10px 20px',
   border:'1px solid red'
}

const AppointmentHeader = ({ date, setDate }) => {
   return (
      <Container>
         <Grid style={{appointHeaderBg}} sx={{ my: '20px' }} container spacing={2} >
            <Box >
            <Grid item xs={12} md={6}>
               <Typography style={{ display: 'flex', justifyContent: 'left' }} variant="h6">Appointment</Typography>
               <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            </Box>
            <Grid  item xs={12} md={6}>
               <img style={{ width: '400px' }} src={chair} alt="" />
            </Grid>
         </Grid>
      </Container>
   );
};

export default AppointmentHeader;
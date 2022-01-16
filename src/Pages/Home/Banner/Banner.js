import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import backG from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bgBanner = {
   background: `url(${backG})`,

}

const verticalCenter = {
   display: 'flex',
   alignItems: 'center',
   height: 400,
   
}

const Banner = () => {

   return (
      <Container style={{ bgBanner}} sx={{ flexGrow: 1, my: 5 }}>
         <Grid container spacing={2}>
            <Grid item style={{ ...verticalCenter,textAlign: 'left' }} xs={12} md={6}>
               <Box>
                  <Typography variant="h3" >Your New Smile<br />
                     Starts Here</Typography>
                  <Typography sx={{ fontSize: 90 }} variant="h6" style={{ fontSize: 15, fontWeight: 300, color: '#8A989C',marginTop:'20px' }}>The most common function of the 's in English is to show possession, as in "the cat's bowl."There are other ways to show possession—"the bowl of the cat," for example—but 's is the way it's most often done.</Typography>
                  <Button  variant="contained" style={{ backgroundColor: '#2CCDC8', padding: '10px' ,marginTop:'20px'}}>Get Appointment</Button>
               </Box>
            </Grid>
            <Grid item xs={4} md={6} style={verticalCenter}>
               <img style={{ width: '440px'}} src={chair} alt="" />
            </Grid>

         </Grid>
      </Container>
   );
};

export default Banner;
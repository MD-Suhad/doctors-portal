import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../../Service/Service';
import fluoride from '../../../../images/fluoride.png';
import cavity from '../../../../images/cavity.png';
import whitening from '../../../../images/whitening.png';


const services = [
  {
    name:'Fluoride Treatment',
    description: 'Fluoride treatments may offer even more significant benefits to protect teeth. These treatments can be beneficial to people at risk of tooth decay but may not be right for everyone',
    img:fluoride
  },
  {
    name:'Cavity Filling',
    description: 'Having a cavity filled may cause some discomfort, but it should not cause pain. Anyone who experiences moderate or severe pain during or after the procedure should let their dentist know.',
    img:cavity

  },
  {
    name:"Teeth Whitening",
    description: 'Many times teeth are beautifully shaped, but are with dark color. Bleaching is the perfect solution to get a brighter & whiter smile.',
    img:whitening
  }
]



const Services = () => {
   return (
    
      <Box sx={{ flexGrow: 1 }}>
     <container>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
         services.map(service => <Service
         key={service.name}
         service ={service}d
         
         ></Service>)
       }
      </Grid>
     </container>
    </Box>
    
   );
};

export default Services;
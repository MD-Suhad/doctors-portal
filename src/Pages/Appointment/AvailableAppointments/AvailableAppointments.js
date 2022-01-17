import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
   {
      id:1,
      name: 'Teeth Orthodontics',
      time:'8.00AM - 9.00 AM',
      space: '8 ',
   },
   {
      id:2,
      name: 'Cosmetic Dentistry',
      time:'10.00 Am - 1.00PM',
      space: '9 ',
   },
   {
      id:3,
      name: 'Teeth Cleaning',
      time:'2.00 AM - 4.00 AM',
      space: '6 ',
   },
   {
      id:4,
      name: 'Cavity Protection',
      time:'5.00 AM - 8.00 PM',
      space: '5 ',
   },
   {
      id:5,
      name: 'Teeth Orthodontics',
      time:'9 .00 PM - 10.00PM',
      space: '3 ',
   },
   {
      id:6,
      name: 'Teeth Orthodontics',
      time:'7.00 PM - 9.00 PM',
      space: '11 ',
   }
]

const AvailableAppointments = ({date}) => {
   return (
      <Container>

         <Typography sx={{color:'info.main',fontWeight:400,my:3}} variant="h4">
         Available Appointments On {date.toDateString()}
         </Typography>
      
         <Grid  container spacing={2}>

           {
              bookings.map(booking => <Booking
               key = {booking.id}
               booking ={ booking}
               date ={date}
              >

              </Booking>)
           }

         </Grid>
            
      </Container>
   );
};

export default AvailableAppointments;
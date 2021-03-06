import { Container } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Testimonial from '../../Testimonial/Testimonial';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

const Home = () => {
   return (
      <div>
      <Navigation></Navigation>
      <Container>
      
      <Banner></Banner>
      <Services></Services>
        <AppointmentBanner></AppointmentBanner>
        <Testimonial></Testimonial>
      </Container>
      </div>
   );
};

export default Home;
import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import login from '../../images/login.png';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Login = () => {

   const [loginData,setLoginData] = useState({})

   const handleOnChange = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData}
      newLoginData[field] = value;
      setLoginData(newLoginData);

      // console.log(field,value)
      
   }
   const handleLoginSubmit = e => {
      alert('hallow word')
      e.preventDefault();
   }
   return (
      <Container>
         <Grid container spacing={2}>

            <Grid sx={{mt:15}}  item xs={12} md={6}>
               <Typography sx={{fontWidth:400,color:''}} variant='h5' gutterBottom>Login</Typography>

               <form onSubmit={handleLoginSubmit}>
                  <TextField 

                     sx={{width:'75%',my:2}}
                     id="standard-basic"
                     label="Your Email"
                     name='email'
                     onChange={handleOnChange}
                     variant="standard" />
                  <TextField  
                     sx={{width:'75%',my:2}}
                     id="standard-basic"
                     label="Your Password"
                     type="password"
                     name="password"
                     onChange={handleOnChange}
                     variant="standard" />
                     <Button sx={{width:'75%', my:2,backgroundColor:'#0577A8'}} variant ="contained" type="submit" >Login</Button>
               </form>

            </Grid>
            <Grid item xs={12} md={6}>
               <img src={login} alt="" />
            </Grid>

         </Grid>
      </Container>
   );
};

export default Login;
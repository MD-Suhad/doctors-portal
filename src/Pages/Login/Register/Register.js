import { Container } from '@mui/material';
import React from 'react';
import login from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

const Register = () => {
   const [loginData,setLoginData] = useState({})

   const handleOnChange = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData}
      newLoginData[field] = value;
      console.log(field,value,newLoginData)
      setLoginData(newLoginData);

      // console.log(field,value)
      
   }
   const handleLoginSubmit = e => {
      if(loginData.password !== loginData.confirmPassword)
      {
         alert('password did not Match');
         return;
      }
      e.preventDefault();
   }
   return (
      <Container>
         <Grid container spacing={2}>

            <Grid sx={{mt:15}}  item xs={12} md={6}>
               <Typography sx={{fontWidth:400,color:''}} variant='h5' gutterBottom>Register</Typography>

               <form onSubmit={handleLoginSubmit}>
                  <TextField 

                     sx={{width:'75%',my:2}}
                     id="standard-basic"
                     label="Your Email"
                     type="email"
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
                  <TextField  
                     sx={{width:'75%',my:2}}
                     id="standard-basic"
                     label="Confirm Your Password"
                    
                     type="password"
                     name="confirmPassword"
                     onChange={handleOnChange}
                     variant="standard" />
                     <Button sx={{width:'75%', my:2,backgroundColor:'#0577A8'}} variant ="contained" type="submit" >Login</Button>
                     <NavLink
                     style={{textDecoration:'none'}}
                      to ="login">
                         <Button variant="outlined">Already Registered? Please Login</Button></NavLink>
               </form>

            </Grid>
            <Grid
            
             item xs={12} md={6}>
               <img
               src={login} alt="" />
            </Grid>

         </Grid>
      </Container>
   );
};

export default Register;
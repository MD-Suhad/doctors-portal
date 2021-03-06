import { Container,Alert } from '@mui/material';
import React from 'react';
import login from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth.js';
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {
   const [loginData,setLoginData] = useState({});
   const history = useHistory()
   //console.log(loginData)

   const {user,registerUser,isLoading,authError} = useAuth();
   //console.log(registerUser);

   const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData}
      newLoginData[field] = value;
      //console.log(newLoginData);
      //console.log(field,value,newLoginData)
      setLoginData(newLoginData);

      // console.log(field,value)
      
   }
   const handleLoginSubmit = e => {
      if(loginData.password !== loginData.confirmPassword)
      {
         alert('password did not Match');
         return;
      }
      registerUser(loginData.email,loginData.password,loginData.name,history);
      console.log(registerUser);
      e.preventDefault();
   }
   return (
      <Container>
         <Grid container spacing={2}>

            <Grid sx={{mt:15}}  item xs={12} md={6}>
               <Typography sx={{fontWidth:400,color:''}} variant='h5' gutterBottom>Register</Typography>

               {!isLoading && <form onSubmit={handleLoginSubmit}>
                  <TextField 

                     sx={{width:'75%',my:2}}
                     id="standard-basic"
                     label="Your Name"
                     type="name"
                     name='Name'
                     onBlur={handleOnBlur}
                     variant="standard" />
                  <TextField 

                     sx={{width:'75%',my:2}}
                     id="standard-basic"
                     label="Your Email"
                     type="email"
                     name='email'
                     onBlur={handleOnBlur}
                     variant="standard" />
                  <TextField  
                     sx={{width:'75%',my:2}}
                     id="standard-basic"
                     label="Your Password"
                     type="password"
                     name="password"
                     onBlur={handleOnBlur}
                     variant="standard" />
                  <TextField  
                     sx={{width:'75%',my:2}}
                     id="standard-basic"
                     label="Confirm Your Password"
                    
                     type="password"
                     name="confirmPassword"
                     onBlur={handleOnBlur}
                     variant="standard" />
                     <Button sx={{width:'75%', my:2,backgroundColor:'#0577A8'}} variant ="contained" type="submit" >Login</Button>
                     <NavLink
                     style={{textDecoration:'none'}}
                      to ="login">
                         <Button variant="outlined">Already Registered? Please Login</Button></NavLink>
               </form>}
               {
                  
                  isLoading && <CircularProgress />
               }
               {user?.email &&
                     <Alert severity="success">This is successfully registered!</Alert>
               }
               {authError && <Alert severity="error">Error Typing</Alert> }

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
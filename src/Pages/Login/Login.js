import { Button, Container, Grid, Typography,Alert } from '@mui/material';
import React from 'react';
import login from '../../images/login.png';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {

   const [loginData,setLoginData] = useState({})
   const{user,loginUser,isLoading,authError} = useAuth();
   //console.log(loginUser);

   const handleOnChange = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData}
      newLoginData[field] = value;
      setLoginData(newLoginData);

      // console.log(field,value)
      
   }
   const handleLoginSubmit = e => {
      loginUser(loginData.email ,loginData.password)
      e.preventDefault();
      console.log(loginData.email,loginData.password);
      
   }
   
   return (
      <Container>
         <Grid container spacing={2}>

            <Grid sx={{mt:15}}  item xs={12} md={6}>
               <Typography sx={{fontWidth:400,color:''}} variant='h5' gutterBottom>Login</Typography>

              { !isLoading && <form onSubmit={handleLoginSubmit}>
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
                     <NavLink
                     style={{textDecoration:'none'}}
                      to ="register">
                         <Button variant="outlined">New User? Please Register</Button></NavLink>
               </form>}

               {
                  
                  isLoading && <CircularProgress/>
               }
               {user?.email &&
                     <Alert severity="success">This is successfully registered!</Alert>
               }
               { authError && <Alert severity="error">Error Typing</Alert> }


            </Grid>
            <Grid item xs={12} md={6}>
               <img style={{width:'100%'}} src={login} alt="" />
            </Grid>

         </Grid>
      </Container>
   );
};

export default Login;
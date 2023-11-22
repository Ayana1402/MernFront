import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid} from '@mui/material'


const Login = () => {
    const [user,setUser]=useState([]);
    const navigate=useNavigate();

    const inputHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        
    }
    function submitForm() {
      axios.post('https://mernback-f3c7.onrender.com/login', user)
        .then((res) => {
          alert(res.data.message);
          if (res.data.message === 'success') {
            sessionStorage.setItem("userToken", res.data.token);
            if (user.email === 'admin@gmail.com') {
              navigate('/emplist');
            } else {
              navigate('/home');
            }
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            alert('Invalid credentials. Please try again.');
          } else {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
          }
        });
  }
    return(<div className='EmpForm'>
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch' },padding:'3%'
    }}
    autoComplete="off"
    noValidate
    >
    
    <Grid container spacing={2} >
      <Grid item xs={6}>
      <div className='heading'><h4>Employee Form</h4></div>
     </Grid>
   </Grid>
   
   <Grid container spacing={2} >
   <Grid item xs={6}>
   <TextField
              className='textFieldStyleMui'
              id="standard-basic"
              variant="standard"
              label="Email"
              name='email' onChange={inputHandler}
             
            />
            <br /><br /><br />
            <TextField
              className='textFieldStyleMui'
              id="standard-basic"
              variant="standard"
              label="Password"
              type='password'
              name='password'
               onChange={inputHandler}
            /> <br /><br /><br />
   <div style={{paddingLeft:"25%"}}>
   <Button variant="contained" className='buttonStyleMui' sx={{ backgroundColor: '#5f44a3' }} onClick={submitForm}>Login</Button>
   </div>
   </Grid>
   <Grid item xs={6}>
   <div className="bg-img"></div>
   </Grid>
   </Grid>
      
        </Box>
      </div>
    );
  }
  
  export default Login;
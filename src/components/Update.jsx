import React from 'react'
import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography} from '@mui/material'
import '../elements/style.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
    const {id} = useParams()
    const [form,setForm]=useState({
        Name:"",
        Designation:"",
        Salary:"",
        Location:"",
    })
    useEffect(() => {
        axios
           .get('https://mernback-f3c7.onrender.com/api/viewall'+id)
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    const navigate =useNavigate()
    function addHandler(){
        navigate("/emplist");
      }
    
  return (
    <div className='EmpForm'>
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch' },padding:'3%'
    }}
    >
<Grid container spacing={2} >
   <Grid item xs={6}>
   <div className='heading'><h4>Employee Data Edit Form</h4></div>
  </Grid>
</Grid>

<Grid container spacing={2} >
<Grid item xs={6}>
<TextField
  id="outlined-error-helper-text"
  label="Name"
  name='Name'
/>
<br></br>
<TextField
  id="outlined-error-helper-text"
  label="Designation"
  name='Designation'
/>
<br></br>
<TextField
  id="outlined-error-helper-text"
  label="Salary"
  name='Salary'
/>
<br></br>
<TextField
  id="outlined-error-helper-text"
  label="Location"
  name='Location'
/>
<br></br>
<div style={{paddingLeft:"25%"}}>
<Button onClick={addHandler} variant="contained" style={{backgroundColor:"#673ab7"}  }>Save</Button>
</div>
</Grid>
<Grid item xs={6}>
<div className="bg-img"></div>
</Grid>
</Grid>   
</Box>
</div>
  )
}

export default Update
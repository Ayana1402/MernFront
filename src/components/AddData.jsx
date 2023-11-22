import React, { useState } from 'react'
import { Box, Button, Grid, TextField, Typography} from '@mui/material'
import '../elements/style.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import axiosInstance from '../axiosinterceptor'

const AddData = (props) => {
        const [form,setForm]=useState({
            Name:props.data ? props.data.Name:'',
            Designation:props.data ? props.data.Designation:'',
            Salary:props.data ? props.data.Salary:'',
            Location:props.data ? props.data.Location:''
        })
        const navigate =useNavigate()
        const inputHandler =(e)=>{
            setForm({...form,[e.target.name]:e.target.value})
        }
        const addHandler=()=> {
          if (props.method === "put") {
            axiosInstance
              .put('https://mernback-f3c7.onrender.com/api/update/'+props.data._id, form)
              .then((res) => {
                if (res.data === 'updated successfully') {
                  alert('Data updated successfully');
                  navigate('/emplist');
                } else {
                  alert('Update failed');
                }
              })
              .catch((error) => {
                console.error(error);
                alert('Error updating data');
              });
          }  else {
            axiosInstance
              .post("https://mernback-f3c7.onrender.com/api/addData", form)
              .then((res) => {
                alert("Data added successfully");
                navigate("/emplist");
              })
              .catch((error) => {
                console.error(error);
              });
          }
            
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
   <div className='heading'><h4>Employee Form</h4></div>
  </Grid>
</Grid>

<Grid container spacing={2} >
<Grid item xs={6}>
<TextField
  id="outlined-error-helper-text"
  label="Name"
  value={form.Name}
  name='Name'onChange={inputHandler}
/>
<br></br>
<TextField
  id="outlined-error-helper-text"
  label="Designation"
  value={form.Designation}
  name='Designation'onChange={inputHandler}
/>
<br></br>
<TextField
  id="outlined-error-helper-text"
  label="Salary"
  value={form.Salary}
  name='Salary'onChange={inputHandler}
/>
<br></br>
<TextField
  id="outlined-error-helper-text"
  label="Location"
  value={form.Location}
  name='Location'onChange={inputHandler}
/>
<br></br>
<div style={{paddingLeft:"25%"}}>
<Button onClick={addHandler} variant="contained" style={{backgroundColor:"#673ab7"} }>Save</Button>
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

export default AddData
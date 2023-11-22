import React from 'react'
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../elements/style.css';
import axios from "axios";
import { makeStyles } from '@mui/styles';
import Image from '../Images/4565.jpg';
import { Box, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import Update from './Update';
import AddData from './AddData';
import axiosInstance from '../axiosinterceptor';

const EmpData = () => {
  const [data,setData] = useState([]);
  var [update,setUpdate] =useState(false)
  var [singleValue,setSinglevalue] =useState([])
useEffect(() => {
  axiosInstance
     .get("https://mernback-f3c7.onrender.com/api/viewall")
    .then((res) => {
      setData(...data,res.data);
      console.log("Result:", data);
      
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  let finaljsx = (
   
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch' },padding:'3%'
    }}
    noValidate
    autoComplete="off"
    >
    <div>
      
    <TableContainer component={Paper}>
      <Table aria-label="simple table" >
        <TableHead style={{backgroundColor:'#00897b'}}>               
          <TableRow >
            <TableCell style={{color:"white"}}align="center">Emp ID</TableCell>
            <TableCell style={{color:"white"}} align="center">Name</TableCell>
            <TableCell style={{color:"white"}} align="center">Designation</TableCell>
            <TableCell style={{color:"white"}} align="center">Salary</TableCell>
            <TableCell style={{color:"white"}} align="center">Location</TableCell>
            </TableRow>
        </TableHead>
        
        <TableBody style={{backgroundColor:'#fffde7'}}>
          {data.map((row,i) => (
            <TableRow key={i}>
              {/* <TableCell component="th" scope="row"> */}
              <TableCell align="center">{row._id}</TableCell>
              <TableCell align="center">{row.Name}</TableCell>
              <TableCell align="center">{row.Designation}</TableCell>
              <TableCell align="center">{row.Salary}</TableCell>
              <TableCell align="center">{row.Location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </Box>
  )
  if(update) finaljsx = <AddData method = 'put' data = {singleValue}/> 
  return(finaljsx)

}

export default EmpData
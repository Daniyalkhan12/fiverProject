/* eslint-disable prettier/prettier */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'
import Card from "@mui/material/Card";
import MDBox from 'components/MDBox';
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CustumerTable = () => {
  const [formData, setFormData] = useState({
      full_name: '',
      company_name: '',
      address: '',
      telephone_one: '',
      telephone_two: '',
      email: '',
    });
    
    const navigate = useNavigate();
    // Function to handle form field changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Access the form data in the formData state object
      console.log(formData);
      // You can send this data to your server or perform any other actions here

    const response = await fetch(process.env.REACT_APP_API_URL + "/construction/customer_add/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const json = await response.json();
    console.log(json);
    if (json.code == 400) {
      toast.error("Error, Please try again!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (json.code == 200) {
      const access = json.data.access;
      localStorage.setItem("accessToken", access);
      const refresh = json.data.refresh;
      localStorage.setItem("refreshToken", refresh);
      const username = json.data.username;
      localStorage.setItem("username", username);
      console.log(localStorage);
      toast.success("Subcontractor added Successfully", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate('/dashboard')
      };
    }
  return (
    <form onSubmit={handleSubmit}>

    <DashboardLayout>
        <DashboardNavbar/>
        <Card>
        <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Customer Table </Typography>
        </MDBox> 
        <List>
        <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Full Name:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField 
                variant="outlined"
                fullWidth
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Company Name:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField 
                variant="outlined"
                fullWidth
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Address:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField 
                variant="outlined"
                fullWidth
                name="address"
                value={formData.address}
                onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Tel 1:</Typography>
          </Grid>
          <Grid item xs={10} md={2} lg={4} xl={4}>
            
          <TextField 
                variant="outlined"
                fullWidth
                name="telephone_one"
                value={formData.telephone_one}
                onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12} md={1} lg={1} xl={1}>
            <Typography variant="body1">Tel 2:</Typography>
          </Grid>
          <Grid item xs={10} md={2} lg={3} xl={3}>
            
          <TextField 
                variant="outlined"
                fullWidth
                name="telephone_two"
                value={formData.telephone_two}
                onChange={handleInputChange} />
          </Grid>
        </Grid>
        
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Email:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField 
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
        </List>
        <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem'}}>
        <Button type="submit" variant="contained" sx={{color:'white !important'}}>Submit</Button>
      </MDBox>
        </Card>
    </DashboardLayout>
  </form>
  )
}

export default CustumerTable
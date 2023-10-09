/* eslint-disable prettier/prettier */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react';

import Card from "@mui/material/Card";
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import MDBox from 'components/MDBox';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const WorkTables = () => {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dl_image_front: null,
    dl_image_back: null,
    full_name: '',
    address: '',
    telephone: '',
    skills: '',
    ssn: '',
    per_day_price: '',
    refer_name: '',
    refer_telephone: '',
    refer_address: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle image file selection
  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      dl_image_front: file, // Store the selected file
    }));
  };
  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      dl_image_back: file, // Store the selected file
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Access the form data in the formData state object
    console.log(formData);
    // You can send this data to your server or perform any other actions here

    let formDataObject = new FormData();

    Object.keys(formData).forEach((key) => {
      formDataObject.append(key, formData[key]);
    });
    console.log(...formDataObject)
  const response = await fetch(process.env.REACT_APP_API_URL + "/construction/worker_add/", {
    method: "POST",
    body: formDataObject,
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
    toast.success("Worker added Successfully", {
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
    <form action="" onSubmit={handleSubmit}>

    <DashboardLayout>
      <DashboardNavbar/>
       <Card>
       <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Work Table </Typography>
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
                onChange={handleInputChange}
              />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">TEL:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField
                variant="outlined"
                fullWidth
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
              />
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
                onChange={handleInputChange}
              />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Skills:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField
                variant="outlined"
                fullWidth
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
              />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Reffered By:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField
                variant="outlined"
                fullWidth
                name="refer_name"
                value={formData.refer_name}
                placeholder='Reference Name'
                onChange={handleInputChange}
              />
              <TextField
                    variant="outlined"
                    fullWidth
                    name="refer_telephone"
                    value={formData.refer_telephone}
                    placeholder='Reference Telephone'
                    onChange={handleInputChange}
                  />
              <TextField
                    variant="outlined"
                    fullWidth
                    name="refer_address"
                    value={formData.refer_address}
                    placeholder='Reference Address'
                    onChange={handleInputChange}
                  />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">SSN:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField
                variant="outlined"
                fullWidth
                name="ssn"
                inputProps={{
                  maxLength: 9, // Set the maximum length to 9 characters
                  inputMode: 'numeric', // Specify that the input should be numeric
                  pattern: '[0-9]*', // Specify a pattern to allow only numeric characters
                }}
                value={formData.ssn}
                onChange={handleInputChange}
              />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">DL Image Front:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <div>
          <FormControl component="fieldset">
        <Input
        sx={{display:'none'}}
          accept="image/*"
          id="dl_image_front"
          type="file"
          onChange={handleImageChange1}
        />
        <label htmlFor="dl_image_front">
          <Button variant="contained" component="span" sx={{color:'white !important'}}>
            Upload Image 
          </Button>
        </label>
      </FormControl>
      {formData.dl_image_front && (
        <div>
          <p>Selected Image: {<img src={formData.dl_image_front} className='imgUplode' alt="Uploaded" width="200" height="200" />}</p>
        </div>
      )}
    </div>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">DL Image Back:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <div>
          <FormControl component="fieldset" >
        <Input
        sx={{display:'none'}}
          accept="image/*"
          id="dl_image_back"
          type="file"
          onChange={handleImageChange2}
        />
        <label htmlFor="dl_image_back">
          <Button variant="contained" component="span" sx={{color:'white !important'}}>
            Upload Image 
          </Button>
        </label>
      </FormControl>
      {formData.dl_image_back && (
        <div>
          <p>Selected Image: {<img src={formData.dl_image_back} className='imgUplode' alt="Uploaded" width="200" height="200" />}</p>
        </div>
      )}
    </div>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Per-Day Price:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField
                    variant="outlined"
                    fullWidth
                    name="per_day_price"
                    value={formData.per_day_price}
                    onChange={handleInputChange}
                    required
                  />
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

export default WorkTables
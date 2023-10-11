/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Button, Container, List, ListItem, Grid, Typography, Input, InputLabel, FormControl, Select, MenuItem, TextField } from '@mui/material';
import MDBox from 'components/MDBox';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';

const Daily_Work = () => {
  // const projects = ['Project A', 'Project B', 'Project C'];
  const [projects, setProjects] = useState([])
  const [workers, setWorkers] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    images: [],
    receipt_image: null,
    date: '',
    id: '',
    company_name: '',
    workers_ids: [],
    invoice_number: ''
  });
  
  const handleInputChange = (e) => {
    let { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };
  
  const handleImageChange = (e) => {
    const files = e.target.files; // Get the selected files as an array
    const updatedImages = [...formData.images]; // Create a copy of the existing images array
  
    for (let i = 0; i < files.length; i++) {
      updatedImages.push(files[i]); // Add each selected file to the array
    }
  
    setFormData((prevData) => ({
      ...prevData,
      images: updatedImages, // Update the images array with the new files
    }));
  };
  
  
  const onChangeDate = (e) => {
    const newDate = e.target.value
    
    setFormData((prevData) => ({
      ...prevData,
      date: newDate,
    }));
  };

  
  // Function to handle image file selection
  const handleReceiptImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      receipt_image: file, // Store the selected file
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Access the form data in the formData state object
    formData.workers_ids = formData.workers_ids.map((worker) => {
      // Split the "id-name" string into an array
      const [id, name] = worker.split('-');
      return id; // Keep only the ID
    });
    console.log(formData);
    // You can send this data to your server or perform any other actions here
    let formDataObject = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "images") 
        formDataObject.append(key, formData[key]);
    });
    formData.images.forEach((value) =>{
      formDataObject.append("images", value)
    })
    console.log(...formDataObject)
  const response = await fetch(process.env.REACT_APP_API_URL + "/construction/daily_work_add/", {
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
    toast.success("Daily Worker added Successfully", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate('/daily_list')
    };
  }
  
const fetchProjectsData = async () => {
  const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/project_list/?per_page=5000&page_no=1',{
    // headers: {
    //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    // }
  })
  if (!response.ok){
    console.error("Error Fetching customers")
    return;
  }
  const responseData = await response.json()
  if(responseData.code != 200){
    console.error("Error getting customers")
    return;
  }
  // Store the product in the state
  setProjects(responseData.data.dataset);
}
const fetchWorkersData = async () => {
  const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/worker_list/?per_page=5000&page_no=1',{
  // headers: {
  //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
  // }
  })
  if (!response.ok){
    console.error("Error Fetching superintendents")
    return;
  }
  const responseData = await response.json()
  if(responseData.code != 200){
    console.error("Error getting superintedents")
    return;
  }
  // Store the product in the state
  setWorkers(responseData.data.dataset);
}
useEffect(() => {
  fetchProjectsData();
  fetchWorkersData();

}, []);
  return (
    <form onSubmit={handleSubmit}>
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
      <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
      <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Daily Work Table </Typography>
            </MDBox>
        
<Grid container spacing={2} alignItems="center" sx={{marginBottom:'1rem',marginLeft:'1rem',marginRight:'1rem'}}>
      {/* Date Picker */}
      <Grid item xs={10} md={6} lg={6} xl={6}>
        <Typography variant="h6" gutterBottom>
          Date:
        </Typography>
        <FormControl fullWidth>
         
          <Input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={onChangeDate}
          />
        </FormControl>
      </Grid>

      {/* Combo Box */}
      <Grid item xs={10} md={5} lg={5} xl={5}>
        <Typography variant="h6" gutterBottom>
          Project:
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="project">Project</InputLabel>
          <Select
            id="project"
            label="Project"
            sx={{height:'2.7rem'}}
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          >
            {projects.map((project) => (
              <MenuItem key={project.id} value={project.id}>
                {project.id} - {project.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    <Grid sx={6} >
    <List>
      <Typography variant='h2' sx={{marginLeft:'1rem'}}>Material:</Typography>
    <ListItem sx={{marginBottom:'1rem',marginTop:'1rem',marginLeft:'2rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Select Workers :</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="project">Workers</InputLabel>

            <Select
          labelId="demo-multiple-chip-label"
          id="workers_ids"
          name="workers_ids"
          multiple
          value={formData.workers_ids}
          onChange={handleInputChange}
          sx={{height: '2.5rem'}}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value.split('-')[1]} />
              ))}
            </Box>
          )}
          // MenuProps={MenuProps}
        >
            {workers.map((worker) => (
              <MenuItem key={worker.id} value={`${worker.id}-${worker.full_name}`}>
                {worker.full_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem'}}>
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
                onChange={handleInputChange}
              />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Invoice Number:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            
          <TextField
                variant="outlined"
                fullWidth
                name="invoice_number"
                value={formData.invoice_number}
                onChange={handleInputChange}
              />
          </Grid>
        </Grid>
      </ListItem>
      
      <ListItem sx={{ marginBottom: '1rem', marginLeft: '2rem', marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={2} xl={2}>
              <Typography variant="body1">Receipt Image</Typography>
            </Grid>
            <Grid item xs={10} md={4} lg={4} xl={4}>
                
            <Input
        sx={{display:'none'}}
        name="receipt_image"
        id="receipt_image"
        accept="image/*" 
        type="file"
        onChange={handleReceiptImageChange}
        />
        <label htmlFor="receipt_image">
          <Button variant="contained" component="span" sx={{color:'white !important'}}>
            Receipt Image
          </Button>
        </label>
        
          {
            formData.receipt_image && (
              <p key={1}>{formData.receipt_image.name}</p>
              ) 
            }
            </Grid>
          </Grid>
        </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
          <Grid itemxs={12} md={4} lg={4} xl={4}>
          <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="image-input"
      />
      <label htmlFor="image-input">
        <Button variant="contained" color="primary" component="span" sx={{color:'white !important'}}>
          Upload Images of Project
        </Button>
      </label>
      <Grid>
        <ul>
          {
           formData.images && (formData.images.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))) 
          }
        </ul>
      </Grid>
          </Grid>
      
      </ListItem>
    </List>
    </Grid>
      <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem'}}>
        <Button type="submit" variant="contained" sx={{color:'white !important'}}>Submit</Button>
      </MDBox>
    
      </Card>
    </DashboardLayout>
    </form>
  );
};
export default Daily_Work;

/* eslint-disable prettier/prettier */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from 'react';
import Card from "@mui/material/Card";
import {  FormControl,
    FormLabel,
    Input,Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    TextField,
    Button, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, } from '@mui/material';
import MDBox from 'components/MDBox';
import { Label } from '@mui/icons-material';
const ArrigmentTable = () => {
    const [box1Value, setBox1Value] = useState('');
  const [box2Value, setBox2Value] = useState('');

  const handleBox1Change = (event) => {
    setBox1Value(event.target.value);
  };

  const handleBox2Change = (event) => {
    setBox2Value(event.target.value);
  };
  const [data, setData] = useState([
    { id: 1, col1: '', col2: '', col3: '' },
  ]);
  const [nextId, setNextId] = useState(2);

  const handleAddRow = () => {
    if (data.length < 5) {
      setData([...data, { id: nextId, col1: '', col2: '', col3: '' }]);
      setNextId(nextId + 1);
    }
    console.log('>>',data)
  };

  const handleInputChange = (id, colName, value) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, [colName]: value } : row
    );
    setData(updatedData);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // You can add your file upload logic here using the selectedFile.
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      // Add your file upload logic here, e.g., using FormData and an API.
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <Card >
            <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
            <Typography variant='h2' sx={{textAlign:'center',marginTop:'1rem',marginBottom:'1rem', color:'white !important'}}>Sub-Conteractor Agreement Table</Typography>
            </MDBox>
            <List>
      {/* <ListItem sx={{marginBottom:'1rem',marginTop:'1rem',marginLeft:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="body1">Agreement ID#</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography variant='body1'>xxxxxxx</Typography>
          </Grid>
        </Grid>
      </ListItem> */}
    <ListItem sx={{marginBottom:'1rem',marginTop:'1rem',marginLeft:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Sub Name:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <FormControl variant="outlined" fullWidth>
          <Select
          sx={{height:'3rem'}}
          value={box1Value}
          onChange={handleBox1Change}
          inputProps={{
            name: 'box1',
            id: 'box1',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
          
        </FormControl>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Project:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <FormControl fullWidth>
        <Select
        sx={{height:'3rem'}}
          value={box2Value}
          onChange={handleBox2Change}
          inputProps={{
            name: 'box2',
            id: 'box2',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Start Date:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <FormControl fullWidth>
         <Input
           id="date"
           type="date"
         />
       </FormControl>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
      <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">End Date:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <FormControl fullWidth>
         
         <Input
           id="date"
           type="date"
         />
       </FormControl>
          </Grid>
        </Grid>
      
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
      <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Price:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <TextField variant="outlined" fullWidth 
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
             // Optional: Limit the maximum number of characters
          }}/>
          </Grid>
        </Grid>
      
      </ListItem>
    </List>
    <TableContainer component={Paper} sx={{width:'60%',margin:'auto'}}>
        <Table aria-label="dynamic table">
          <TableHead sx={{display: "table-header-group", backgroundColor:'#1A73E8'}}>
            <TableRow>
              <TableCell sx={{color:'white !important',textAlign:'center'}}>Check NO</TableCell>
              <TableCell sx={{color:'white !important',textAlign:'center'}}>Date</TableCell>
              <TableCell sx={{color:'white !important',textAlign:'center'}}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <TextField
                    value={row.col1}
                    onChange={(e) =>
                      handleInputChange(row.id, 'col1', e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.col2}
                    onChange={(e) =>
                      handleInputChange(row.id, 'col2', e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.col3}
                    onChange={(e) =>
                      handleInputChange(row.id, 'col3', e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem'}}>
      <Button
        sx={{color:'white !important'}}
        variant="contained"
        onClick={handleAddRow}
      >
        Add Row
      </Button>
      </MDBox>
      </TableContainer>
      
      <div>
      <FormControl component="fieldset">
        <Input
          accept="application/pdf"
          id="file-input"
          type="file"
          onChange={handleFileChange}
          sx={{display:'none'}}
        />
        <label htmlFor="file-input">
          <Button variant="contained" component="span" sx={{color:'white !important',marginLeft:'1rem',marginTop:'1rem',marginBottom:'1rem'}}>
          Upload PDF File
          </Button>
        </label>
      </FormControl>
      {selectedFile && (
        <div>
          <p style={{marginLeft:'1rem'}}>Selected File: {selectedFile.name}</p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            sx={{color:'white !important',marginLeft:'1rem',marginTop:'1rem'}}
          >
            Upload
          </Button>
        </div>
      )}
    </div>
    <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem'}}>
        <Button variant="contained" sx={{color:'white !important'}}>Submit</Button>
      </MDBox>
      </Card>
    </DashboardLayout>
  )
}

export default ArrigmentTable
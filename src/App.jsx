import { TextField, FormControlLabel, Radio, RadioGroup, FormControl, InputLabel, Select, MenuItem, Stack, Button } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {
  // State variables to hold user input
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');

  // Function to handle registration with validation
  const handleRegister = (e) => {
    e.preventDefault(); 

    // Check if any required field is empty
    if (!name || !address || !mobile || !email || !gender || !dob || !course) {
      alert("Please complete all fields in the form!");
      return;
    }

    alert(`Data stored successfully!\n\nName: ${name}\nAddress: ${address}\nMobile: ${mobile}\nEmail: ${email}\nGender: ${gender}\nDate of Birth: ${dob}\nCourse: ${course}`);
  };

  // Function to reset the form
  const handleReset = () => {
    setName('');
    setAddress('');
    setMobile('');
    setEmail('');
    setGender('');
    setDob('');
    setCourse('');
  };

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#fae6fa' }} className="d-flex justify-content-center align-items-center">
      <div style={{ width: '500px', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} className="text-center">
        <h2 className="bg-info p-4 rounded fw-bolder" style={{ height: '110px' }}>Student Registration Form</h2>

        <form className="mt-3" onSubmit={handleRegister}>
          {/* Student Name */}
          <div className="mb-3">
            <TextField id="outlined-name" label="Student name*" variant="outlined" style={{ width: '100%' }} value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <TextField id="outlined-address" label="Address*" variant="outlined" style={{ width: '100%' }} value={address} onChange={(e) => setAddress(e.target.value)}/>
          </div>
          <div className="mb-3"> 
            <TextField id="outlined-phone" label="Mobile number*" variant="outlined" style={{ width: '100%' }} value={mobile} onChange={(e) => setMobile(e.target.value)}/>
          </div>
          <div className="mb-3">
            <TextField id="outlined-mail" label="E-mail*" variant="outlined" style={{ width: '100%' }} value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          {/* Gender Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }} className="mt-0">
            <h5 style={{ color: '#4D4D4F', marginLeft: '30px' }}>Gender*</h5>
            <RadioGroup row style={{ marginLeft: '30px', gap: '20px' }} value={gender} onChange={(e) => setGender(e.target.value)}>
              <FormControlLabel control={<Radio />} label="Male" value="Male" />
              <FormControlLabel control={<Radio />} label="Female" value="Female" />
              <FormControlLabel control={<Radio />} label="Other" value="Other" />
            </RadioGroup>
          </div>

          <div className="mb-3">
            <TextField id="outlined-date" label="Date of Birth*" type="date" variant="outlined" style={{ width: '100%' }} InputLabelProps={{ shrink: true,}} value={dob} onChange={(e) => setDob(e.target.value)}/>
          </div>

          <FormControl style={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-label">Course*</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Course" value={course} onChange={(e) => setCourse(e.target.value)}>
              <MenuItem value="Biology">Biology</MenuItem>
              <MenuItem value="Computer Science">Computer Science</MenuItem>
              <MenuItem value="Commerce">Commerce</MenuItem>
              <MenuItem value="Humanities">Humanities</MenuItem>
            </Select>
          </FormControl>

          {/* Buttons Section */}
          <Stack direction="row" spacing={2} justifyContent="space-between" className='mt-2 px-2'>
            <Button className='bg-info' style={{ width: '45%', height: '40px' }} variant="contained" type="submit">
              Register
            </Button>
            <Button className='border border-dark' style={{ width: '45%', height: '40px' }} variant="outlined" onClick={handleReset}>
              Cancel
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;

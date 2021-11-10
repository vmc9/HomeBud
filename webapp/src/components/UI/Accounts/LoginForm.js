import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { 
            m: 2, 
            width: '25ch' ,
        },
        display: 'grid',
        gridTemplateColumns: 'repeat(1fr)',
        justifyContent: 'center'
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="email"
          label="Email"
          defaultValue="Email"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      <Button>Login</Button>
      <Button>Reset Password</Button>
    </Box>
  );
}

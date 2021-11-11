import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export default function FormPropsTextFields(props) {
    const [email, setEmail] = React.useState('')
    const emailHandler = (e)=>{
        setEmail(e.target.value)
    }
    const [pswd, setPswd] = React.useState('')
    const pswdHandler = (e)=>{
        setPswd(e.target.value)
    }
    const loginHandler = ()=>{
        console.log(`${email}~${pswd}`)
        setPswd('')
        setEmail('')
        props.close()
        
    }

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
              value={email}
              onChange={emailHandler}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              value={pswd}
              autoComplete="current-password"
              onChange={pswdHandler}
            />
          <Button onClick={loginHandler}>Login</Button>
          <Button>Reset Password</Button>
        </Box>
      );
}

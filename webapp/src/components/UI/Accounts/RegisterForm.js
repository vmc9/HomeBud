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
    const [firstName, setFirstName] = React.useState('')
    const firstNameHandler = (e)=>{ setFirstName(e.target.value)}

    const [lastName, setLastName] = React.useState('')
    const lastNameHandler = (e)=>{ setLastName(e.target.value)}

    const registernHandler = ()=>{
        console.log(`${email}~${pswd}~${firstName}~${lastName}`)
        setPswd('')
        setEmail('')
        setFirstName('')
        setLastName('')
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
              defaultValue="Email"
              onChange={emailHandler}
            />
            <TextField
              id="first-name"
              label="First Name"
              value={firstName}
              defaultValue="First Name"
              onChange={firstNameHandler}
            />
            <TextField
              id="last-name"
              label="Last Name"
              value={lastName}
              onChange={lastNameHandler}
              defaultValue="Last Name"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              value={pswd}
              onChange={pswdHandler}
              autoComplete="current-password"
            />
            <Button onClick={registernHandler}>Register</Button>
        </Box>
      );
    }
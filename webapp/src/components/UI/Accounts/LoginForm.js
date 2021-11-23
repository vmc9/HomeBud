import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { AuthContext } from '../../../store/auth-context';

export default function LoginForm(props) {
  const context = React.useContext(AuthContext)

  const [username, setusername] = React.useState('')
  const usernameHandler = (e)=>{
      setusername(e.target.value)
  }

  const [pswd, setPswd] = React.useState('')
  const pswdHandler = (e)=>{
      setPswd(e.target.value)
  }

  const loginHandler = async ()=>{
      //Login
      const auth_response = await fetch("http://localhost:3001/users/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: username,
          password: pswd
        })
      })
      //User profile fetch
      if(auth_response.ok){
        const json = await auth_response.json()
        localStorage.setItem('jwt', json.token)
        const identify_response = await fetch("http://localhost:3001/users/search?username="+username, {
          headers: {
            Authorization: 'bearer '+json.token
          }
        })
        if(identify_response.ok){
          const json = await identify_response.json()
          context.signedIn(json.user)
        }
      }
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
            id="username"
            label="Username"
            value={username}
            onChange={usernameHandler}
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

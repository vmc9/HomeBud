import * as React from 'react';
import { AuthContext } from '../../store/auth-context';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './Accounts/Login'
import UserDisplay from './Accounts/UserDisplay';

export default function Header() {
    const context = React.useContext(AuthContext)

    const validate_user = async ()=>{
      const response = await fetch("http://localhost:3001/users/returning", {
        headers: {
          Authorization: 'bearer '+localStorage.getItem('jwt')
        }
      })
      if(response.ok){
        const json = await response.json()
        context.signedIn(json.user)
      }
    }

    React.useEffect(() => {
      // if there is a token from a previous login, but we have not authenticated, try to validate the user with that token
      if(localStorage.getItem('jwt') && !context.isAuthenticated){
        validate_user()
      }
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                HomeBud
              </Typography>
              {context.isAuthenticated
                ? <UserDisplay />
                : <Login />}
            </Toolbar>
          </AppBar>
        </Box>
      );
}
import * as React from 'react';
import { Typography, Button } from "@mui/material"
import { AuthContext } from "../../../store/auth-context"
import Stack from '@mui/material/Stack';

const UserDisplay = ()=>{
    const context = React.useContext(AuthContext)
    return(
        <>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome back {`${context.userData.firstname}`}!
        </Typography>
        <Stack direction="row" spacing={2}>
            <Button variant="contained">My Account</Button>
            <Button variant="contained" onClick={context.signedOut}>Logout</Button>
        </Stack>
        </>
    )
}

export default UserDisplay
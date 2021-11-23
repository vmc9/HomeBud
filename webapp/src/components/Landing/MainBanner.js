import { Typography, Grid, Box} from '@mui/material'
import logo from '../../img_assets/images/logo.svg'

const Main = ()=>{
    return(
        <Box sx={{flexGrow: 1, m: 'auto', width: '80%', mt: 5, mb: 5}}>
            <Grid container flexWrap="wrap">
                <Grid item xs={6} textAlign="left" 
                    display="flex" 
                    flexDirection="column" 
                    justifyContent="center">
                    <Typography variant="h3" color="#1976d2">Welcome to HomeBud!</Typography>
                    <Typography variant="h5" color="#1976d2">The app that helps you find lost pets</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="right">
                    <Box component="img" src={logo}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main
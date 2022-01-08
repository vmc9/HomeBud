import LostDisplay from "./Lost Display"
import { Grid, Box } from '@mui/material'

const MainInfo = ()=>{
    return(
        <Box sx={{flexGrow: 1, m: 'auto', mt: 5, mb: 5}}>
            <Grid container flexWrap="wrap" spacing={2}>
                <Grid item xs={4} display="flex" justifyContent="left">
                    <LostDisplay />
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="center">
                    <LostDisplay />
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="right">
                    <LostDisplay />
                </Grid>  
            </Grid>
        </Box>
    )
}

export default MainInfo
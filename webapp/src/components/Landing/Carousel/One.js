import { Card, CardContent, Grid, Typography, CardMedia, Box, CardActions, Button } from '@mui/material'
import { Map } from '@mui/icons-material'
import lost_one from '../../../img_assets/images/20.jpeg'

const One = ()=>{
    return(
        <Card sx={{backgroundColor: "#1976d2", borderRadius: 5}}>
            <CardContent>
                <Grid container>
                    <Grid item xs={6} textAlign="left" 
                        display="flex" 
                        flexDirection="column" 
                        sx={{mt: 'auto', mb: 'auto'}}>
                        <Box sx={{p: 2}}>
                            <Typography variant="h4" color="white" sx={{mb: 1.5}}>
                                Map it out
                            </Typography>
                            <Typography variant="h6" color="white">
                                <p>
                                    One you set up a missing pet page, you can track local pet sightings on the HomeBud map and verify if your missing pet has been seen nearby!
                                </p>
                            </Typography>
                            <CardActions sx={{justifyContent: "left", mt: 5}}>
                                <Button variant="contained" 
                                    sx={{color: "white", fontSize: 18, backgroundColor: "#B1D4E0"}}
                                    disableElevation 
                                    endIcon={<Map />}>
                                    Check out the map
                                </Button>
                            </CardActions>
                        </Box>
                    </Grid>
                    <Grid item xs={6} display="flex">
                        <CardMedia component="img"
                        height="300"
                        sx={{maxWidth: 600, m: 'auto', p: 1, borderRadius: 5, backgroundColor: "white"}}
                        image={lost_one} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default One
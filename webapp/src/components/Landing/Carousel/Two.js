import { Card, CardContent, Grid, Typography, CardMedia, Box, CardActions, Button } from '@mui/material'
import { LocalSee } from '@mui/icons-material'
import lost_one from '../../../img_assets/images/community.jpg'

const Two = ()=>{
    return(
        <Card sx={{backgroundColor: "#1976d2", borderRadius: 5}}>
            <CardContent>
                <Grid container>
                    <Grid item xs={6} display="flex">
                        <CardMedia component="img"
                        height="300"
                        sx={{maxWidth: 600, m: 'auto', p: 1, borderRadius: 5, backgroundColor: "white"}}
                        image={lost_one} />
                    </Grid>
                    <Grid item xs={6} textAlign="right" 
                        display="flex" 
                        flexDirection="column" 
                        sx={{mt: 'auto', mb: 'auto'}}>
                        <Box sx={{p: 2}}>
                            <Typography variant="h4" color="white" sx={{mb: 1.5}}>
                            Help from your friends
                            </Typography>
                            <Typography variant="h6" color="white">
                            Users can tag sighted pets on the HomeBud Map at any point in time through the app, giving you visibility on the potential wherabouts of your pet.
                            </Typography>
                            <CardActions sx={{justifyContent: "right", mt: 5}}>
                                <Button variant="contained" 
                                    sx={{color: "white", fontSize: 18, backgroundColor: "#B1D4E0"}}
                                    disableElevation 
                                    endIcon={<LocalSee />}>
                                    Tag a sighting
                                </Button>
                            </CardActions>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Two
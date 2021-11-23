import { Card, CardContent, Grid, Typography, CardMedia, Box, CardActions, Button } from '@mui/material'
import { ThumbUp } from '@mui/icons-material'
import lost_one from '../../../img_assets/images/17.jpeg'

const Zero = ()=>{
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
                            We're here to help
                            </Typography>
                            <Typography variant="h6" color="white">
                            HomeBud provides key resources and tools to guide your search efforts and get set up to receive help from others
                            </Typography>
                            <CardActions sx={{justifyContent: "right", mt: 5}}>
                                <Button variant="contained" 
                                    sx={{color: "white", fontSize: 18, backgroundColor: "#B1D4E0"}}
                                    disableElevation 
                                    endIcon={<ThumbUp />}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Zero
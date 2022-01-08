import Typography from '@mui/material/Typography'
import { Card, CardMedia, CardContent } from '@mui/material'
import pet from '../../img_assets/images/1.jpg'

const missing_pet = {
    message: "Roxy is a sweet girl, last seen jumping over her owner's backyard fence. She is a small Shiba, responds to her name, and is dearly missed by her family!",
    name: 'Roxy',
    owner: 'Marie Kondo',
    lost: 'June 12 2021',
    picture: ''
}

const LostDisplay = ()=>{
    return(
        <Card sx={{ maxHeight: 500, minWidth: 300, maxWidth: 400, backgroundColor: "#1976d2", borderRadius: 5}}>
            <CardContent>
                <Typography variant="h6" color="white">{missing_pet.name} / {missing_pet.owner}</Typography>
                <Typography variant="subtitle1" color="white">{missing_pet.lost}</Typography>
            </CardContent>
            <CardMedia 
                component="img"
                image={pet}
                height="300"
            />
            <CardContent>
                <Typography variant="subtitle2" color="white">{missing_pet.message}</Typography>
            </CardContent>
        </Card>            
    )
}

export default LostDisplay
import React from 'react'
import { Button, Grid, Paper } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import Zero from './Zero'
import One from './One'
import Two from './Two.js'

const MainCarousel = ()=>{
    const [value, setValue] = React.useState(0)

    const stateHandler = (direction)=>{
        if (direction === "R"){
            setValue( (value + 1) % 3 )
        }
        if(direction === "L"){
            if((value - 1) < 0){
                setValue(2)
            }else{
                setValue( (value - 1) % 3 )
            }
        }
    }
    
    return(
        <Paper elevation={0}>
            <Grid container>
                <Grid item xs={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Button variant="contained"
                        onClick={()=> stateHandler("L")} 
                        sx={{color: "white", fontSize: 18, backgroundColor: "#1976d2"}}
                        disableElevation 
                        startIcon={<ArrowBack/>}>
                    </Button>
                </Grid>
                <Grid item xs={10} display="flex" justifyContent="center">
                    { value === 0 && <Zero />}
                    { value === 1 && <One/ >}
                    { value === 2 && <Two />}
                </Grid>
                <Grid item xs={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Button variant="contained"
                        onClick={()=> stateHandler("R")} 
                        sx={{color: "white", fontSize: 18, backgroundColor: "#1976d2"}}
                        disableElevation 
                        endIcon={<ArrowForward />}>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default MainCarousel
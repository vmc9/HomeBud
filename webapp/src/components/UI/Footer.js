import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Help, Map, Info } from '@mui/icons-material/';

const Footer = ()=> {
    return(
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation
          showLabels
          sx={{bgcolor: "#1976d2"}}
        >
          <BottomNavigationAction label="FAQ" icon={<Help />} />
          <BottomNavigationAction label="HomeBud Map" icon={<Map />} />
          <BottomNavigationAction label="About Us" icon={<Info />} />
        </BottomNavigation>
      </Paper>
    )
}

export default Footer
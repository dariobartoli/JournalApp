import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"

const drawerWidth = 240; //drawer /sidebar

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>

        <NavBar drawerWith={drawerWidth}/>

        <SideBar drawerWidth={drawerWidth}/>


        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            
            <Toolbar />

            {children}
        </Box>

    </Box>
  )
}

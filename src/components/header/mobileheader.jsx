import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { LoginRegisterBtn } from "./LoginregisterBtn"

const Mobileheader = ({matches739}) =>{
    return <Box sx={{alignItems:'center', display:'flex', justifyContent:'space-between', width:'100%'}}>
        <MenuIcon sx={{}}/>
        <div style={{display:'flex', gap:'5px', alignItems:'center'}}>
            <LoginRegisterBtn matches739={matches739} style={{display:'inline-block'}}/>
            <div style={{display:'inline-block'}}>Flag</div>
        </div>
    </Box>
}

export {Mobileheader}
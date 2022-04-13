import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { LoginRegisterBtn } from "./LoginregisterBtn"
import ukFlag from '../Imgs/UK-flag.svg'

const Mobileheader = ({matches739}) =>{
    return <Box sx={{alignItems:'center', display:'flex', justifyContent:'space-between', width:'100%', padding:'5px'}}>
        <MenuIcon sx={{marginLeft:'5px'}}/>
        <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
            <LoginRegisterBtn matches739={matches739}/>
            <img src={ukFlag} width={20} height={20} style={{marginLeft:'10px'}} alt="Flag of the United Kingdom"/>
        </div>
    </Box> 
}

export {Mobileheader}
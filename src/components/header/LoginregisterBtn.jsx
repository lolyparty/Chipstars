import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const LoginRegisterBtn = ({matches872, matches964, matches1244, matches739})=>{
    return <Box >
        <Button sx={{marginRight:'15px', border:'1.5px solid #AD0F0A', borderRadius:'7px', padding: matches964 ? '5px 10px' : '5px 15px', fontSize :matches739 ? '9px' :  matches872 ? '10px' : matches964 ? '12px' : '16px'}} variant='outlined'>Register</Button>
        <Button variant='contained' color='secondary' sx={{padding: matches1244 ? '5px 12px' : matches964 ? '5px 10px' : '5px 15px', fontSize :matches739 ? '9px' : matches872 ? '10px' : matches964 ? '12px'  : matches1244 ? '14px' : '16px'}}>Log in</Button>
</Box>
}

export {LoginRegisterBtn}
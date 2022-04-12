import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import { ThemeProvider} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from './Imgs/Logo.svg'
import {theme} from './muiTheme'

const Header = ()=>{
    const matches1244 = useMediaQuery('(max-width:1244px)');
    const matches964 = useMediaQuery('(max-width:964px)')
    const matches872 = useMediaQuery('(max-width:872px)')
    const matches821 = useMediaQuery('(max-width:821px)')


    return <ThemeProvider theme={theme}>
        
        <Box elevation={0} sx={{backgroundColor:'black', padding:matches821 ? '15px 10px': matches964 ? '20px 25px' : '20px 45px', color:'white', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <img src={Logo} alt="Chipstars Logo" width={matches821 ? 100 : matches872 ? 115 : matches1244 ?  150 :  200} height={40}/>
        <Box sx={{display:'flex', justifyContent:matches1244 ? 'space-betwwen' : 'space-evenly'}}>
            <Link href="#" underline="none" sx={{ marginX:matches821 ? '10px' : matches1244 ? '13px' : '25px', fontSize : matches1244 ? '14px' : '16px'}}>Casino</Link>
            <Link href="#" underline="none" sx={{ marginX:matches821 ? '10px' : matches1244 ? '13px' : '25px', fontSize : matches1244 ? '14px' : '16px'}}>Live Casino</Link>
            <Link href="#" underline="none" sx={{ marginX:matches821 ? '10px' : matches1244 ? '13px' : '25px', fontSize : matches1244 ? '14px' : '16px'}}>Sportsbook</Link>
            <Link href="#" underline="none" sx={{ marginX:matches821 ? '10px' : matches1244 ? '13px' : '25px', fontSize : matches1244 ? '14px' : '16px'}}>Poker</Link>
            <Link href="#" underline="none" sx={{ marginX:matches821 ? '10px' : matches1244 ? '13px' : '25px', fontSize : matches1244 ? '14px' : '16px'}}>Virtuals</Link>
            <Link href="#" underline="none" sx={{ marginX:matches821 ? '10px' : matches1244 ? '13px' : '25px', fontSize : matches1244 ? '14px' : '16px'}}>eSports</Link>
        </Box>
        <Box >
            <Button sx={{marginRight:'15px', border:'1.5px solid #AD0F0A', borderRadius:'7px', padding: matches964 ? '5px 10px' : '5px 15px', fontSize : matches872 ? '10px' : matches964 ? '12px' : '16px'}} variant='outlined'>Register</Button>
            <Button variant='contained' color='secondary' sx={{padding: matches1244 ? '5px 12px' : matches964 ? '5px 10px' : '5px 15px', fontSize :matches872 ? '10px' : matches964 ? '12px'  : matches1244 ? '14px' : '16px'}}>Log in</Button>
        </Box>
    </Box>
    </ThemeProvider>
}

export {Header}
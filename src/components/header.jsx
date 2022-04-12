import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Logo from './Imgs/Logo.svg'

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary:{
          main:'#fff'
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      secondary:{
          main:'#AD0F0A',
      },
    },
  });

const Header = ()=>{
    

    return <ThemeProvider theme={theme}>
        <Box elevation={0} sx={{backgroundColor:'black', padding:'20px 45px', color:'white', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <img src={Logo} alt="Chipstars Logo" width={200} height={40}/>
        <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
            <Link href="#" underline="none" sx={{marginX:'30px'}}>Casino</Link>
            <Link href="#" underline="none" sx={{marginX:'30px'}}>Live Casino</Link>
            <Link href="#" underline="none" sx={{marginX:'30px'}}>Sportsbook</Link>
            <Link href="#" underline="none" sx={{marginX:'30px'}}>Poker</Link>
            <Link href="#" underline="none" sx={{marginX:'30px'}}>Virtuals</Link>
            <Link href="#" underline="none" sx={{marginX:'30px'}}>eSports</Link>
        </Box>
        <Box >
            <Button sx={{marginRight:'15px', border:'1.5px solid #AD0F0A', borderRadius:'7px'}} variant='outlined'>Register</Button>
            <Button variant='contained' color='secondary'>Log in</Button>
        </Box>
    </Box>
    </ThemeProvider>
}

export {Header}
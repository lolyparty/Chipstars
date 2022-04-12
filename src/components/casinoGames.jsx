import { Box, Button, Container, Grid } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Alchemy from './Imgs/bookofalchemy.svg'
import Bookofoziris from './Imgs/bookofoziris.svg'
import WolfofGold from './Imgs/wolfgold.svg'
import hellhot from './Imgs/Hellhot.svg'
import crystalFruits from './Imgs/crystalfruits.svg'
import Nefertitis from './Imgs/nefertitis.svg'
import sugarGlider from './Imgs/sugarglider.svg'

const BestCasinoGames = () =>{
    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          secondary:{
              main:'#AD0F0A',
          },
        },
      });

    return <ThemeProvider theme={theme}>
        <Container className="BestCasinoGamesContainer">
            <div className="bestgamesHeader">
                <h2>Best Casino Games</h2>
                <select>
                    <option>POPULAR GAMES</option>
                    <option>POPULAR GAMES</option>
                    <option>POPULAR GAMES</option>
                    <option>POPULAR GAMES</option>
                </select>
            </div>
            <Box sx={{width:'100%', borderRadius:'5px', padding:'30px', boxShadow:'-2px 7px 10px 5px #0a0a0a'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg" src={Alchemy} alt="" preserveAspectRatio="none"/>
                    </Grid>
                    <Grid item xs={3} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg"  src={Bookofoziris} alt="" />
                    </Grid>
                    <Grid item xs={3} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg"  src={WolfofGold} alt="" />
                    </Grid>
                    <Grid item xs={2} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg"  src={hellhot} alt="" />
                    </Grid>
                    <Grid item xs={2} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg"  src={crystalFruits} alt="" />
                    </Grid>
                    <Grid item xs={2} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg"  src={Nefertitis} alt="" />
                    </Grid>
                    <Grid item xs={6} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg"  src={sugarGlider} alt="" />
                    </Grid>
                </Grid>
                <hr className="bestGamesUnderline" />
                <div className="goToCasinoDiv">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button variant='contained' color='secondary' sx={{paddingX:'50px', borderRadius:'5px'}}>Go to Casino</Button>
                </div>
            </Box>
        </Container> 
    </ThemeProvider>   
}

export {BestCasinoGames}
import { Box, Button, Container, Grid } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './muiTheme'
import Alchemy from './Imgs/bookofalchemy.svg'
import Bookofoziris from './Imgs/bookofoziris.svg'
import WolfofGold from './Imgs/wolfgold.svg'
import hellhot from './Imgs/Hellhot.svg'
import crystalFruits from './Imgs/crystalfruits.svg'
import Nefertitis from './Imgs/nefertitis.svg'
import sugarGlider from './Imgs/sugarglider.svg'
import santa from './Imgs/santa.svg'


const BestCasinoGames = () =>{
    const matches700 = useMediaQuery('(max-width:700px)');
    const matches800 = useMediaQuery('(max-width:800px)');
    const matches944 = useMediaQuery('(max-width:944px)');

    const matches500 = useMediaQuery('(max-width:500px)');

    return <ThemeProvider theme={theme}>
        <Container className="BestCasinoGamesContainer">
            <div className="bestgamesHeader">
                <h2>Best Casino Games</h2>
                {!matches700 ? <select>
                    <option>POPULAR GAMES</option>
                    <option>POPULAR GAMES</option>
                    <option>POPULAR GAMES</option>
                    <option>POPULAR GAMES</option>
                </select> : null}
            </div>
            <Box sx={{width:matches800 ? '95%' : '99%', marginX:'auto', borderRadius:'5px', padding:matches500 ? '10px' : matches800 ? '20px' : '30px', boxShadow:'-2px 7px 10px 5px #0a0a0a'}}>
                <Grid container spacing={matches800 ? 1 : 2}>
                    <Grid item xs={matches500 ? 12 : 6} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg" src={matches500 ? santa : Alchemy} alt="" preserveAspectRatio="none"/>
                    </Grid>
                    <Grid item xs={3} sx={{maxHeight:'230px', display: matches500 ? 'none' : null}}>
                        <img className="bestGamesImg"  src={Bookofoziris} alt="" />
                    </Grid>
                    <Grid item xs={matches500 ? 4 : 3} sx={{maxHeight:'230px', order:matches500 ? 7 : null}}>
                        <img className="bestGamesImg"  src={WolfofGold} alt="" />
                    </Grid>
                    <Grid item xs={matches500 ? 4 : 2} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg"  src={hellhot} alt="" />
                    </Grid>
                    <Grid item xs={matches500 ? 8 : 2} sx={{maxHeight:matches500 ? '150px' : '230px'}}>
                        <img className="bestGamesImg"  src={crystalFruits} alt="" />
                    </Grid>
                    <Grid item xs={2} sx={{maxHeight:'230px', display: matches500 ? 'none' : null}}>
                        <img className="bestGamesImg"  src={Nefertitis} alt="" />
                    </Grid>
                    <Grid item xs={matches500 ? 8 : 6} sx={{maxHeight:'230px'}}>
                        <img className="bestGamesImg"  src={sugarGlider} alt="" />
                    </Grid>
                </Grid>
                <hr className="bestGamesUnderline" />
                <div className="goToCasinoDiv">
                    {matches500 ? <p>There is no better way to experience casino than to play one of our 2500+ games which are provided by more than 30+ different providers.
                    </p> : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                    <Button variant='contained' color='secondary' sx={{paddingX:matches944 ? '20px' : '50px', borderRadius:'5px', maxHeight:'50px', maxWidth:matches700 ? '200px' : null, marginTop:matches700 ? '15px' :null}}>Go to Casino</Button>
                </div>
            </Box>
        </Container> 
    </ThemeProvider>   
}

export {BestCasinoGames}
import { Container, Paper } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import rightArrow from './Imgs/rightArrow.svg'
import registerImg from './Imgs/register.svg'
import depositSvg from './Imgs/deposit.svg'
import bonusSvg from './Imgs/bonus.svg'
import eclipsed from './Imgs/Planet.svg'


const CTACards = ( ) =>{
    const matches1190 = useMediaQuery('(max-width:1190px)');
    const matches1050 = useMediaQuery('(max-width:1050px)');
    const matches929 = useMediaQuery('(max-width:929px)');
    const matches500 = useMediaQuery('(max-width:500px)');

    return <Container sx={{ display:'flex', justifyContent:'space-evenly', paddingY:matches500 ? '15px' : '40px', flexDirection: matches929 ? 'column' : 'row', alignItems:matches929 ? 'center' : null, position:'relative', marginBottom:matches929 ? '30px' : null, overflow:'hidden'}}>
        <div className="eclipsediv2"><img src={eclipsed} alt="" className="bgeclipse2"/></div>

        <Paper sx={{background:'#121212', paddingY:matches929 ? '15px':'5px',paddingX:matches929 ? '30px' :matches1190 ? '10px' : '30px', color:'white', boxShadow:'-2px 7px 10px 5px #0a0a0a', alignItems:'center', borderRadius:'10px', width:matches500 ? '98%' : matches929 ? '400px' :matches1050 ? '280px' :matches1190 ? '320px' :'350px', display:'flex' , marginY:matches929 ? '15px' : null, justifyContent:matches929? 'space-between' : null}}
        >

            <img src={registerImg} alt="Register" />
            <div className="ctaDivs">
                <h4 className="ctaHero">Register</h4>
                <p className="ctaParagraphs">It takes 30 seconds only!</p>
            </div>
            <img src={rightArrow} alt="Register" />
        </Paper>

        <Paper sx={{background:'#121212', paddingY:matches929 ? '15px':'5px',paddingX:matches929 ? '30px' :matches1190 ? '10px' : '30px', color:'white', boxShadow:'-2px 7px 10px 5px #0a0a0a', alignItems:'center', borderRadius:'10px', width:matches500 ? '98%' :matches929 ? '400px' :matches1050 ? '280px' :matches1190 ? '320px' :'350px', display:'flex' , marginY:matches929 ? '15px' : null, justifyContent:matches929? 'space-between' : null}}
        >
        <img src={depositSvg} alt="" />
            <div className="ctaDivs">
                <h4 className="ctaHero">Make a deposit</h4>
                <p className="ctaParagraphs">Start from $10</p>
            </div>
            <img src={rightArrow} id="depositRightArrow" alt="" />
        </Paper>

        <Paper sx={{background:'#121212', paddingY:matches929 ? '15px':'5px',paddingX:matches929 ? '30px' :matches1190 ? '10px' : '30px', color:'white', boxShadow:'-2px 7px 10px 5px #0a0a0a', alignItems:'center', borderRadius:'10px', width:matches500 ? '98%' :matches929 ? '400px' :matches1050 ? '280px' :matches1190 ? '320px' :'350px', display:'flex' , marginY:matches929 ? '15px' : null, justifyContent:matches929? 'space-between' : null}}
        >
        <img src={bonusSvg} alt="" />
            <div className="ctaDivs">
                <h4 className="ctaHero">Get up to 250 Free Spins-NO WAGER!</h4>
                <p className="ctaParagraphs">On your 1st deposit</p>
            </div>
            <img src={rightArrow} alt="" />
        </Paper>
    </Container>
}

export {CTACards}
import { Container, Paper } from "@mui/material"
import rightArrow from './Imgs/rightArrow.svg'
import registerImg from './Imgs/register.svg'
import depositSvg from './Imgs/deposit.svg'
import bonusSvg from './Imgs/bonus.svg'

const CTACards = ( ) =>{
    return <Container sx={{background:'#121212', display:'flex', justifyContent:'space-evenly', paddingY:'40px'}}>

        <Paper sx={{background:'#121212', paddingY:'10px',paddingX:'30px', color:'white', boxShadow:'-2px 7px 10px 5px #0a0a0a', alignItems:'center', borderRadius:'10px', width:'350px', display:'flex',}}>
            <img src={registerImg} alt="Register" />
            <div className="ctaDivs">
                <h4>Register</h4>
                <p className="ctaParagraphs">It takes 30 seconds only!</p>
            </div>
            <img src={rightArrow} alt="Register" />
        </Paper>

        <Paper sx={{background:'#121212', paddingY:'10px',paddingX:'30px', color:'white', boxShadow:'-2px 7px 10px 5px #0a0a0a', alignItems:'center', borderRadius:'10px', width:'350px', display:'flex',}}>
        <img src={depositSvg} alt="" />
            <div className="ctaDivs">
                <h4>Make a deposit</h4>
                <p className="ctaParagraphs">Start from $10</p>
            </div>
            <img src={rightArrow} alt="" />
        </Paper>

        <Paper sx={{background:'#121212', paddingY:'10px', paddingX:'30px', color:'white', boxShadow:'-2px 7px 10px 5px #0a0a0a', alignItems:'center', borderRadius:'10px', width:'350px', display:'flex',}}>
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
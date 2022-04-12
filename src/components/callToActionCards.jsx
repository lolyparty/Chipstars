import { Container, Paper } from "@mui/material"

const CTACards = ( ) =>{
    return <Container sx={{background:'#121212'}}>
        <Paper elevation={3} sx={{background:'#121212', display:'flex', padding:'5px'}}>
            <img src="" alt="" />
            <div>
                <h4>Register</h4>
                <p>It takes 30 seconds only!</p>
            </div>
            <img src="" alt="" />
        </Paper>
        <Paper elevation={3} sx={{background:'#121212'}}></Paper>
        <Paper elevation={3} sx={{background:'#121212'}}></Paper>
    </Container>
}

export {CTACards}
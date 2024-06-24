import { Box, Button, Grid, Typography } from '@material-ui/core';
import Logo from "../images/logo.png";
import Ikdevelopers from "../assets/Ik developers.png";
import {makeStyles} from '@material-ui/core/styles';
import { Link, Navigate } from 'react-router-dom';

const useStyles = makeStyles(()=>({
    nav: {
        display: 'flex',
        alignItems: 'center',
        height: '4rem',
        // width: '100%',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
        // position:'fixed',
        top:'0px',
        backgroundColor:'white',
    },
    menu: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        gap: '2rem',
        cursor:'pointer',
        fontSize: '16px',
        color:'black'
    },
    contactBtn:{
        backgroundImage: `linear-gradient(to right, rgba(87, 0, 123, 1),rgba(102, 117, 247, 1))`,
        color:'white',
        marginRight:'20px', 
    }
}));

export const Header = () => {
    const classes = useStyles();
    return (
        <Box>
            <Grid container className={classes.nav} >
                <Grid item lg={2} md={2} xs={2} >
                    <Box style={{ display: 'flex', justifyContent: 'center', paddingLeft: '2rem' }}>
                        <img src={Logo} alt='logo' style={{ paddingRight: '5px',height:'60px' }} />
                    </Box>
                </Grid>
                <Grid item lg={8} md={8} xs={8}>
                    <Box className={classes.menu} >
                    <Link to="/">
                        <Typography component="h6" style={{fontWeight:'bold',color:'black'}}>Home</Typography>
                    </Link>    
                    <Link to="/service">
                        <Typography component="h6" style={{fontWeight:'bold',color:'black'}}>Services</Typography>
                        </Link>
                        <Typography component="h6" style={{fontWeight:'bold'}}>Products</Typography>
                        <Typography component="h6" style={{fontWeight:'bold'}}>OurTeam</Typography>
                        <Typography component="h6" style={{fontWeight:'bold'}}>Clients</Typography>
                    <Link to="/portfolio">
                        <Typography component="h6" style={{fontWeight:'bold',color:'black'}}>Portfolio</Typography>
                    </Link>
                        <Typography component="h6" style={{fontWeight:'bold'}}>Schedule Meeting</Typography>
                        <Link to="/about-us/about">
                        <Typography component="h6" style={{fontWeight:'bold'}}>About Us</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item lg={2} md={2} xs={2}>
                    <Box style={{ display: 'flex', justifyContent: 'end'}}>
                        <Button className={classes.contactBtn}>
                            <Link to="/contact">
                             <Typography style={{textTransform:'capitalize',fontSize:'15px',color:'white'}}>Contact us</Typography>
                             </Link>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


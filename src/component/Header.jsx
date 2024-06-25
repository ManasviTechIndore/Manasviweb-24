import {Box, Button, Grid, Typography} from "@material-ui/core";
import Logo from "../images/logo.png";
import Hamburger from "../assets/hamburger.png";
import { makeStyles } from '@material-ui/core/styles';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    nav: {
        display: 'flex',
        alignItems: 'center',
        height: '4rem',
        // width: '100%',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
        top: '0px',
        backgroundColor: 'white'
    },
    menu: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        gap: '2rem',
        cursor: 'pointer',
        fontSize: '16px',
        color: 'black',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    contactBtn: {
        backgroundImage: `linear-gradient(to right, rgba(87, 0, 123, 1),rgba(102, 117, 247, 1))`,
        color: 'white',
        marginRight: '20px',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    hamburger: {
        display: 'none',
        '@media (max-width: 768px)': {
            display: 'block',
            marginRight: '30px'
        }
    },
    mobileMenu: {
        padding: '15px',
        height: '350px',
        width: '300px',
        backgroundColor: '#80008026',
        display: 'grid',
        gap: '10px',
        justifyContent: 'center',
    },
    mobileMenuable: {
        display: 'none'
    }
}
));

export const Header = () => {
    const [showHamburger, setHamburger] = useState(false);
    const classes = useStyles();
    return (
        <Box>
            <Grid container className={classes.nav} >
                <Grid item lg={2} md={2} xs={2} >
                    <Box style={{ display: 'flex', justifyContent: 'center', paddingLeft: '2rem' }}>
                        <img src={Logo} alt='logo' style={{ paddingRight: '5px', height: '60px' }} />
                    </Box>
                </Grid>
                <Grid item lg={8} md={8} xs={8}>
                    <Box className={classes.menu} >
                        <Link to="/">
                            <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Home</Typography>
                        </Link>
                        <Link to="/service">
                            <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Services</Typography>
                        </Link>
                        <Link to="/products">
                            <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Products</Typography>
                        </Link>
                        <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>OurTeam</Typography>
                        <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Clients</Typography>
                        <Link to="/portfolio">
                            <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Portfolio</Typography>
                        </Link>
                        <Link to='/schedule-meeting'>
                            <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Schedule Meeting</Typography>
                        </Link>
                        <Typography component="h6" style={{ fontWeight: 'bold' }}>About Us</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} md={2} xs={2}>
                    <Box style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button className={classes.contactBtn}>
                            <Link to="/contact">
                                <Typography style={{ textTransform: 'capitalize', fontSize: '15px', color: 'white' }}>Contact us</Typography>
                            </Link>
                        </Button>
                        <Box className={classes.hamburger}>
                            <a href='#' onClick={() => {
                                setHamburger(!showHamburger)
                                console.log(showHamburger)
                            }}>
                                <img style={{ height: "45px" }} src={Hamburger} alt="hamburger" />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* mobile menu */}
            <Box style={{ display: 'grid', justifyContent: 'end' }}>
                <Box className={showHamburger ? classes.mobileMenu : classes.mobileMenuable} >
                    <Link to="/">
                        <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Home</Typography>
                    </Link>
                    <Link to="/service">
                        <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Services</Typography>
                    </Link>
                    <Link to="/products">
                        <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Products</Typography>
                    </Link>
                    <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>OurTeam</Typography>
                    <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Clients</Typography>
                    <Link to="/portfolio">
                        <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Portfolio</Typography>
                    </Link>
                    <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>Schedule Meeting</Typography>
                    <Typography component="h6" style={{ fontWeight: 'bold', color: 'black' }}>About Us</Typography>
                    <Link to="/contact">
                        <Typography style={{ fontWeight: 'bold', color: 'black' }}>Contact us</Typography>
                    </Link>
                    {/* <Button className={classes.contactBtn}>
                            <Link to="/contact">
                             <Typography  style={{textTransform:'capitalize',fontSize:'15px',color:'white'}}>Contact us</Typography>
                             </Link>
                    </Button> */}
                </Box>
            </Box>
        </Box>
    )
}


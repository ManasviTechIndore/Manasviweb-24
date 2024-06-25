import React from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import Logo from '../images/logo.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import { Link } from '@mui/material'

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#800080de",
    height: 'auto',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingLeft: '30px',
    gap: '0px',
    textAlign: 'justify'

  },
  section: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      marginTop: '2rem'
    }
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      marginLeft: '-8rem'
    }
  },
  service: {
    '@media (max-width: 600px)': {
      marginLeft: '-4rem'
    }
  },
  Logo: {
    marginLeft: '3.5rem',
    backgroundColor: 'white',
    height: '90px',
    width: '90px',
    borderRadius: '50%',
    marginBottom: '15px'
  }
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.footer}>
        <Grid item sm={6} xs={12} md={3} lg={2}>
          <Box className={classes.section}>
            <Box className={classes.Logo}>
              <img src={Logo} alt='logo' style={{ height: '90px', width: '90px' }} />
            </Box>
            <Typography variant='p' style={{ width: '14rem' }}>"At Manasvi Technologies(OPC) Pvt. Ltd, we make phone apps
              that are just right for you. Tell us what you need!"</Typography>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12} md={3} lg={2}>
          <Box className={classes.service}>
            <Box className={classes.section}>
              <Typography variant='h4' style={{ fontWeight: 'bold' }}>Products</Typography><br />
              <Typography variant='p'>Software Development</Typography>
              <Typography variant='p'>App Development</Typography>
              <Typography variant='p'>IT Services </Typography>
              <Typography variant='p'>E-Commerce </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12} md={3} lg={2}>
          <Box className={classes.section}>
            <Typography variant='h4' style={{ fontWeight: 'bold' }}>Contact Us</Typography><br />
            <Typography variant='p'>Phone: +919302447001</Typography>
            <Typography variant='p'>Email: manasvitech01@gmail</Typography>
            <Typography variant='p' style={{ width: '15rem' }}>Corporate Office:111B,80 Feet Road, Old Ashoka Garden Bhopal(462023)</Typography>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12} md={3} lg={2}>
          <Box className={classes.section}>
            <Box className={classes.social}>
              <img src={facebook} alt='facebook' />
              <Link href="https://www.facebook.com/people/Manasvi-Technologies-OPC-Pvt-Ltd/61555158365754/" target='blank' style={{ textDecoration: 'none', color: 'white' }}><Typography>Facebook</Typography></Link>
            </Box>
            <Box className={classes.social}>
              <img src={twitter} alt='twitter' />
              <Link href="https://x.com/manasvitech01?mx=2" target='blank' style={{ textDecoration: 'none', color: 'white' }}><Typography>Twitter X</Typography></Link>
            </Box>
            <Box className={classes.social}>
              <img src={instagram} alt='Instagram' />
              <Link href="https://www.instagram.com/manasvi.technologies/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target='blank' style={{ textDecoration: 'none', color: 'white' }}><Typography>Instagram</Typography></Link>
            </Box>
            <Box className={classes.social}>
              <img src={linkedin} alt='LinkedIn' />
              <Link href="https://www.linkedin.com/in/manasvi-technologies-7aa426262/" target='blank' style={{ textDecoration: 'none', color: 'white' }}><Typography>LinkedIn</Typography></Link>
            </Box>
          </Box>
        </Grid>

      </Grid>
      <Grid item sm={12} xs={12} md={12} lg={12}>

        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '10px' }}>
          <Typography variant='h6'>© 2023-2024. All Rights Reserved |
            Manasvi Technologies (OPC) PVT. LTD.</Typography>
        </Box>
      </Grid>
    </>
  )
}

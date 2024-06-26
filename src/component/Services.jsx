import React, { useEffect } from 'react'
import { Header } from '../component/Header'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import { Button, Card, CardActions, CardContent, CardMedia, Divider } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from '../component/Footer'
import { services } from '../Data'
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    title: {
        marginTop: '50px',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center'

    },
    card: {
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const Services = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    // Redirecting to services details page 
    const handleMoreDetails = (id) => {
        navigate(`/services/${id}`);
    }
    return (
        <>
            <Header />
            <Box className={classes.title}>
                <Typography variant='h3' style={{ color: 'purple' }}>Our Services</Typography>
                <Divider style={{ backgroundColor: 'purple', height: '2px' }} />
            </Box>
            <Grid container spacing={0}>

                {services.map((card) => {
                    return (
                        <Grid item lg={6} md={6} xs={12} data-aos="zoom-in" >
                            <Box className={classes.card}>
                                <Card sx={{ maxWidth: 450, minHeight: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={card.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {card.subTitle}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => handleMoreDetails(card.id)}>More Details</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
            <Box style={{ marginTop: '50px' }}>
                <Footer />

            </Box>
        </>
    )
}

export default Services
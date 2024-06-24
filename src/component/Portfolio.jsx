import React, { useEffect } from 'react'
import { Header } from './Header'
import { Box, Grid, Typography } from '@material-ui/core'
import { Button, Card, CardActions, CardContent, CardMedia, Divider } from '@mui/material'
import product1 from "../images/service1.png"
import product2 from "../images/service2.png"
import product3 from "../images/service3.png"
import product4 from "../images/service4.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from './Footer'

const Portfolio = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <Header />
            <Box style={{ marginTop: '50px', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h3' style={{ color: 'purple' }}>Our Portfolio</Typography>
                <Divider style={{border:'2px solid purple'}} />            
            </Box>
            <Grid container spacing={0}>
                <Grid item lg={12} data-aos="zoom-in">

                    <Box style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Grid lg={4} md={5}>
                            <Card sx={{ maxWidth: 450 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        E-COMMERCE
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Revolutionizing retail with seamless online shopping experience. Integrating user-friendly interface, secure transactions, and efficient logistics for ultimate customer satisfaction. Empowering businesses and consumers alike in the digital marketplace.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                        <Grid lg={4} md={5}>
                            <Card sx={{ maxWidth: 450 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        HOTEL MANAGEMENT SYSTEM
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Run your hotel freely now, manage multiple branches with one website, human recourse management system , online as well as offline room & food booking system , get analytical reports
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                    </Box>
                </Grid>

                <Grid item lg={12}  data-aos="zoom-in">

                    <Box style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Grid lg={4} md={5}>
                            <Card sx={{ maxWidth: 450 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product3}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        CLINIC MANAGEMENT SYSTEM
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Amazing product for all our doctors, manage your clinic like never before,Easy and handy to work, take and manage appointment, patient & doctor, also generate tax invoice.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                        <Grid lg={4} md={5}>
                            <Card sx={{ maxWidth: 450 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product4}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        RESTAURANT MANAGEMENT SYSTEM
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Run your restaurant freely now, manage multiple branch with one website, human recourse management system, online food booking system, manage point of sale, get analytical reports.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                    </Box>
                </Grid>

            </Grid>
            <Box style={{ marginTop: '50px' }}>
                <Footer />

            </Box>
        </>
    )
}

export default Portfolio
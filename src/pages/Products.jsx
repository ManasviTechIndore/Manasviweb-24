import React, { useEffect } from 'react'
import { Header } from '../component/Header'
import { Box, Grid, Typography } from '@material-ui/core'
import { Button, Card, CardActions, CardContent, CardMedia, Divider } from '@mui/material'
import product1 from "../images/service1.png"
import product2 from "../images/service2.png"
import product3 from "../images/service3.png"
import product4 from "../images/service4.png"
import product5 from "../images/service5.png"
import product6 from "../images/service6.png"
import product7 from "../images/service7.png"
import product8 from "../images/service8.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from '../component/Footer'

const Portfolio = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <Header />
            <Box style={{ marginTop: '50px', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h3' style={{ color: 'purple' }}>Our Products</Typography>
                <Divider style={{backgroundColor:'purple',height:'2px'}} />            
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

                <Grid item lg={12}  data-aos="zoom-in" >

                    <Box style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Grid lg={4} md={5}>
                            <Card sx={{ maxWidth: 450 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product5}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">

                                        TIFFIN MANAGEMENT SYSTEM
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Now get full control on incoming and outgoing of your Tiffin’s , get all information about pending payments etc. get all subscribers list with address and mode of distribution at one place.
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
                                    image={product6}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        SALON MANAGEMENT SYSTEM
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Book appointment online, gives your customer out of the box experience, also add products which customer can buy online, create tax invoice with ease, get all your customer data at one place.
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
                                    image={product8}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">

                                        HOSPITAL MANAGEMENT SYSTEM
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Hospital Management System streamlines healthcare operations, facilitating patient management, scheduling, billing, and resource allocation for efficient, organized, and patient-centered medical services.
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
                                    image={product7}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        PHARMACY MANAGEMENT SYSTEM
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Now running pharmacy is just like drinking a cup of tea with our PMS, easy control on inventory with various features, human resource management system, accounting management, supplier & customer management, create easy tax invoice.

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
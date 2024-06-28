import React, {useEffect} from "react";
import {Header} from "../component/Header";
import {Box, Container, Grid, Icon, Typography, makeStyles} from "@material-ui/core";
import {Button, Card, CardActions, CardContent, CardMedia, Divider} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import {Footer} from "../component/Footer";
import {services} from "../Data";
import {useNavigate} from "react-router-dom";
import servicesStyles from "../styles/servicesStyles"; // Import the styles
import servicesOfferedImage from "../assets/servicesOffered.jpeg";

import CheckIcon from '@mui/icons-material/Check';


const Services = () => {
    const classes = servicesStyles();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    // Redirecting to services details page
    const handleMoreDetails = (id) => {
        navigate(`/services/${id}`);
    };
    return (
        <>
            <Header />
            <Box className={classes.ourservicesBoxContainer}>
                <Box className={classes.ourServicesHeroSection}>
                    <Typography variant="h3" className={classes.ourseviceHeroTitle}>
                        Our Services
                    </Typography>
                </Box>

                <Box className={classes.ourAllServicesBox}>
                    <Container className={classes.ourAllServicescontainer} data-aos="zoom-in">
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} sm={6} xs={12} className={classes.ourAllServicesImgContainer}>
                                <img src={servicesOfferedImage} alt="About Us" className={classes.ourAllServicesImg} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <Box className={classes.ourAllServicescontent}>
                                    <Typography variant="h3" className={classes.ourAllServicestitle}>
                                        Services Offered
                                    </Typography>
                                    <Typography variant="body1" className={classes.ourAllServicesdescription}>
                                        Manasvi Technologies (OPC) Pvt. Ltd is at the forefront of digital innovation,
                                        offering comprehensive services in web development, digital marketing, app
                                        development, and IT services. Our team of experts is dedicated to delivering
                                        cutting-edge solutions that drive growth and efficiency for our clients. By
                                        leveraging the latest technologies and trends, we ensure your business stays
                                        ahead in the competitive digital landscape. Whether you're looking to build a
                                        dynamic website, enhance your online presence, develop a mobile app, or
                                        streamline your IT operations, Manasvi Technologies is your partner in digital
                                        excellence.                                       
                                    </Typography>
                                    <Typography >
                                    <ul>
                                            <li  style={{listStyleType: 'none'}}> <CheckIcon/> Mobile App Development</li>
                                            <li  style={{listStyleType: 'none'}}> <CheckIcon/> Web Design & Development</li>
                                            <li  style={{listStyleType: 'none'}}> <CheckIcon/> Software Testing Service</li>
                                            <li  style={{listStyleType: 'none'}}> <CheckIcon/> IT Service</li>
                                            <li  style={{listStyleType: 'none'}}> <CheckIcon/> Digital Marketing</li>
                                            <li  style={{listStyleType: 'none'}}> <CheckIcon/> Our Products</li>
                                        </ul>
                                    </Typography>
                                    
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {services.map((card) => {
                            return (
                                <Grid item lg={4} md={6} sm={6} xs={12} data-aos="zoom-in" key={card.id}>
                                    <Box className={classes.card}>
                                        <Card className={classes.serviceCard}>
                                            <CardMedia
                                                component="img"
                                                alt="Service Image"
                                                image={card.image}
                                                className={classes.serviceCardMedia}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    className={classes.cardTitle}
                                                >
                                                    {card.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    className={classes.cardsubTitle}
                                                >
                                                    {card.subTitle}
                                                </Typography>
                                            </CardContent>
                                            <CardActions className={classes.cardActions}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    onClick={() => handleMoreDetails(card.id)}
                                                    className={classes.moreDetailsBtn}
                                                >
                                                    More Details
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
                <Box style={{marginTop: "50px"}}>
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

export default Services;

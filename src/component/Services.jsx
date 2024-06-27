import React, {useEffect} from "react";
import {Header} from "../component/Header";
import {Box, Container, Grid, Typography, makeStyles} from "@material-ui/core";
import {Button, Card, CardActions, CardContent, CardMedia, Divider} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import {Footer} from "../component/Footer";
import {services} from "../Data";
import {useNavigate} from "react-router-dom";
import servicesStyles from "../styles/servicesStyles"; // Import the styles

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

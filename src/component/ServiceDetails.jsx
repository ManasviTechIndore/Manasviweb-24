import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../Data";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Typography, Grid, Box, Card, CardMedia } from "@material-ui/core";
import servicDetailsStyles from "../styles/servicDetailsStyles"; // Import the styles



const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const classes = servicDetailsStyles();

    useEffect(() => {
        const fetchedService = services.find((service) => service.id === parseInt(id));
        setService(fetchedService);
    }, [id]);

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            
                <Box className={classes.serviceDetailsHeroSection}>
                    <Typography variant="h4" className={classes.serviceDetailsHerotitle}>
                        {service.title}
                    </Typography>
                </Box>
                <Box className={classes.serviceDetailsContainer}>
                    <Grid container className={classes.serviceDetailsContentContainer}>
                        <Grid item xs={12} md={6} className={classes.serviceDetailsCardimageContainer}>
                            <Card className={classes.serviceDetailsCardContainer}>
                                <CardMedia
                                    component="img"
                                    alt={service.title}
                                    image={service.image}
                                    title={service.title}
                                    className={classes.serviceDetailsCardimage}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.serviceDetailsTextContainer}>
                            <Typography variant="h4" className={classes.serviceDetailsTitle}>
                                {service.title}
                            </Typography>
                            <Typography variant="h6" className={classes.serviceDetailsDescription}>
                                {service.subTitle}
                            </Typography>
                            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: service.description }} />
                        </Grid>
                    </Grid>
                </Box>
          
            <Footer />
        </>
    );
};

export default ServiceDetails;

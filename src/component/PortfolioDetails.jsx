import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { portfolios } from "../Data";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { Typography, Grid, Box, Card, CardMedia } from "@material-ui/core";
import servicDetailsStyles from "../styles/servicDetailsStyles"; // Import the styles




const PortfolioDetails = () => {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);
    const classes = servicDetailsStyles();

    useEffect(() => {
        const fetchedPortfolios = portfolios.find((portfolio) => portfolio.id === parseInt(id));
        setPortfolio(fetchedPortfolios);
    }, [id]);

    if (!portfolio) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header/>
            
                <Box className={classes.serviceDetailsHeroSection}>
                    <Typography variant="h4" className={classes.serviceDetailsHerotitle}>
                        {portfolio.title}
                    </Typography>
                </Box>
                <Box className={classes.serviceDetailsContainer}>
                    <Grid container className={classes.serviceDetailsContentContainer}>
                        <Grid item xs={12} md={6} className={classes.serviceDetailsCardimageContainer}>
                            <Card className={classes.serviceDetailsCardContainer}>
                                <CardMedia
                                    component="img"
                                    alt={portfolio.title}
                                    image={portfolio.image}
                                    title={portfolio.title}
                                    className={classes.serviceDetailsCardimage}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.serviceDetailsTextContainer}>
                            <Typography variant="h4" className={classes.serviceDetailsTitle}>
                                {portfolio.title}
                            </Typography>
                            <Typography variant="h6" className={classes.serviceDetailsDescription}>
                                {portfolio.subTitle}
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </Box>
          
            <Footer />
        </>
    );
};

export default PortfolioDetails;

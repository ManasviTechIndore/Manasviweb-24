import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { Typography, Grid, Box, Card, CardMedia } from "@material-ui/core";
import servicDetailsStyles from "../styles/servicDetailsStyles"; // Import the styles




const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const classes = servicDetailsStyles();

    useEffect(() => {
        const fetchedProducts = products.find((product) => product.id === parseInt(id));
        setProduct(fetchedProducts);
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header/>
            
                <Box className={classes.serviceDetailsHeroSection}>
                    <Typography variant="h4" className={classes.serviceDetailsHerotitle}>
                        {product.title}
                    </Typography>
                </Box>
                <Box className={classes.serviceDetailsContainer}>
                    <Grid container className={classes.serviceDetailsContentContainer}>
                        <Grid item xs={12} md={6} className={classes.serviceDetailsCardimageContainer}>
                            <Card className={classes.serviceDetailsCardContainer}>
                                <CardMedia
                                    component="img"
                                    alt={product.title}
                                    image={product.image}
                                    title={product.title}
                                    className={classes.serviceDetailsCardimage}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.serviceDetailsTextContainer}>
                            <Typography variant="h4" className={classes.serviceDetailsTitle}>
                                {product.title}
                            </Typography>
                            <Typography variant="h6" className={classes.serviceDetailsDescription}>
                                {product.subTitle}
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </Box>
          
            <Footer />
        </>
    );
};

export default ProductDetails;

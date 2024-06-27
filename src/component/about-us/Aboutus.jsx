import React, {useEffect} from "react";
import {Header} from "../Header";
import {Container, Grid, Box, Typography, Button, Card, CardContent} from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import line from "../../assets/aboutus-images/Deco-line.png";
import HeroAboutImage from "../../assets/aboutus-images/marketing.png";
import visionImage from "../../assets/aboutus-images/icons8-vision-64.png";
import missionImage from "../../assets/aboutus-images/icons8-mission-48.png";
import valueImage from "../../assets/aboutus-images/icons8-value-48.png";
import aboutStyles from "./aboutStyles"; // Import the styles
import { Footer } from "../Footer";

const Aboutus = () => {
    const classes = aboutStyles();

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <>
            {/* header */}
            <Header />

            {/* about section */}
            <Box className={classes.aboutusBox}>
                <Container className={classes.aboutUscontainer} data-aos="zoom-in">
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Box className={classes.aboutUscontent}>
                                <Typography variant="h3" className={classes.aboutUstitle}>
                                    About US
                                </Typography>
                                <Typography variant="body1" className={classes.aboutUsdescription}>
                                    <b>Manasvi Technologies (OPC) Pvt. Ltd.</b> is an IT Company situated at Bhopal,
                                    Madhya Pradesh (India). Our professionals design elements that complement the
                                    content, an interactive, user-friendly interface with integrated application
                                    features controlled with a technical foundation at the backend, to give the visitor
                                    a sense of personal touch. Great website designing is actually about creating a
                                    website that aligns with an overarching strategy. Well-designed websites offer much
                                    more than just aesthetics. They attract visitors and help people understand your
                                    product, company, and brand. We have always been open to the newest technologies and
                                    have worked on future technologies at a time when people were skeptical about them.
                                    We are learners and hence, we never cease to educate ourselves on anything new and
                                    different that comes up in this industry. And this eagerness to stay ahead of the
                                    game is what has set us apart.
                                </Typography>
                                <Button variant="contained" className={classes.button}>
                                    Get Started
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12} className={classes.heroAboutImgContainer}>
                            <img src={HeroAboutImage} alt="About Us" className={classes.heroAboutImg} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Our services */}
            <Box className={classes.ourservicesBox}>
                <Container data-aos="fade-up">
                    <Box className={classes.ourServicesection}>
                        <Typography variant="h3" className={classes.ourServicetitle}>
                            Our Company
                        </Typography>
                        <img src={line} alt="decorative line" />
                        <Typography variant="body1" className={classes.ourServicedescription}>
                            <b>Welcome to Manasvi Technologies (OPC) Pvt. Ltd.,</b>where we specialize in transformative
                            App Development, Web Development, and comprehensive IT Services. Our mission is to drive
                            your success through cutting-edge technology solutions tailored to your unique needs and
                            aspirations
                        </Typography>
                        <Button variant="contained" className={classes.ourServicebutton}>
                            Read on
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* our vision */}
            <Box>
                <Container className={classes.visionMissioncontainer}>
                    {/* Vision, Mission and Value Section */}
                    <Box className={classes.visionMissionsection}>
                        <Typography variant="h3" className={classes.visionMissiontitle}>
                            Vision, Mission and Value
                        </Typography>
                        <img src={line} alt="decorative line" />

                        <Box className={classes.visionMissionBox}>
                            {/* Vision */}
                            <Box className={classes.visionMissionItem} data-aos="flip-left">
                                <img src={visionImage} alt="Our Vision" className={classes.visionMissionicon} />
                                <Typography variant="h5" className={classes.visionMissionHeading}>
                                    Our Vision
                                </Typography>
                                <Typography variant="body1" className={classes.visionMissionContent}>
                                    As a Best IT Company, Our aspiration is to establish ourselves as the Best digital
                                    Marketing Agency and Web Design Agency. Our ethos revolves around the delivery of
                                    exceptional services and the cultivation of enduring client relationships.
                                </Typography>
                            </Box>

                            {/* Mission */}
                            <Box className={classes.visionMissionItem} data-aos="flip-left">
                                <img src={missionImage} alt="Our Mission" className={classes.visionMissionicon} />
                                <Typography variant="h5" className={classes.visionMissionHeading}>
                                    Our Mission
                                </Typography>
                                <Typography variant="body1" className={classes.visionMissionContent}>
                                    Our mission is to empower businesses to thrive in the digital realm by furnishing
                                    them with tailor-made solutions that cater to their unique needs. We recognize that
                                    each business possesses its distinctive traits.
                                </Typography>
                            </Box>

                            {/* Core Value */}
                            <Box className={classes.visionMissionItem} data-aos="flip-left">
                                <img src={valueImage} alt="Our Core Value" className={classes.visionMissionicon} />
                                <Typography variant="h5" className={classes.visionMissionHeading}>
                                    Our Core Value
                                </Typography>
                                <Typography variant="body1" className={classes.visionMissionContent}>
                                    At the heart of our operations is a commitment to prioritising the requirements of
                                    our customers and building robust connections grounded in mutual satisfaction and
                                    trust. Our dedication to social responsibility underscores our values.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* why choose us */}
            <Box className={classes.whyChooseUsContainer}>
                <Container>
                    <Typography variant="h3" className={classes.whyChooseUsTitle}>
                        Why Choose Us
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={6} data-aos="zoom-in">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h6" className={classes.cardTitle}>
                                        Timely Delivery
                                    </Typography>
                                    <Typography variant="body1" className={classes.cardContent}>
                                        We take immense pride in our unwavering dedication to ensuring the timely
                                        completion of all our website projects. In the fast-paced world of IT,
                                        punctuality is paramount, and we fully comprehend its significance.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} data-aos="zoom-in">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h6" className={classes.cardTitle}>
                                        Competitive Pricing
                                    </Typography>
                                    <Typography variant="body1" className={classes.cardContent}>
                                        We derive satisfaction from being your preferred source for premium IT
                                        solutions, all at the most economical rates. Our commitment to affordability
                                        never compromises the quality of our services.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} data-aos="zoom-in">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h6" className={classes.cardTitle}>
                                        Uncompromising Quality
                                    </Typography>
                                    <Typography variant="body1" className={classes.cardContent}>
                                        Our IT solutions are founded on a bedrock of quality, not merely meeting
                                        industry standards but surpassing them. Employing the latest industry best
                                        practices and cutting-edge technologies, we ardently pursue excellence across
                                        all facets of our services.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} data-aos="zoom-in">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h6" className={classes.cardTitle}>
                                        Long-Term Support
                                    </Typography>
                                    <Typography variant="body1" className={classes.cardContent}>
                                        In our pursuit of ensuring the resilience and growth of your IT infrastructure
                                        in tandem with your business, we function as an extension of your company,
                                        always available to assist. Our dedication to nurturing enduring client
                                        relationships entails ongoing support and assistance.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer/>
        </>
    );
};

export default Aboutus;

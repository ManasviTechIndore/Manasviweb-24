import React, { useEffect } from "react";
import { Header } from "../Header";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import line from "../../assets/aboutus-images/Deco-line.png";
import HeroAboutImage from "../../assets/aboutus-images/marketing.png";
import visionImage from "../../assets/aboutus-images/icons8-vision-64.png";
import missionImage from "../../assets/aboutus-images/icons8-mission-48.png";
import valueImage from "../../assets/aboutus-images/icons8-value-48.png";

const aboutStyles = makeStyles((theme) => ({
  aboutusBox: {
    backgroundImage: "linear-gradient(0deg, #d9e9e8 0, #cfbfda)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "3rem 0",
  },
  aboutUscontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  aboutUscontent: {
    textAlign: "left",
    maxWidth: "37.5rem",
  },
  aboutUstitle: {
    marginBlockEnd: "1.25rem",
    color: "purple",
  },
  aboutUsdescription: {
    marginBlockEnd: "1.25rem",
    textAlign: "justify",
  },
  button: {
    backgroundImage: `linear-gradient(to right, rgba(87, 0, 123, 1),rgba(102, 117, 247, 1))`,
    color: "white",
    "&:hover": {
      backgroundColor: "#e65c00",
    },
  },
  heroAboutImgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroAboutImg: {
    width: "100%",
    maxWidth: "20rem",
  },

  ourservicesBox: {
    padding: "3rem 0",
  },
  ourServicesection: {
    marginBlockEnd: "3rem",
    textAlign: "center",
  },
  ourServicetitle: {
    marginBlockEnd: "1.25rem",
    color: "purple",
  },
  ourServicedescription: {
    marginBlock: "1.25rem 1.875rem",
    textAlign: "center",
  },
  ourServicebutton: {
    backgroundImage: `linear-gradient(to right, rgba(87, 0, 123, 1), rgba(102, 117, 247, 1))`,
    color: "white",
    "&:hover": {
      backgroundColor: "#e65c00",
    },
  },
  visionMissioncontainer: {
    padding: "3rem 0",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },

  visionMissionsection: {
    marginBlockEnd: "3rem",
    textAlign: "center",
  },
  visionMissiontitle: {
    color: "purple",
    marginBlockEnd: "1.25rem",
  },
  visionMissionBox: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },
  visionMissionItem: {
    maxWidth: "18.75rem",
    marginBlockEnd: "1.25rem",
  },
  visionMissionicon: {
    marginBlockEnd: "0.625rem",
  },

  whyChooseUsContainer: {
    padding: "3rem 0",
  },
  whyChooseUsTitle: {
    textAlign: "center",
    marginBlockEnd: "1.875rem",
    color: "purple",
  },
  card: {
    minHeight: "12.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.25rem",
    textAlign: "center",
    boxShadow:
      " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  cardTitle: {
    color: "purple",
    marginBlockEnd: "0.625rem",
  },
  cardContent: {
    textAlign: "justify",
  },
}));

const Aboutus = () => {
  const classes = aboutStyles();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* header */}
      <Header />

      {/* about section */}
      <Box className={classes.aboutusBox}>
        <Container className={classes.aboutUscontainer} data-aos="zoom-in">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6} className={classes.heroAboutImgContainer}>
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
              Welcome to Doaguru IT Solutions, your reliable partner in the realms of digital marketing,
              web design, and IT solutions. We comprise a team of seasoned professionals committed to
              enhancing the digital footprint of your business. With over a decade of industry experience,
              we have collaboratively worked with numerous clients worldwide, consistently delivering
              exceptional results in IT and marketing endeavors.
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
                <Typography variant="h5" className={classes.visionMissiontitle}>
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  As a Best IT Company, Our aspiration is to establish ourselves as the Best digital
                  Marketing Agency and Web Design Agency. Our ethos revolves around the delivery of
                  exceptional services and the cultivation of enduring client relationships.
                </Typography>
              </Box>

              {/* Mission */}
              <Box className={classes.visionMissionItem} data-aos="flip-left">
                <img src={missionImage} alt="Our Mission" className={classes.visionMissionicon} />
                <Typography variant="h5" className={classes.visionMissiontitle}>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  Our mission is to empower businesses to thrive in the digital realm by furnishing
                  them with tailor-made solutions that cater to their unique needs. We recognize that
                  each business possesses its distinctive traits.
                </Typography>
              </Box>

              {/* Core Value */}
              <Box className={classes.visionMissionItem} data-aos="flip-left">
                <img src={valueImage} alt="Our Core Value" className={classes.visionMissionicon} />
                <Typography variant="h5" className={classes.visionMissiontitle}>
                  Our Core Value
                </Typography>
                <Typography variant="body1">
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
            <Grid item lg={6} sm={6} md={3}>
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
            <Grid item lg={6} sm={6} md={3}>
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
            <Grid item lg={6} sm={6} md={3}>
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
            <Grid item lg={6} sm={6} md={3}>
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
    </>
  );
};

export default Aboutus;

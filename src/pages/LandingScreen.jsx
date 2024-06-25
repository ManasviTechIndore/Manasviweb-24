import { Header } from '../component/Header'
import { Footer } from '../component/Footer'
import { Button, Grid, Typography, Box, Divider } from '@material-ui/core'
import HeroImg from "../assets/Hero-Wrapper__image.png";
import group1 from "../assets/Group 1.png";
import developer from "../assets/developer.png";
import line from "../assets/Deco-line.png";
import companyLogo1 from "../images/company1.png";
import companyLogo2 from "../images/company2.png";
import companyLogo3 from "../assets/Logo-7.png";
import companyLogo4 from "../assets/logo8.png";
import companyLogo5 from "../assets/logo9.png";
import profileImg2 from "../assets/Group 2 (1).png";
import profileImg3 from "../assets/Group 2 (2).png";
import profileImg4 from "../assets/Group 2 (3).png";
import profileImg5 from "../assets/Group 2.png";
import rating from "../assets/rating.png";
import caseStudy from "../assets/studycase1.png";
import caseStudy2 from "../assets/studycase2.png";
import caseStudy3 from "../assets/studycase3.png";
import about from "../images/marketing.png";
import { services } from "../Data";
import { makeStyles } from '@material-ui/core/styles';
import { Link, duration } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const useStyles = makeStyles(() => ({
    heroText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            // paddingLeft:'30px',
          }
    },
    textBox: {
        lineHeight: '3rem',
        fontSize: '35px',
        width: '23rem',
        wordSpacing: '5px'
    },
    textBoxMini: {
        paddingTop: '2rem',
        lineHeight: '2rem',
        fontSize: '16px',
        width: '23rem',
        color: '#4A5568'
    },
    startBtn: {
        height: '52px',
        width: '175px',
        color: 'white',
        marginTop: '3rem',
        backgroundColor: '#3D63EA',
        '& Typography:hover': {
            color: 'red',
        },
    },
    services: {
        height: '240px',
        width: '333px',
        border: '2px solid purple',
        borderRadius: '5px',
        padding: '15px',
        backgroundColor: 'rgb(231 218 237 / 24%)',
        marginBottom: '20px'
    },
    serviceCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        paddingTop: '4rem',
    },
    textcard: {
        paddingTop: '1rem',
        color: '#4A5568',
        fontSize: '14px'
    },
    scrollImg: {

        width: '100%',
        backgroundColor: '#F7F7FA',
        marginTop: '4rem'
    },
    companyImg: {
        height: '80px',
        width: '150px',
    },
    profileImg: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '150px',
        width: '100%',
        marginTop: '4rem',
        marginBottom: '4rem'
    },
    profileImg1: {
        height: '100px',
        width: '100px',
    },
    caseStudy: {
        display: 'flex',
        justifyContent: 'center',

    },
}));

export const LandingScreen = () => {
    const classes = useStyles();
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return (
        <div>
            <Header/>        
            <Grid container>
                    <Grid item lg={6} md={6} xs={12} className={classes.heroText} data-aos="fade-up" >
                    <Box >
                            <Typography className={classes.textBox}>Great <span style={{ color: 'purple' }}>
                                <b> Product</b></span> is <span style={{ color: 'purple' }}><b>built by great teams</b></span>
                            </Typography>
                            <Typography className={classes.textBoxMini} >
                                Welcome to <b> Manasvi Technologies (OPC) Pvt. Ltd.</b>, where we specialize in transformative App Development,
                                Web Development, and comprehensive IT Services. Our mission is to drive your success through
                                cutting-edge technology solutions tailored to your unique needs and aspirations.
                            </Typography>
                            <Button className={classes.startBtn} >
                                <Typography style={{ textTransform: 'none', fontSize: '16px' }}>
                                    <Link href='https://manasvitech.in/index.html' target='blank' style={{ textDecoration: 'none', color: 'white' }}>Let’s get started!</Link>
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} className={classes.heroText}>
                        <img src={HeroImg} alt='logicImg' />
                    </Grid>

                <Divider style={{ backgroundColor: '#E7DAED', width: '100%' }} />

                <Grid item lg={12}>
                    <Box className={classes.heroText}>
                        <Typography variant='h4' style={{ paddingTop: '3rem', fontWeight: '600' }}>Services we offer</Typography>
                    </Box>
                    <Box className={classes.serviceCard}>
                        <Grid container spacing={0} >
                            {services.map((cards) =>
                                <Grid item sm={6} xs={12} md={4}>
                                    <Box data-aos="zoom-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'cente' }}>
                                        <Box className={classes.services} >
                                            <img src={group1} />
                                            <Typography variant="h6" style={{ color: 'purple', fontWeight: '600', paddingTop: '1rem' }}>{cards.title}</Typography>
                                            <Typography className={classes.textcard}>{cards.subTitle}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </Grid>

                <Divider style={{ backgroundColor: '#E7DAED', width: '100%', marginTop: '6rem', marginBottom: '6rem' }} />

                    <Grid item lg={6} xs={12} md={6} className={classes.heroText} data-aos="fade-up">
                        <Box >
                            <img src={line} />
                            <Typography variant='h6' style={{ lineHeight: '3rem', fontSize: '34px', width: '28rem' }}>Leading companies trust us<b> to develop software</b></Typography>
                            <Typography variant='subtitle1' style={{ lineHeight: '2rem', fontSize: '16px', color: '#4A5568', width: '28rem', paddingTop: '25px' }}>
                                We <span style={{ color: 'purple' }}>add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that
                                guarantees the successful delivery of your project.</Typography>
                            <Typography style={{ fontSize: '18px', color: 'purple', paddingTop: '3rem', fontWeight: '400' }}>See more informations
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6}  className={classes.heroText} data-aos="flip-right">
                        <img src={developer} style={{ height: '400px', width: '450px' }} />
                    </Grid>

                <Grid item lg={12} xs={12} md={12} >
                    <Box style={{ paddingLeft: '6rem', paddingTop: '7rem', width: '70%', textAlign: 'justify' }} data-aos="fade-up">
                        <img src={line} />
                        <Typography variant='h6' style={{ width: '25rem', fontSize: '34px' }}>Meet the People <br /><b>We are Working With</b></Typography>
                        <Typography variant='p' style={{ color: '#4A5568' }}>Crafting the perfect content for the client reviews section of Manasvi Technologies (OPC) Pvt. Ltd.'s company portfolio requires a nuanced
                            approach that highlights the company's commitment to innovation, customer satisfaction, and technical excellence.
                            Below is a meticulously designed draft that encapsulates the ethos and achievements of Manasvi Technologies through the lens of its most
                            valuable asset—its clients.
                        </Typography>
                    </Box>
                    <Box className={classes.scrollImg} >
                        <marquee>
                            <Box style={{
                                display: 'flex',
                                gap: '20px',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                height: '130px',
                            }}>
                                <img src={companyLogo1} alt="company name" className={classes.companyImg} />
                                <img src={companyLogo2} alt="company name" className={classes.companyImg} />
                                <img src={companyLogo3} alt="company name" className={classes.companyImg} />
                                <img src={companyLogo5} alt="company name" className={classes.companyImg} />
                                <img src={companyLogo1} alt="company name" className={classes.companyImg} />
                                <img src={companyLogo4} alt="company name" className={classes.companyImg} />
                            </Box>
                        </marquee>
                    </Box>
                </Grid>

                <Grid item lg={12} data-aos="fade-up">
                    <Box style={{ marginTop: '7rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box style={{ width: '35%', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={line} style={{ paddingLeft: '14rem' }} />
                            <Typography variant='h6' style={{ fontSize: '30px', paddingLeft: '7rem', paddingTop: '20px' }}>Why cutomers love<br /><b>working with our Team</b></Typography>
                            <Typography style={{ textAlign: 'center', paddingLeft: '2rem', paddingTop: '20px', color: '#4A5568', lineHeight: '2rem' }}>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far.
                                Wouldn’t be hesitated to introduce their work to someone else.</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.profileImg}>
                        <Box>
                            <img src={profileImg5} alt="company name" className={classes.profileImg1} />
                            <Box data-aos="fade-right">
                                <img src={rating} alt='review' />
                                <Typography variant="h6" style={{ color: 'purple', fontWeight: '700', fontSize: '17px' }}>Romeena De Silva</Typography>
                                <Typography variant="h6" style={{ color: '#000', fontWeight: '700', fontSize: '15px' }}>Software Enginner</Typography>
                            </Box>

                        </Box>
                        <Box data-aos="fade-left">
                            <img src={profileImg2} alt="company name" className={classes.profileImg1} />
                            <Box>
                                <img src={rating} alt='review' />
                                <Typography variant="h6" style={{ color: 'purple', fontWeight: '700', fontSize: '17px' }}>Romeena De Silva</Typography>
                                <Typography variant="h6" style={{ color: '#000', fontWeight: '700', fontSize: '15px' }}>Software Enginner</Typography>
                            </Box>
                        </Box>
                        <Box data-aos="fade-right">
                            <img src={profileImg3} alt="company name" className={classes.profileImg1} />
                            <Box>
                                <img src={rating} alt='review' />
                                <Typography variant="h6" style={{ color: 'purple', fontWeight: '700', fontSize: '17px' }}>Imran Khan</Typography>
                                <Typography variant="h6" style={{ color: '#000', fontWeight: '700', fontSize: '15px' }}>Software Enginner</Typography>
                            </Box>
                        </Box>
                        <Box data-aos="fade-left">
                            <img src={profileImg4} alt="company name" className={classes.profileImg1} />
                            <Box>
                                <img src={rating} alt='review' />
                                <Typography variant="h6" style={{ color: 'purple', fontWeight: '700', fontSize: '17px' }}>Romeena De Silva</Typography>
                                <Typography variant="h6" style={{ color: '#000', fontWeight: '700', fontSize: '15px' }}>Software Enginner</Typography>
                            </Box>
                        </Box>
                        <Box data-aos="fade-right">
                            <img src={profileImg5} alt="company name" className={classes.profileImg1} />
                            <Box>
                                <img src={rating} alt='review' />
                                <Typography variant="h6" style={{ color: 'purple', fontWeight: '700', fontSize: '17px' }}>Romeena De Silva</Typography>
                                <Typography variant="h6" style={{ color: '#000', fontWeight: '700', fontSize: '15px' }}>Software Enginner</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Divider style={{ backgroundColor: '#E7DAED', width: '100%', marginTop: '6rem' }} />

                <Grid item style={{ height: 'auto', width: '100%', backgroundColor: '#F7F7FA' }}>
                    <Box className={classes.caseStudy}>
                        <Box style={{ width: '35%', justifyContent: 'center', marginTop: '4rem' }}>
                            <img src={line} style={{ paddingLeft: '12.5rem', marginBottom: '1rem' }} />
                            <Typography variant='h6' style={{ fontSize: '24px', textAlign: 'center', marginBottom: '60px' }}>
                                Our recent<br /> <b>Products  </b>
                            </Typography>
                        </Box>
                    </Box>
                    <Grid item lg={12} data-aos="slide-up"
                    style={{ marginBottom: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img src={caseStudy3} alt='study-case' width='620' height='410px' />
                        </Grid>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Box style={{ padding: '50px', backgroundColor: "#F1F2FF", height: '310px', width: '500px', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                                <Typography variant='h5' textAlign='center'>Website Design for E-Commerce</Typography>   <br />
                                <Typography variant='p'>Revolutionizing retail with seamless online shopping experience.
                                    Integrating user-friendly interface, secure transactions, and efficient logistics for ultimate customer
                                    satisfaction. Empowering businesses and consumers alike in the digital marketplace. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years
                                    of rich and varied experience in the shipping and freight forwarding industry.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} data-aos="slide-up"
                    style={{ marginBottom: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img src={caseStudy} alt='study-case' width='620' height='410px' />
                        </Grid>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Box style={{ padding: '50px', backgroundColor: "#F0FFF7", height: '310px', width: '500px', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                                <Typography variant='h5' textAlign='center'>Website Design for Hotel Management</Typography>   <br />
                                <Typography variant='p'>Run your hotel freely now, manage multiple branches with one
                                    website, human recourse management system , online as well as offline room & food
                                    booking system , get analytical reports Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} data-aos="slide-up"
                     style={{ marginBottom: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img src={caseStudy2} alt='study-case' width='620' height='410px' />
                        </Grid>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Box style={{ padding: '50px', backgroundColor: "#FFF4F4", height: '310px', width: '500px', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                                <Typography variant='h5' textAlign='center'>Website Design for Clinic Management</Typography>   <br />
                                <Typography variant='p'>Amazing product for all our doctors, manage your clinic like never before,Easy and handy to work, take and manage appointment, patient & doctor, also generate tax invoice.
                                    The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} data-aos="slide-up"
                     style={{ marginBottom: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img src={caseStudy3} alt='study-case' width='620' height='410px' />
                        </Grid>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Box style={{ padding: '50px', backgroundColor: "#F1F2FF", height: '310px', width: '500px', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                                <Typography variant='h5' textAlign='center'>Website Design for Restaurant Management</Typography>   <br />
                                <Typography variant='p'> Run your restaurant freely now, manage multiple branch with one website, human recourse management system, online food booking system, manage point of sale, get analytical reports.
                                    of rich and varied experience in the shipping and freight forwarding industry.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} data-aos="slide-up"
                    style={{ marginBottom: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img src={caseStudy} alt='study-case' width='620' height='410px' />
                        </Grid>
                        <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Box style={{ padding: '50px', backgroundColor: "#F0FFF7", height: '310px', width: '500px', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                                <Typography variant='h5' textAlign='center'>Website Design for Pharmacy Management</Typography>   <br />
                                <Typography variant='p'>Now running pharmacy is just like drinking a cup of tea with our PMS, easy control on inventory with various features, human resource management system, accounting management, supplier & customer management,
                                    create easy tax invoice.The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item lg={12} className={classes.heroText} style={{ marginTop: '60px', marginBottom: '80px',gap:'8rem' }}>
                    <Box className={classes.heroText}>
                    <Grid item lg={6}>
                        <img src={about} alt='about' />
                    </Grid>
                        </Box>
                        <Box className={classes.heroText}>
                    <Grid item lg={6}>
                        <Box style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', width: '550px' }}>
                            <Typography variant='h4'>
                                <span style={{ color: 'purple' }}><b>About Us</b></span>
                            </Typography><br />
                            <Typography variant='p' style={{ color: '#4A5568', textAlign: 'justify' }}>
                                <b> Manasvi Technologies (OPC) Pvt. Ltd.</b> is an IT Company situated at Bhopal,Madhya Pradesh (India).
                                Our professionals design element that complements the content, an interactive, user- friendly interface with
                                integrated application features controlled with a technical foundation at the backend, to give the visitor a
                                sense of a personal touch. Great website designing is actually about creating a website that aligns with an
                                overarching strategy.Well-designed websites offer much more than just esthetics. They attract visitors and help
                                people understand your product, company, and brand. We have always been open to newest technologies, and have
                                worked on future technologies at a time when people were sceptical about it. We are learners and hence,
                                we never cease to educate ourselves on anything new and different that comes up in this industry.
                                And this eagerness to stay ahead of the game is what has set us apart.
                            </Typography>
                        </Box>
                    </Grid>
                        </Box>
                </Grid>

            </Grid>
            <Footer />
        </div>
    )
}

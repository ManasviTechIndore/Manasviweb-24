import {makeStyles} from "@material-ui/core/styles";
import backgroundImage from '../assets/ServicesBanner.jpeg'; // Adjust path based on location

// Responsive utility functions
const responsiveFontSize = (minSize, maxSize) => {
    return `calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - 320px) / (1280 - 320)))`;
};

const responsiveMargin = (minMargin, maxMargin) => {
    return `calc(${minMargin}px + (${maxMargin} - ${minMargin}) * ((100vw - 320px) / (1280 - 320)))`;
};

const responsivePadding = (minPadding, maxPadding) => {
    return `calc(${minPadding}px + (${maxPadding} - ${minPadding}) * ((100vw - 320px) / (1280 - 320)))`;
};

const responsiveHeight = (minHeight, maxHeight) => {
    return `calc(${minHeight}px + (${maxHeight} - ${minHeight}) * ((100vw - 320px) / (1280 - 320)))`;
};


const servicDetailsStyles = makeStyles((theme) => ({
    serviceDetailsHeroSection: {
        position: 'relative', 
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: responsivePadding(16, 32),
        marginBottom: responsiveMargin(8, 16), 
        height: responsiveHeight(100, 300), 
        [theme.breakpoints.down('sm')]: {
            padding: responsivePadding(12, 24),
            height: responsiveHeight(150, 300), // Adjust for smaller screens if needed
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay effect
            zIndex: 1, // Ensure this is below the text
        },
    },
    serviceDetailsHerotitle: {
        fontSize: responsiveFontSize(20, 38),
        fontWeight: 'bold',
        position: 'relative', // To ensure it appears above the overlay
        translate: '0  150%',
        zIndex: 2, // Ensure text is above the overlay
        [theme.breakpoints.down('sm')]: {
            fontSize: responsiveFontSize(22, 38),
        },
    },
    serviceDetailsContainer: {
        padding: responsivePadding(16, 72), 
    },
    serviceDetailsContentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    serviceDetailsCardContainer: {
        width: '100%',
        [theme.breakpoints.down('md')]: {
            marginBottom: responsiveMargin(16, 32), 
        },
    },
    serviceDetailsCardimage: {
        width: '100%',
        height: responsiveHeight(200, 400), 
        objectFit: 'cover',
    },
    serviceDetailsCardimageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: responsivePadding(8, 16), 
        [theme.breakpoints.down('md')]: {
            paddingRight: 0,
        },
    },
    serviceDetailsTextContainer: {
        paddingLeft: responsivePadding(8, 48), 
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
            textAlign: 'center',
        },
    },
    serviceDetailsTitle: {
        marginBottom: responsiveMargin(16, 32), 
        fontSize: responsiveFontSize(20, 26), 
        [theme.breakpoints.down('sm')]: {
            fontSize: responsiveFontSize(20, 24),
        },
    },
    serviceDetailsDescription: {
        fontSize: responsiveFontSize(16, 17), 
        [theme.breakpoints.down('sm')]: {
            fontSize: responsiveFontSize(14, 16),
        },
    },
}));
export default servicDetailsStyles;

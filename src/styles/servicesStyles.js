import {makeStyles} from "@material-ui/core/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
const responsiveWidth = (minWidth, maxWidth) => {
    return `calc(${minWidth}px + (${maxWidth} - ${minWidth}) * ((100vw - 320px) / (1280 - 320)))`;
};

const servicesStyles = makeStyles((theme) => ({
    // Our Services

    ourservicesBoxContainer: {
        backgroundImage: "linear-gradient(to bottom, #ffe2e2 0, #fff9f4 100%)",
    },
    ourServicesHeroSection: {
        backgroundImage:
            "linear-gradient(90deg, rgba(184, 182, 228, 1) 0%, rgba(148, 80, 199, 1) 25%, rgba(226, 2, 184, 1) 70%, rgba(85, 67, 181, 1) 100%, rgba(50, 165, 195, 1) 100%, rgba(201, 96, 236, 1) 100%)",
        color: "white",
        fontWeight: 800,
        paddingBlockStart: responsivePadding(0, 50),
        [theme.breakpoints.down("xs")]: {
            paddingBlockStart: responsivePadding(30, 30),
        },
        paddingBlockEnd: responsivePadding(0, 40),
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
    },
    ourseviceHeroTitle: {
        fontSize: responsiveFontSize(30, 45),
        fontWeight: 700,
        [theme.breakpoints.down("xs")]: {
            fontSize: responsiveFontSize(20, 30),
        },
    },

    // Our All Services

    ourAllServicesImgContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    ourAllServicesImg: {
        width: "100%",
        maxWidth: "30rem",
    },

    ourAllServicesBox: {
        paddingBlock: responsivePadding(24, 48),
        paddingInlineStart: responsivePadding(0, 38),
        paddingInlineEnd: responsivePadding(30, 48),
    },
    ourAllServicescontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        margin: responsiveMargin(16, 32), // Example usage for margin
    },
    ourAllServicescontent: {
        color: "black",
        textAlign: "left",
        maxWidth: "37.5rem",
    },
    ourAllServicestitle: {
        marginBlockEnd: responsiveMargin(16, 24), // Example usage for margin
        color: "#050748",
        fontSize: responsiveFontSize(20, 32),
        fontWeight: 700,
    },
    ourAllServicesdescription: {
        marginBlockEnd: responsiveMargin(16, 24), // Example usage for margin
        textAlign: "justify",
        fontSize: responsiveFontSize(12, 16),
    },

    // Our Services Cards

    card: {
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    serviceCard: {
        borderRadius: "16px !important",
        width: responsiveWidth(300, 380),
        height: responsiveHeight(400, 465),
        // boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
        boxShadow:
            "0 3.4px 2.7px -30px rgba(0, 0, 0, 0.059), 0 8.2px 8.9px -30px rgba(0, 0, 0, 0.071), 0 25px 40px -30px rgba(0, 0, 0, 0.2) !important",
        // boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px !important',
    },
    serviceCardMedia: {
        height: responsiveHeight(100, 200),
        objectFit: "contain !important",
        paddingBlockStart: responsivePadding(30, 30),
    },
    cardTitle: {
        fontSize: responsiveFontSize(14, 20),
        marginBlock: responsiveMargin(14, 20),
        fontWeight: 700,
        textAlign: "center",
    },
    cardsubTitle: {
        fontSize: responsiveFontSize(14, 15),
        textAlign: "center",
    },
    cardActions: {
        display: "flex",
        justifyContent: "center",
    },

    // More Details Button
    moreDetailsBtn: {
        flexDirection: "row",
        backgroundImage: `linear-gradient(to right, rgba(87, 0, 123, 1), rgba(102, 117, 247, 1))`,
        color: "white",
        "&:hover": {
            backgroundColor: "#e65c00",
            color: "white",
        },
        "&:link": {
            color: "white",
        },
        "&:visited": {
            color: "white",
        },
        marginBlockStart: responsiveMargin(14, 14),
        fontSize: responsiveFontSize(12, 14),
    },
}));
export default servicesStyles;

import {makeStyles} from "@material-ui/core/styles";

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
    ourservicesBoxContainer: {
        backgroundImage: "linear-gradient(0deg, #d9e9e8 0, #cfbfda)",
    },

    ourServicesHeroSection: {
        color: "purple",
       
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
    },
   

    card: {
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    serviceCard: {
        width: responsiveWidth(300, 380),
        height: responsiveHeight(400, 470),
        boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    },
    serviceCardMedia: {
        height: responsiveHeight(100, 200),
        objectFit: "contain !important",
        paddingBlockStart: responsivePadding(30, 30),
    },
    cardTitle: {
        fontSize: responsiveFontSize(14, 20),
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
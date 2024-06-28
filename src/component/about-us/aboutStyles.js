    import {makeStyles} from "@material-ui/core/styles";

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

    const aboutStyles = makeStyles((theme) => ({
        // About us styles
        aboutusBox: {
            // backgroundImage: "linear-gradient(0deg, #d9e9e8 0, #cfbfda)",
            // backgroundImage: "linear-gradient(to right, #9c27b0 0, #673ab7 100%)",
            backgroundImage: "linear-gradient(90deg, rgba(184, 182, 228, 1) 0%, rgba(148, 80, 199, 1) 25%, rgba(226, 2, 184, 1) 70%, rgba(85, 67, 181, 1) 100%, rgba(50, 165, 195, 1) 100%, rgba(201, 96, 236, 1) 100%)",

            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingBlock: responsivePadding(24, 48),
            paddingInlineStart: responsivePadding(0, 38),
            paddingInlineEnd: responsivePadding(30, 48),
        },
        aboutUscontainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            margin: responsiveMargin(16, 32), // Example usage for margin
        },
        aboutUscontent: {
            color: "white",
            textAlign: "left",
            maxWidth: "37.5rem",
        },
        aboutUstitle: {
            marginBlockEnd: responsiveMargin(16, 24), // Example usage for margin
            color: "white",
            fontSize: responsiveFontSize(20, 46),
            fontWeight: 700,
        },
        aboutUsdescription: {
            marginBlockEnd: responsiveMargin(16, 24), // Example usage for margin
            textAlign: "justify",
            fontSize: responsiveFontSize(12, 16),
        },
        button: {
            backgroundImage: `linear-gradient(to right, rgba(87, 0, 123, 1),rgba(102, 117, 247, 1))`,
            fontSize: responsiveFontSize(12, 14),
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

        // our company services styles
        ourservicesBox: {
            paddingBlockStart: responsivePadding(24, 48), 
            paddingBlockEnd: responsivePadding(14, 48), 
        },
        ourServicesection: {
            marginBlockEnd: responsiveMargin(24, 26), // Example usage for margin
            textAlign: "center",
        },
        ourServicetitle: {
            marginBlockEnd: responsiveMargin(16, 24), // Example usage for margin
            color: "purple",
            fontSize: responsiveFontSize(20, 36),
        },
        ourServicedescription: {
            margin: responsiveMargin(16, 30), // Example usage for margin
            textAlign: "center",
            [theme.breakpoints.down("xs")]: {
                textAlign: "justify",
            },
            fontSize: responsiveFontSize(12, 16),
        },
        ourServicebutton: {
            backgroundImage: `linear-gradient(to right, rgba(87, 0, 123, 1), rgba(102, 117, 247, 1))`,
            color: "white",
            "&:hover": {
                backgroundColor: "#e65c00",
            },
            marginBlockStart: responsiveMargin(14, 14),
            fontSize: responsiveFontSize(12, 14),
        },

        // vision and mission styles
        visionMissioncontainer: {
            paddingBlockStart: responsivePadding(24, 48), 
            paddingBlockEnd: responsivePadding(14, 48), 
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
        visionMissionsection: {
            marginBlockEnd: responsiveMargin(24, 48),
            textAlign: "center",
        },
        visionMissiontitle: {
            color: "purple",
            marginBlock: responsiveMargin(16, 24),
            fontSize: responsiveFontSize(20, 36),
        },
        visionMissionHeading: {
            color: "purple",
            marginBlockEnd: responsiveMargin(10, 20),
            fontSize: responsiveFontSize(14, 18),
        },
        visionMissionContent: {
            fontSize: responsiveFontSize(12, 16),
        },
        visionMissionBox: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: theme.spacing(4),
            [theme.breakpoints.down("xs")]: {
                flexDirection: "column",
                alignItems: "center",
            },
            paddingBlockStart: responsivePadding(24, 48),
        },
        visionMissionItem: {
            maxWidth: "18.75rem",
        },
        visionMissionicon: {
            marginBlockEnd: responsiveMargin(10, 20), // Example usage for margin
        },

        // why choose us styles
        whyChooseUsContainer: {
            padding: responsivePadding(24, 48), // Example usage for padding
        },
        whyChooseUsTitle: {
            textAlign: "center",
            marginBlock: responsiveMargin(16, 32),
            paddingBlockEnd: responsivePadding(24, 46), // Example usage for padding
            color: "purple",
            fontSize: responsiveFontSize(20, 36),
        },
        card: {
            minHeight: "12.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: responsivePadding(10, 20), // Example usage for padding
            textAlign: "center",
            boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        },
        cardTitle: {
            color: "purple",
            marginBlockEnd: responsiveMargin(10, 20), // Example usage for margin
            fontSize: responsiveFontSize(14, 18),
        },
        cardContent: {
            textAlign: "justify",
            fontSize: responsiveFontSize(12, 16),
        },
    }));

    export default aboutStyles;

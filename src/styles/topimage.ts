import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    bigContainer: {
        width: 323,
        height: 206,
        marginBottom: 10,
    },
    container: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    titleContainer: {
        padding: 5,
        marginTop: 10,
        // flexDirection: "row"
    },
    titleContent: {
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 32.2,
        color: "black",
        marginBottom: 5,
        letterSpacing: -0.02,
        textAlign: "left",
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'black',
        justifyContent: 'space-around',
        padding: 10,
        width: 300,
        marginBottom: 10,
    },
    ratingItems: {
        color: 'black',
        fontSize: 20,
        // marginRight: 5,
    },
    ratingImage: {
        width: 35,
        height: 35,
        marginTop: 5,
    },
    PriceContainer: {
        width: 329.6,
        height: 30.6,
        // alignSelf: "flex-start",
        borderRadius: 20,
        marginBottom: 10,
    },
    align: {
        flexDirection: 'row'
    },
    Price: {
        padding: 5,
        fontSize: 20.01,
        fontWeight: "700",
        lineHeight: 17.01,
        textAlign: 'left',
        color: '#FE724C',
    },
    plus: {
        backgroundColor: "white",
    }
    ,
    minus: {
        backgroundColor: "#FE724C"
    }
});

export default styles;


// font-family: Sofia Pro;
// font-size: 28px;
// font-weight: 600;
// line-height: 32.2px;
// letter-spacing: -0.02em;
// text-align: left;


// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//     bigContainer: {
//         position: 'relative',
//         width: '100%',
//         height: 242,
//         marginBottom: 10,
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 10,
//     },
//     backButton: {
//         position: 'absolute',
//         top: 10,
//         left: 10,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         padding: 10,
//         borderRadius: 5,
//     },
//     favoriteButton: {
//         position: 'absolute',
//         top: 10,
//         right: 10,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         padding: 10,
//         borderRadius: 5,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//     },
//     title: {
//         paddingHorizontal: 20,
//         marginBottom: 10,
//     },
//     titleContent: {
//         fontSize: 28,
//         fontWeight: '600',
//         lineHeight: 32.2,
//         letterSpacing: -0.02,
//         textAlign: 'left',
//     },
//     ratingContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//     },
//     ratingItems: {
//         color: 'black',
//         fontSize: 22,
//         marginRight: 10,
//     },
//     ratingLink: {
//         color: 'blue',
//         fontSize: 22,
//         textDecorationLine: 'underline',
//     },
//     ratingImage: {
//         width: 24,
//         height: 24,
//         marginRight: 5,
//     },
// });

// export default styles;

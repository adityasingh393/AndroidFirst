import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    headerImages: {
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        width: 100,
        height: 100,
        backgroundColor: 'black',
    },
    heart: {
        position: 'absolute',
        zIndex: 2,
        width: 200,
        height: 100,
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
    },
    titleContent: {
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 32.2,
        color: "black",
        // marginBottom: ,
        letterSpacing: -0.02,
        textAlign: "left",
    },
    ratingContainer: {
        margin: -10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        width: 300,
        marginBottom: 10,
    },
    ratingValue: {
        fontSize: 15,
        marginLeft: -10,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 5,
    },
    // ratingItems: {
    //     color: 'black',
    //     fontSize: 20,
    // },
    ratingImage: {
        marginTop: 6,
        width: 35,
        height: 35,
        marginRight: 5,
    },
    ratingCount: {
        color: 'black',
        fontSize: 15,
        marginLeft: 2,
        marginRight: 5,
    },
    reviewButton: {
        color: '#FE724C',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    PriceContainer: {
        width: 329.6,
        height: 30.6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        marginBottom: 10,
    },
    align: {
        flexDirection: 'row',
    },
    Price: {
        marginTop: 2,
        padding: 8,
        fontSize: 25.01,
        fontWeight: "700",
        lineHeight: 17.01,
        textAlign: 'left',
        color: '#FE724C',
    },

    plus: {
        // backgroundColor: "#FE724C",
        width: 70,
        height: 40,
        marginLeft: -8,
        padding: 30
        // color: 'black'
    },
    txt: {
        fontSize: 20,
        marginTop: 5
    },
    minus: {
        // backgroundColor: "white",
        width: 80,
        height: 50,
        padding: 30,
        marginRight: -10,
        marginTop: 7
        // color: 'black'
    }
});

export default styles;




// //after using the below csss image is notvbisible
// // import { StyleSheet } from "react-native";

// // const styles = StyleSheet.create({
// //     mainContainer: {
// //         flex: 1,
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         padding: 20,
// //     },
// //     headerImages: {
// //         position: 'relative',
// //         alignItems: 'center',
// //     },
// //     backButton: {
// //         position: 'absolute',
// //         top: 10,
// //         left: 10,
// //         width: 40,
// //         height: 40,
// //     },
// //     heart: {
// //         position: 'absolute',
// //         top: 10,
// //         right: 10,
// //         width: 40,
// //         height: 40,
// //         zIndex: 2,
// //     },
// //     bigContainer: {
// //         width: 323,
// //         height: 206,
// //         marginBottom: 10,
// //     },
// //     container: {
// //         width: '100%',
// //         height: '100%',
// //         borderRadius: 10,
// //     },
// //     titleContainer: {
// //         padding: 5,
// //         marginTop: 10,
// //     },
// //     titleContent: {
// //         fontSize: 28,
// //         fontWeight: "600",
// //         lineHeight: 32.2,
// //         color: "black",
// //         marginBottom: 5,
// //         letterSpacing: -0.02,
// //         textAlign: "left",
// //     },
// //     ratingContainer: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         justifyContent: 'space-around',
// //         padding: 10,
// //         width: 300,
// //         marginBottom: 10,
// //     },
// //     ratingItems: {
// //         color: 'black',
// //         fontSize: 20,
// //     },
// //     ratingImage: {
// //         width: 35,
// //         height: 35,
// //         marginTop: 5,
// //     },
// //     PriceContainer: {
// //         width: 329.6,
// //         height: 30.6,
// //         flexDirection: 'row',
// //         justifyContent: 'space-between',
// //         borderRadius: 20,
// //         marginBottom: 10,
// //     },
// //     align: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //     },
// //     Price: {
// //         padding: 5,
// //         fontSize: 20.01,
// //         fontWeight: "700",
// //         lineHeight: 17.01,
// //         textAlign: 'left',
// //         color: '#FE724C',
// //     },
// //     plus: {
// //         width: 40,
// //         height: 40,
// //         marginLeft: 5,
// //     },
// //     txt: {
// //         fontSize: 20,
// //         marginHorizontal: 10,
// //     },
// //     minus: {
// //         width: 40,
// //         height: 40,
// //         marginRight: 5,
// //     },
// // });

// // export default styles;

// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: 20,
//     },
//     headerImages: {
//         position: 'relative'
//     },
//     backButton: {
//         position: 'absolute',
//         width: 100,
//         height: 100,
//         backgroundColor: 'black'
//     },
//     heart: {
//         position: 'absolute',
//         zIndex: 2,
//         width: 200,
//         height: 100,
//     },
//     bigContainer: {
//         width: 323,
//         height: 206,
//         marginBottom: 10,
//     },
//     container: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 10,
//         // position: 'relative'
//         // zIndex: 1
//     },
//     titleContainer: {
//         padding: 5,
//         marginTop: 10,
//         // flexDirection: "row"
//     },
//     titleContent: {
//         fontSize: 28,
//         fontWeight: "600",
//         lineHeight: 32.2,
//         color: "black",
//         marginBottom: 5,
//         letterSpacing: -0.02,
//         textAlign: "left",
//     },
//     ratingContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         // backgroundColor: 'black',
//         justifyContent: 'space-around',
//         padding: 10,
//         width: 300,
//         marginBottom: 10,
//     },
//     ratingItems: {
//         color: 'black',
//         fontSize: 20,
//         // marginRight: 5,
//     },
//     ratingImage: {
//         width: 35,
//         height: 35,
//         marginTop: 5,
//     },
//     PriceContainer: {
//         width: 329.6,
//         height: 30.6,
//         margin: 5,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         // alignSelf: "flex-start",
//         borderRadius: 20,
//         marginBottom: 10,
//     },
//     align: {
//         flexDirection: 'row'
//     },
//     Price: {
//         marginTop: 2,
//         padding: 8,
//         fontSize: 25.01,
//         fontWeight: "700",
//         lineHeight: 17.01,
//         textAlign: 'left',
//         color: '#FE724C',
// },
// plus: {
//     // backgroundColor: "#FE724C",
//     width: 70,
//     height: 40,
//     marginLeft: -8,
//     padding: 30
//     // color: 'black'
// },
// txt: {
//     fontSize: 20,
//     marginTop: 5
// },
// minus: {
//     // backgroundColor: "white",
//     width: 80,
//     height: 50,
//     padding: 30,
//     marginRight: -10,
//     marginTop: 7
//     // color: 'black'
// }
// });

// export default styles;
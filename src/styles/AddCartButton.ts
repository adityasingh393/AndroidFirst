import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        width: '45%',
        backgroundColor: "#FE724C",
        borderRadius: 30
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 30,
        marginRight: 10,
        backgroundColor: "white",
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
});
export default styles;
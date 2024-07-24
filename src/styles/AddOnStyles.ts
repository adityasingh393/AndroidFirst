import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        marginTop: 450
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addOnItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        resizeMode: 'contain',
    },
    addOnName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addOnPrice: {
        fontSize: 16,
        color: '#FE724C',
        marginRight: 10,
    },
    radioButton: {
        borderWidth: 1,
        borderColor: '#FE724C',
        padding: 10,
        borderRadius: 50,
    },
    radioButtonInner: {
        // width: 10,
        // height: 10,
        borderRadius: 5,
        backgroundColor: 'black',
    },
});
export default styles;
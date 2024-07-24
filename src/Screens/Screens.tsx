import React from "react";
import { View, StyleSheet } from "react-native";
import ImageContainer from "../components/ImageConatiner";
import Addons from "../components/Addons";
import AddCartButton from "../components/AddCartButton";

const Screen: React.FC = () => {
    return (
        <View style={styles.container}>
            <ImageContainer />
            <Addons />
            <AddCartButton />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 400,
        margin: 10
    }
});

export default Screen;

import React from "react";
import { View, StyleSheet } from "react-native";
import ImageContainer from "../components/ImageConatiner";
import Addons from "../components/Addons";
import AddCartButton from "../components/AddCartButton";

const addOns = [
    { img: require('../assests/pepper.png'), name: "Pepper Julinned", price: "+$2.30" },
    { img: require('../assests/spinach.png'), name: "Baby Spinach", price: "+$4.70" },
    { img: require('../assests/masroom.png'), name: "Mushroom", price: "+$2.50" }
];

// const main = {
//     //     heartImage: require('../assests/fav.png'),
//     //     mainImage: require('../assests/image57.png'),
//     //     backButtonImage: require('../assests/backButton.png'),
//     //     title: "Ground Beef Tacos",
//     //     ratingStarImage: require('../assests/ratingStar.png'),
//     //     ratingValue: "4.5",
//     //     ratingCount: "(30+)",
//     //     price: "$9.50"
//     // };

const Screen: React.FC = () => {
    return (
        <View style={styles.container}>
            <ImageContainer
                heartImage={require('../assests/fav.png')}
                mainImage={require('../assests/image57.png')}
                backButtonImage={require('../assests/backButton.png')}
                title="Ground Beef Tacos"
                ratingStarImage={require('../assests/ratingStar.png')}
                ratingValue="4.5"
                ratingCount="(30+)"
                price="$9.50"
            />
            <Addons addOns={addOns} />
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

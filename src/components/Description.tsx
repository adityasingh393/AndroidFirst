import React from "react";
import { View, Text } from "react-native";
import DescriptionStyles from "../styles/Discription";

const Description: React.FC = () => {
    return (
        <View style={DescriptionStyles.container}>
            <Text style={DescriptionStyles.descriptionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ullam atque non nobis quo vel aliquid?
            </Text>
        </View>
    );
}

export default Description;

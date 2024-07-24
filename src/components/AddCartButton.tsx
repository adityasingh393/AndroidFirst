import React from 'react';
import { View, Image, Text } from "react-native";
import { Button } from '@rneui/themed';
import styles from '../styles/AddCartButton';

const AddCartButton: React.FC = () => {
    const handleAddToCartPress = () => {
        console.log("Add to Cart button pressed");
    };

    return (
        <View style={styles.container}>
            <Button
                title=""
                buttonStyle={styles.button}
                onPress={handleAddToCartPress}
            >
                <View style={styles.buttonContent}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assests/AddToCartButton.png')}
                            style={styles.image}
                        />
                    </View>
                    <Text style={styles.buttonText}>ADD TO CART</Text>
                </View>
            </Button>
        </View>
    )
}

export default AddCartButton;

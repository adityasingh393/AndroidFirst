import React from 'react';
import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from '@rneui/themed';
import styles from '../styles/AddCartButton';
const AddCartButton: React.FC = () => {
    return (
        <View style={styles.container}>
            <Button
                title="ADD TO CART"
                buttonStyle={styles.button}
            >
                <View style={styles.buttonContent}>
                    <Image
                        source={require('../assests/AddToCartButton.png')}
                        style={styles.image}
                    />
                    <Text style={styles.buttonText}>ADD TO CART</Text>
                </View>
            </Button>
        </View>
    )
}


export default AddCartButton;

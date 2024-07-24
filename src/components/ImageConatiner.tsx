import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Image } from '@rneui/themed';
import Description from './Description';
import styles from '../styles/topimage';
import { ImageContainerProps } from '../Interfaces/types';

const ImageContainer: React.FC<ImageContainerProps> = (props) => {
    const [quantity, setQuantity] = useState(6);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleHeartPress = () => {
        console.log("Heart button pressed");
    };

    const handleBackPress = () => {
        console.log("Back button pressed");
    };

    const handleSeeReviewPress = () => {
        console.log("See Review button pressed");
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.bigContainer}>
                <View style={styles.headerImages}>
                    <TouchableOpacity onPress={handleHeartPress}>
                        <Image style={styles.heart} source={props.heartImage} />
                    </TouchableOpacity>
                    <Image style={styles.container} source={props.mainImage} />
                    <TouchableOpacity onPress={handleBackPress}>
                        <Image style={styles.backButton} source={props.backButtonImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleContent}>{props.title}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Image style={styles.ratingImage} source={props.ratingStarImage} />
                    <Text style={styles.ratingValue}>{props.ratingValue}</Text>
                    <Text style={styles.ratingCount}>{props.ratingCount}</Text>
                    <TouchableOpacity onPress={handleSeeReviewPress}>
                        <Text style={styles.reviewButton}>See Review</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.PriceContainer}>
                    <Text style={styles.Price}>{props.price}</Text>
                    <View style={styles.align}>
                        <TouchableOpacity onPress={decrementQuantity}>
                            <Image style={styles.minus} source={require('../assests/minus.png')} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>{quantity}</Text>
                        <TouchableOpacity onPress={incrementQuantity}>
                            <Image style={styles.plus} source={require('../assests/Plus.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Description />
            </View>
        </View>
    );
};

export default ImageContainer;
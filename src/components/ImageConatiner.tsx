import React from 'react';
import { Text, View } from 'react-native';
import { Image } from '@rneui/themed';
import Description from './Description';
import styles from '../styles/topimage';

const ImageContainer: React.FC = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.bigContainer}>
                <Image style={styles.container} source={require('../assests/image57.png')} />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleContent}>Ground Beef Tacos</Text>
                </View>

                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingItems}>4.5</Text>
                    <Image style={styles.ratingImage} source={require('../assests/ratingStar.png')} />
                    <Text style={styles.ratingItems}>30+</Text>
                    <Text style={styles.ratingItems}>See Review</Text>
                </View>

                <View style={styles.PriceContainer}>
                    <Text style={styles.Price}>$9.50</Text>
                    <View style={styles.align}>
                        <Image style={styles.minus} source={require('../assests/minus.png')} />
                        <Text>02</Text>
                        <Image style={styles.plus} source={require('../assests/plus.png')} />
                    </View>
                </View>
                <Description />
            </View>
        </View>

    );
}

export default ImageContainer;


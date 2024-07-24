import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from '@rneui/themed';
import Description from './Description';
import styles from '../styles/topimage';

const ImageContainer: React.FC = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.bigContainer}>
                <View style={styles.headerImages}>
                    <Image style={styles.heart} source={require('../assests/fav.png')} />
                    <Image style={styles.container} source={require('../assests/image57.png')} />
                    <Image style={styles.backButton} source={require('../assests/backButton.png')} />
                </View>
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
                        <TouchableOpacity >
                            <Image style={styles.minus} source={require('../assests/minus.png')} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>02</Text>
                        <TouchableOpacity>
                            <Image style={styles.plus} source={require('../assests/Plus.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Description />
            </View>
        </View>

    );
}

export default ImageContainer;


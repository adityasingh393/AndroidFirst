import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../styles/AddOnStyles";
const addOns = [
    { img: require('../assests/pepper.png'), name: "Pepper Julinned", price: "+$2.30" },
    { img: require('../assests/spinach.png'), name: "Baby Spinach", price: "+$4.70" },
    { img: require('../assests/masroom.png'), name: "Mushroom", price: "+$2.50" }
];
const Addons: React.FC = () => {
    const [selectedAddon, setSelectedAddon] = useState<string | null>(null);
    const handleAddonSelect = (addonName: string) => {
        setSelectedAddon(addonName);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choice of Add Ons</Text>
            {addOns.map((addOn, index) => (
                <View style={styles.addOnItem} key={index}>
                    <View style={styles.leftContainer}>
                        <Image source={addOn.img} style={styles.image} />
                        <Text style={styles.addOnName}>{addOn.name}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.addOnPrice}>{addOn.price}</Text>
                        <TouchableOpacity
                            style={styles.radioButton}
                            onPress={() => handleAddonSelect(addOn.name)}
                        >
                            {selectedAddon === addOn.name && (
                                <View style={styles.radioButtonInner} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Addons;

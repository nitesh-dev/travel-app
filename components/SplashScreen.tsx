// SplashScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/splash.png')} style={styles.image} />
            <Text style={styles.text}>Welcome to TyperBuddy!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0172B2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    }
});

export default SplashScreen;

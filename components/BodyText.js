import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => <Text style={styles.bodyText}>{props.children}</Text>

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'open-sans'
    }
});

export default BodyText;

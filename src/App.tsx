import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#9013FE', '#5B63DF', '#2DBDE4', '#9013FE']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradient}>
        <Text>Hello</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderBottomLeftRadius: 70,
    transform: [
      {scale: 1.3},
      {translateX: -50},
      {translateY: -90},
      {
        rotate: '-30deg',
      },
    ],
  },
  gradient: {
    width: '100%',
    display: 'flex',
    flex: 1,
  },
});

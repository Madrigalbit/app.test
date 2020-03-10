import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>

        <Text
          style={styles.header}
        >LEXUS LC-500
      </Text>

        <Text
          style={styles.headerAlt}
        >MORE THAN A CAR. A FEELING.
        </Text>

        <Image
          style={styles.image}
          source={require('./assets/images/lcBrown.jpg')}
        />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '32%',
    resizeMode: 'contain',
  },
  header: {
    fontSize: 55,
    marginTop: 70,
    textAlign: 'center',
  },
  headerAlt: {
    fontSize: 25,
    textAlign: 'center',
  },




});

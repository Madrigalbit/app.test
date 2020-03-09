import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>

        <Text
          style={{ fontSize: 55, alignItems: 'center', flex: 1, paddingTop: 70 }}

        >LEXUS LC-500
      </Text>
        <Text
          style={{ fontSize: 25, alignItems: 'center', flex: 1, }}

        >MORE THAN A CAR. A FEELING.
        </Text>


        <Image
          style={{ width: '100%', height: '100%', flex: 1,}}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: '100px',
    resizeMode: 'cover',
    zIndex: 2,

  }
});

import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./src/assets/logobranco.png')} 
        resizeMode='contain'
        style={styles.logo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00547A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:300,
  }
});

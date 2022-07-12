import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#040316',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  text: {
    color: '#FFF',
    fontSize: 18
  }
});

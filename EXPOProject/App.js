import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Image} from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
export default function App() {
  return (
  
    <>
    <LoginScreen/>
    </>
  
  // <SafeAreaView style={styles.container}>
  
  //   {/* <View style={styles.container}> */}
  //     <Text>Esta va a ser l app de la expo</Text>
  //     <Text>Esta va a ser l app de la expo</Text>
  //     <Text>Esta va a ser l app de la expo</Text>
  //     <Text>Esta va a ser l app de la expo</Text>
  //     <StatusBar style="auto" />
  //   {/* </View> */}
  // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

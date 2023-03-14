import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView, Image} from 'react-native';
import HomeStack from './src/routes/homeStack';
import LoginScreen from './src/Screens/LoginScreen';
export default function App() {
  const [IsLogged, setIsLogged] = useState(true)
  return (
    <>
    {IsLogged ? <LoginScreen setIsLogged = {setIsLogged}/> : <HomeStack/>}
    
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

import { Button, SafeAreaView, Text , Pressable, StyleSheet, TouchableOpacity} from "react-native";
import { HeaderBackButton } from "react-navigation-stack";

export default function HomeScreen({navigation}) {
    
    function handleNavigation() {
        navigation.navigate("ReviewDetails")
    }

    return (<SafeAreaView>

        <TouchableOpacity>

        <Pressable style={styles.button} >
            <Text style={styles.text}>{"title"}</Text>
        </Pressable>
        </TouchableOpacity>
        <Text>Home </Text>
        <Button title="Observar Camaras 📸" onPress={()=> {navigation.navigate("CameraScreen")}} />
        <Button title="Alertas de Movimiento 👟" onPress={()=> {navigation.navigate("AlertScreen")}} />
        <Button title="Control de Temperatura 🌡️" onPress={()=> {navigation.navigate("TemperatureScreen")}} />
        <Button title="Luces Smart 💡" onPress={()=> {navigation.navigate("LigthsScreen")}} />
        <Button title="Control de Cerradura 🔐" onPress={()=> {navigation.navigate("ControlScreen")}} />
        <Button title="Go to details 👨🏽‍💻👩🏻‍💻" onPress={()=> {navigation.navigate("ReviewDetails")}} />


    </SafeAreaView>


        
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
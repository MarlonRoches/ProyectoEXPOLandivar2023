import { StyleSheet, Text, View , SafeAreaView, Image, TextInput, Butrton, 
    TouchableOpacity } from 'react-native';


function loginScreen({setIsLogged}) {
    return(<SafeAreaView style= {styles.container}>
        <Image style={styles.logoLogin} source={require("../Images/Logo.png")}/>    
        {/* <Image style={styles.logoLogin} source={require("../Images/WatchPoint.png")}/>     */}
        <TextInput style={styles.textImput} placeholder='usuario'/>
        <TextInput  style={styles.textImput} placeholder='password'/>
        <PrimaryButton displayText={"Primario"} setIsLogged = {setIsLogged}/>
        <SecondaryButton displayText={"Secundario"}/>

        <Text> placeholder text<Text>xd </Text></Text>
    </SafeAreaView>)
}
function PrimaryButton({displayText, setIsLogged}) {

    const buttonStyle= StyleSheet.create({
        buttonContainer: {
            width:"80%",
            height:"10%",
            borderRadius:5
          },
          buttonBody: {
            width:"100%",
            height:"100%",
            backgroundColor: "black",
            display:'flex',
            flexDirection: 'column',
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10
        },
        buttonText: {
            color: "white",
            fontWeight:"bold",
            fontSize:20,
            textAlign:"center"
        },
    
      });
    return (<>

    <TouchableOpacity  style={buttonStyle.buttonContainer} onPress= {()=>setIsLogged(false)}>
        <View style={buttonStyle.buttonBody}>
            <Text style={buttonStyle.buttonText}> {displayText}</Text>
        </View>
    </TouchableOpacity>
    
    </>)
}
function SecondaryButton({displayText}) {

  const buttonStyle= StyleSheet.create({
      buttonContainer: {
          width:"80%",
          height:"10%",
          backgroundColor:"black",
          padding:2,
          borderRadius:10
        },
        buttonBody: {
          width:"100%",
          height:"100%",
          backgroundColor: "white",
          display:'flex',
          flexDirection: 'column',
          alignItems:"center",
          justifyContent:"center",
          borderRadius:10

      },
      buttonText: {
          color: "black",
          fontWeight:"bold",
          fontSize:20,
          textAlign:"center"
      },
  
    });
  return (<>

  <TouchableOpacity  style={buttonStyle.buttonContainer}>
      <View style={buttonStyle.buttonBody}>
          <Text style={buttonStyle.buttonText}> {displayText}</Text>
      </View>
  </TouchableOpacity>
  
  </>)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFCF9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoLogin: {
        width:200,
        height:200,
    },
    textImput: {
      width:"80%",
      height:"5%",
      fontSize: 10,
      backgroundColor:"#E2E6E0"
    }
  });
  
export default loginScreen
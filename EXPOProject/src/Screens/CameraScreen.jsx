
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
export default function CameraScreen(params) {
    
    return (<>
    <Text>Holasassss </Text>
    <CameraContainer/>
    </>)
}


function CameraContainer(){
    
    const styles = StyleSheet.create({
        cameraContainer:{
            width:"80%",
            height:"50%",
            backgroundColor: "red"
        }
    })
    return (<>
    <View style= {styles.cameraContainer}>

        <CamComponent/>
    </View>
    
    
    </>)
}

function CamComponent() {
    const [imageUri, setImageUri] = useState(null);
  
    const takePicture = async () => {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        setImageUri(data.uri);
      }
    };
  
    return (
      <View style={{ flex: 1 }}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={takePicture}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Tomar foto</Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
        {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
      </View>
    );
  }
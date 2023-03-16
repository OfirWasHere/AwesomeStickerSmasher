import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as imagePicker from "expo-image-picker";
const PlaceholderImage = require('./assets/images/background-image.jpg');

export default function App() {
const [selectedImage, setSelectedImage] = useState(null);



  async function pickupImageAsync() {
    let result = await imagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      console.log(result);
    } else {
      alert("you didn't select an image.")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
         placeholderImageSource={PlaceholderImage} 
         selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button label={"Choose a photo"} theme={"primary"} onPress={pickupImageAsync}></Button>
        <Button label={"use this photo"} theme={"secondary"}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
});
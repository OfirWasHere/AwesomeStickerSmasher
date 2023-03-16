import { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

function ImageViewer({placeholderImageSource, selectedImage}){
    const imageSource = selectedImage !== null ? { uri: selectedImage }: placeholderImageSource;

    return(
        <Image source={imageSource} style={style.image}></Image>
    )
};

const style = StyleSheet.create({
    image:{
        width:320,
        height:440,
        borderRadius:18,

    }
});

export default ImageViewer;
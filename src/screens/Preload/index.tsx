import React, { useEffect } from "react";
import { StyleSheet,View, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default()=>{
    const navigation = useNavigation();

    useEffect(()=>{
        setInterval(function(){
            navigation.navigate('Home')
          }, 800);
    },[])

    return(
        <View style={styles.container}>
            <Image 
            source={require('../../assets/logobranco.png')} 
            resizeMode='contain'
            style={styles.logo}
            />

            <ActivityIndicator size="large" color="#ffffff" />
      </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00547A'
    },
    logo:{
        width:400,
        marginBottom:50
    }
})
import React from "react";
import { StyleSheet,View, Text } from "react-native";
import Box from "../../components/Box";
import BoxG from "../../components/BoxG";

export default()=>{
    const iconCalculator = require('../../assets/iconCalculator.png')
    const iconUser = require('../../assets/iconUser.png')
    const iconSave = require('../../assets/iconSave.png')
    const iconProfile = require('../../assets/iconProfile.png')
    const calculatorBoxG = require('../../assets/calculatorBoxG.png')
    const mobileBoxG = require('../../assets/mobileBoxG.png')

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.bemVindo}>
                    <Text style={styles.title}>Bem vindo, [user]!</Text>
                    <Text style={styles.subtitle}>O que gostaria de fazer hoje? </Text>
                </View>

                <View style={styles.containerBox}>
                    <Box icon={iconCalculator} title="Custos de fabricação" />
                    <Box icon={iconUser} title="Cadastrar novo cliente" />
                    <Box icon={iconSave} title="Ver custos salvos" />
                    <Box icon={iconProfile} title="Editar perfil"/>
                </View>

                <BoxG 
                    titleBox="Custos de fabricação" 
                    textBox="Calcular os custos de fabricação de cada camiseta por cliente." 
                    buttonBox="Acessar" 
                    imageBox={calculatorBoxG}
                />

                <BoxG 
                    titleBox="Cadastrar novo cliente" 
                    textBox="Cadastre novos clientes por aqui." 
                    buttonBox="Cadastrar" 
                    imageBox={mobileBoxG}
                />

            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#00547A',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:10,
    },
    bemVindo:{
        backgroundColor:'#ffffff0',
        marginBottom:40,
    },
    title:{
        color:'#ffffff',
        fontSize:24,
        fontWeight:'bold'
    },
    subtitle:{
        color:'#c5c5c5',
        fontSize:20,
    },
    containerBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:40,
    }
})
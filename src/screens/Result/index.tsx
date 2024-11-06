import React from "react";
import { StyleSheet,View, Text, Button } from "react-native";
import BoxResult from "../../components/BoxResult";

export default()=>{
    const iconCalculator = require('../../assets/iconCalculator.png')
    const iconUser = require('../../assets/iconUser.png')

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.bemVindo}>
                    <Text style={styles.title}>Resultado do cálculo</Text>
                    <Text style={styles.subtitle}>Cliente: Maria da Silva </Text>
                </View>

                <View style={styles.containerBox}>
                    <BoxResult icon={iconCalculator} title="Valor total" info={701490} />
                    <BoxResult icon={iconCalculator} title="Valor total" info={701490} />
                    <BoxResult icon={iconCalculator} title="Valor total" info={701490} />
                    <BoxResult icon={iconCalculator} title="Valor total" info={701490} />
                    <BoxResult icon={iconCalculator} title="Valor total" info={701490} />
                    <BoxResult icon={iconCalculator} title="Valor total" info={701490} />
                    <BoxResult icon={iconCalculator} title="Valor total" info={701490} />
                    <BoxResult icon={iconCalculator} title="Valor total" info={701490} />
                </View>

               <Button title="Salvar informações" onPress={()=>{alert('Abrir modal')}} />

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
        width:'100%',
        height:'80%',
        padding:20,
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
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginBottom:40,
    }
})
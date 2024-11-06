import React, { useState } from "react"
import { StyleSheet,View, Text, Button, TextInput, ScrollView } from "react-native"

export default()=>{
    const [cost1, setCost1] = useState('')
    const [cost2, setCost2] = useState('')
    const [cost3, setCost3] = useState('')
    const [cost4, setCost4] = useState('')
    const [cost5, setCost5] = useState('')
    const [cost6, setCost6] = useState('')
    const [cost7, setCost7] = useState('')
    const [cost8, setCost8] = useState('')
    
    return(
        <View style={styles.container}>
            <View style={styles.content}>

                <View style={styles.containerName}>
                    <Text style={styles.title}>
                        Cliente: ___________
                    </Text>

                    <Text style={styles.subtitle}>
                        Coloque os valores dos custos
                    </Text>
                </View>

                <ScrollView>
                    <TextInput
                        onChangeText={t => setCost1(t)}
                        value={cost1}
                        style={styles.textInput}
                        placeholder="Acabamento (com papelão):"
                    />

                    
                    <TextInput
                        onChangeText={t => setCost2(t)}
                        value={cost2}
                        style={styles.textInput}
                        placeholder="Bordado:"
                        keyboardType="numeric"
                    />

                    <TextInput
                        onChangeText={t => setCost3(t)}
                        value={cost3}
                        style={styles.textInput}
                        placeholder="Estampa: "
                        keyboardType="numeric"
                    />


                    <TextInput
                        onChangeText={t => setCost4(t)}
                        value={cost4}
                        style={styles.textInput}
                        placeholder="Valor Final: "
                        keyboardType="numeric"
                    />


                    <TextInput
                        onChangeText={t => setCost5(t)}
                        value={cost5}
                        style={styles.textInput}
                        placeholder="Preço peça finalizada: "
                        keyboardType="numeric"
                    />


                    <TextInput
                        onChangeText={t => setCost6(t)}
                        value={cost6}
                        style={styles.textInput}
                        placeholder="Preço venda PL"
                        keyboardType="numeric"
                    />


                    <TextInput
                        onChangeText={t => setCost7(t)}
                        value={cost7}
                        style={styles.textInput}
                        placeholder="Lucro por peça: "
                        keyboardType="numeric"
                    />

                    <TextInput
                        onChangeText={t => setCost8(t)}
                        value={cost8}
                        style={styles.textInput}
                        placeholder="Lucro total:"
                        keyboardType="numeric"
                    />
                </ScrollView>

                <Button title="Continuar =>" onPress={()=>alert('Pressed')}/>

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
        height:'75%',
        backgroundColor:'#ffffff',
        paddingHorizontal:20,
        paddingTop:20,

        justifyContent:'space-between',
    },

    profile:{
        justifyContent:'center',
        alignItems:'center',
    },

    profilePhoto:{
        width:150, 
        height:150, 
        borderWidth:5, 
        borderRadius:100,
        borderColor:'#00547A',
        marginTop:50,
    },

    containerName:{
        justifyContent:'center',
        alignItems:'flex-start',   
        marginBottom:10,
    },

    title:{
        color:'#00547A',
        fontSize:24,
        fontWeight:'500',
    },

    subtitle:{
        color:'#a1a1a1',
        fontSize:20,
    },

    textInput:{
      height:50,
      borderBottomColor:'#00547A',
      borderBottomWidth:2,
      marginBottom:15,
      color:'#00547A'
    },
   
    
})
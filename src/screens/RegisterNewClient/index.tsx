import React, { useState } from "react"
import { StyleSheet,View, Text, Button, TextInput } from "react-native"

export default()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [end, setEnd] = useState('')
    const [obs, setObs] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.content}>

                <View style={styles.containerName}>
                    <Text style={styles.name}>Cadastrar novo cliente</Text>
                </View>

                <View>
                    <TextInput
                        onChangeText={t => setName(t)}
                        value={name}
                        style={styles.textInput}
                        placeholder="Nome"
                    />

                    <TextInput
                        onChangeText={t => setEmail(t)}
                        value={email}
                        style={styles.textInput}
                        placeholder="email@email.com"
                    />

                    <TextInput
                        onChangeText={t => setTel(t)}
                        value={tel}
                        style={styles.textInput}
                        placeholder="(99)99999-9999"
                    />

                    <TextInput 
                        onChangeText={t=>setObs(t)}
                        value={obs}
                        style={styles.textInput}
                        placeholder="Observação"                
                        multiline
                        numberOfLines={4}
                        maxLength={40}
                    />
                </View>

                <Button title="Salvar" onPress={()=>alert('Pressed')} />

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
        paddingTop:40,
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
        alignItems:'center',
        marginTop:5,
        marginBottom:40,
    },

    name:{
        color:'#00547A',
        fontSize:24,
        fontWeight:'500'
    },

    cargo:{
        color:'#00547A',
        fontSize:20,
    },

    textInput:{
      height:50,
      borderBottomColor:'#00547A',
      borderBottomWidth:2,
      marginBottom:15,
      color:'#00547A'
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
    
})
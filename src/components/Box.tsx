import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native"
type Props={
    title:string,
    icon: ImageSourcePropType,
}

export default({ icon, title }:Props )=>{

    return(
        <TouchableOpacity style={styles.box}>
            <View style={styles.boxIcon}>
                <Image source={icon} />
            </View>
            
            <Text style={styles.boxText}>{title}</Text>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
box:{
    flexDirection:'column',
    width:75
},
boxIcon:{
    width:75,
    height:80,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    padding:12
},
boxText:{
    color:'#fff',
    fontSize:12,
    flexWrap:'wrap',
    textAlign:'center'
}
})
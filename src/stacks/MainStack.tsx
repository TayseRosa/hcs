import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Preload from "../screens/Preload";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import RegisterNewClient from '../screens/RegisterNewClient';
import Calc1 from '../screens/Calc1';
import Calc2 from '../screens/Calc2';
import Calc3 from '../screens/Calc3';
import Result from "../screens/Result";

//Fazer a navegação (navigate) entre os icones da Home e as telas criadas
//Fazer o tabBottom
//Fazer os calculos do excel
//Conexão com o banco de dados para salvar as informações
//Revisao geral do que falta

const Stack = createNativeStackNavigator()

export default ()=>{
    return(
        <Stack.Navigator 
            initialRouteName="Preload"
            screenOptions={{ headerShown:false }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="RegisterNewClient" component={RegisterNewClient} />
            <Stack.Screen name="Calc1" component={Calc1} />
            <Stack.Screen name="Calc2" component={Calc2} />
            <Stack.Screen name="Calc3" component={Calc3} />
            <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
    )
}
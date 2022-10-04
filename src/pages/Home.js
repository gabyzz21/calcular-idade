import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export default function Home(){

    let[ano, setAnoNasc] = useState();
    let[anoAtual, setAnoAtual] = useState();

    function CalcularTotal(){
        let resultado = parseFloat(anoAtual - ano)

        alert("O resultado total: " +resultado);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Calcular idade</Text>
        
            <TextInput onChangeText={setAnoNasc} style={styles.campo} placeholder="Digite o ano do seu nascimento"/>

            <TextInput onChangeText={setAnoAtual} style={styles.campo} placeholder="Digite seu ano atual "/>


            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>

                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#40E0D0',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize: 25,
        color:'#FFF',
        fontWeight: 'bold',
        marginBottom:40
},
campo:{
    backgroundColor:'#fff',
    fontSize:18, 
    padding: 8,
    marginTop:10,
    marginBottom:10,
    width:300,
    border:10
},
botao:{
     backgroundColor: '#20B2AA',
    alignItems: "center",
    padding: 15,
    marginTop: 20,
    width: 250
},

botaoTexto:{
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",

}
});
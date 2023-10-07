import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState } from 'react';
let timer =null
let ss= 0
let mm= 0
let hh= 0
export default function App() {

 const [numero, setNumero] =useState(0)
 const [botao, setBotao] = useState('VAI')
 const [ultimo, setUltimo] = useState(null)

    function vai (){
      if(timer !==null){
        //Aqui vai parar o timer
        clearInterval(timer);
        timer =null;
        setBotao('VAI')
      }else{
        //comece a girar o timer...
        timer= setInterval(()=>{
          ss++;
        
      
      if(ss==60){
        ss=0
        mm++
      }
      if(mm==60){
      mm=0
      hh++
      }
      //exatamente para ficar 05,01,etc..
      
      let format =
      (hh<10?'0'+hh : hh)+':'
       +(mm<10?'0'+mm : mm)+':'
       +(ss<10?'0'+ss : ss)
      
    setNumero(format)
    
  },1000);
  setBotao('PARAR')
    }
  }
    function limpar(){
      if(timer !== null){
        //parar o timer
        clearInterval(timer)
        timer =null
      }
      setUltimo(numero)
      setNumero(0);
      ss=0
      mm=0
      hh=0
      setBotao('VAI')
    }

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text> {numero}</Text>
        <View>
          <TouchableOpacity  onPress={vai}>
            <Text>{botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={limpar}>
            <Text>LIMPAR</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{ultimo?'Ultimo tempo: '+ ultimo:''}</Text>
        </View>
    </View>
  );

}

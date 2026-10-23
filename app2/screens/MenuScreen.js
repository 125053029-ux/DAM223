/* 1.ZONA DE IMPORTACIONES */
import { StyleSheet, View,Text,Button } from 'react-native';
import { useState } from 'react';
import  SafeScreen  from './SafeScreen';
import  PressableScreen  from './PressableScreen';
import  TarjetasScreen  from './TarjetasScreen';
import  ActivityScreen  from './ActivityScreen';
import  FlatListScreen  from './FlatListScreen';
import  ImageScreen  from './ImageScreen';
import  ModalScreen  from './ModalScreen';
import  TextInputScreen  from './TextInputScreen';


/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function MenuScreen() {
    const[screen,setScreen]=useState('menu');
    switch(screen){
        case 'safe':
            return <SafeScreen/>;
        case 'press':
            return <PressableScreen/>;
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'activy':
            return <ActivityScreen/>;
        case 'flat':
            return <FlatListScreen/>;
        case 'images':
            return <ImageScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'textss':
            return <TextInputScreen/>;
        case 'menu':
           default:
            return (
    <View style={styles.container}>
        <Text> Menu de practicas </Text>
        <Button title="Practica Tarjetas" onPress={()=>setScreen('tarjetas')}></Button>
        <Button title="Practica SafeAreaView" onPress={()=>setScreen('safe')}></Button>
        <Button title="Practica Presseable" onPress={()=>setScreen('press')}></Button>
        <Button title="Practica Activity" onPress={()=>setScreen('activy')}></Button>
        <Button title="Practica FlatList" onPress={()=>setScreen('flat')}></Button>
        <Button title="Practica ImageScreen" onPress={()=>setScreen('images')}></Button>
        <Button title="Practica Modal" onPress={()=>setScreen('modal')}></Button>
        <Button title="Practica TextInput" onPress={()=>setScreen('textss')}></Button>
    </View>
    
  );
} //este switch
} // este funcion
/* 3.ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
},
  
});

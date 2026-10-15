import {Text, Image, View, Button} from 'react-native';

export const Saludo2= ()=>{
    return(
        <View>
        <Text>Hola dulcesita : desde un componente propio</Text>
         <Image source={require('../assets/wave.png')}></Image>
        <Button title="Presiona para saludar"/>
        </View>
    )
}
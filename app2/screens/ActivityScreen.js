/* 1.ZONA DE IMPORTACIONES */
import { StyleSheet, View , Text} from 'react-native';
/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function ActivityScreen() {
  return (
    <View style={styles.container}>
 
    <Text>Aqui va la practica 16</Text>
     <Text>Equipo Schoenstat</Text>
    </View>
  );
}
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
/* 1.ZONA DE IMPORTACIONES */
import { StyleSheet, View , Text} from 'react-native';
/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function Modal() {
  return (
    <View style={styles.container}>
 
    <Text>Aqui va la practica 15</Text>
     <Text>Equipo Ian</Text>
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
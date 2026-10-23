/* 1.ZONA DE IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../components/Perfil';

/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
  
      <Perfil nombre="Dulcesita" 
      carrera="TIID" 
      materia="Movil"
      cuatri="Cuarto cuatrimestre"
      style={styles.tarjeta1}>
      </Perfil>
       
       <Perfil nombre="Cocardo" 
      carrera="TIID" 
      materia="i love you"
      cuatri="1-marzo"
      style={styles.tarjeta2}>
      </Perfil>
       
       <Perfil nombre="KARLOTA" 
      carrera="TIID" 
      materia="Movil"
      cuatri="Cuarto cuatrimestre"
      style={styles.tarjeta3}>
      
      </Perfil>
       
      
      <StatusBar style="auto" />
    </View>
  );
}
/* 3.ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
},
  tarjeta1:{backgroundColor:'blue'},
  tarjeta2:{backgroundColor:'violet'},
  tarjeta3:{backgroundColor:'azure'},
});

import { View, Text, StyleSheet } from 'react-native';
import { PantallaBase, colores, Icono } from '../components';

const barras = [90, 65, 35, 70];
export default function DashboardScreen() {
  return (
    <PantallaBase titulo="Dashboard" iconos={['usuario', 'lista', 'puerta']}>
      <View style={s.tarjeta}>
        <View>
          <Text style={s.t1}>TOTAL USUARIOS</Text>
          <Text style={s.t1}>ONLINE <Text style={{ color: colores.verde }}>● </Text><Text style={s.num}>5</Text></Text>
        </View>
        <Icono nombre="usuarios" tam={44} />
      </View>
      <View style={s.tarjeta}>
        <View>
          <Text style={s.t1}>TOTAL SERVICIOS</Text>
          <Text style={s.t1}>ACTIVAS <Text style={{ color: colores.verde }}>● </Text><Text style={s.num}>2</Text></Text>
        </View>
        <Icono nombre="nota" tam={44} />
      </View>
      <Text style={s.grafTitulo}>GRAFICA DE REPORTES</Text>
      <View style={s.grafica}>
        {barras.map((h, i) => <View key={i} style={[s.barra, { height: h * 1.4 }]} />)}
      </View>
    </PantallaBase>
  );
}
const s = StyleSheet.create({
  tarjeta: { backgroundColor: colores.azul, 
    flexDirection: 'row',
     justifyContent: 'space-between',
      alignItems: 'center', 
      padding: 12, 
      marginBottom: 14 },
  t1: { color: '#fff', 
    fontWeight: 'bold', 
    letterSpacing: 2, 
    fontSize: 14 },
  num: { color: '#fff', 
    fontSize: 20,
     fontWeight: '900' },
  grafTitulo: { fontSize: 11,
     fontWeight: 'bold', 
     letterSpacing: 2, 
     marginTop: 20, 
     marginBottom: 6 },
  grafica: { height: 170, 
    borderWidth: 1, 
    borderColor: '#999', 
    flexDirection: 'row', 
    alignItems: 'flex-end',
     justifyContent: 'space-around',
      padding: 10 },
  barra: { width: 28, 
    backgroundColor: '#1747B5' },
});

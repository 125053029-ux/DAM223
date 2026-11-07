import { View, StyleSheet } from 'react-native';
import { Icono } from './Icono';

export const BarraInferior = ({ iconos = ['home', 'volver'] }) => (
  <View style={s.barra}>
    {iconos.map((n, i) => <Icono key={i} nombre={n} tam={30} />)}
  </View>
);
const s = StyleSheet.create({
  barra: { flexDirection: 'row',
     justifyContent: 'space-around',
      alignItems: 'center',
       paddingHorizontal: 20, 
       paddingVertical: 12, 
       borderTopWidth: 1, 
       borderTopColor: '#E3E6EA' },
});

import { View, Text, StyleSheet } from 'react-native';
import { colores } from './tema';
// valor puede ser texto o un elemento (por ejemplo <Icono />)
export const Dato = ({ etiqueta, valor, grande, style }) => (
  <View style={style}>
    <Text style={s.etiqueta}>{etiqueta}</Text>
    {typeof valor === 'string' || typeof valor === 'number'
      ? <Text style={[s.valor, grande && { fontSize: 17 }]}>{valor}</Text>
      : <View style={{ marginTop: 4 }}>{valor}</View>}
  </View>
);
const s = StyleSheet.create({
  etiqueta: { alignSelf: 'flex-start',
     backgroundColor: colores.gris,
      color: colores.marino,
       fontSize: 10,
        fontWeight: 'bold', 
        paddingHorizontal: 5,
         paddingVertical: 1, 
         letterSpacing: 1 },
  valor: { fontSize: 15, 
    fontWeight: '900',
     marginTop: 3 },
});

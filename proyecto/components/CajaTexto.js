import { View, Text, StyleSheet } from 'react-native';
import { colores } from './tema';
export const CajaTexto = ({ etiqueta, texto, style }) => (
  <View style={[s.caja, style]}>
    {etiqueta ? <Text style={s.etiqueta}>{etiqueta}</Text> : null}
    <Text style={s.texto}>{texto}</Text>
  </View>
);
const s = StyleSheet.create({
  caja: { borderWidth: 1, 
    borderColor: '#999', 
    backgroundColor: '#fff', 
    padding: 10, 
    marginVertical: 10 },
  etiqueta: { alignSelf: 'flex-start', 
    backgroundColor: colores.gris, 
    color: colores.marino, 
    fontSize: 10,
     fontWeight: 'bold', 
     paddingHorizontal: 5,
      marginBottom: 6 },
  texto: { fontSize: 13, 
    letterSpacing: 1, 
    color: colores.texto },
});

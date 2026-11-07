import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Encabezado } from './Encabezado';
import { BarraInferior } from './BarraInferior';
import { colores } from './tema';

export const PantallaBase = ({ titulo, derecha, iconos, children }) => (
  <SafeAreaView style={s.container} edges={['top', 'bottom']}>
    {titulo || derecha ? (
      <View style={s.header}>
        {titulo ? <Encabezado texto={titulo} /> : <View />}
        {derecha}
      </View>
    ) : null}
    <ScrollView style={{ flex: 1 }} contentContainerStyle={s.contenido}>{children}</ScrollView>
    <BarraInferior iconos={iconos} />
  </SafeAreaView>
);
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colores.blanco },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 12 },
  contenido: { paddingHorizontal: 20, paddingTop: 6, paddingBottom: 24 },
});

import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Logo } from './Logo';
import { colores } from './tema';

export const PantallaAuth = ({ children }) => (
  <SafeAreaView style={s.container} edges={['top', 'bottom']}>
    <View style={s.tarjeta}>
      <ScrollView contentContainerStyle={s.contenido}>
        <View style={{ marginBottom: 36 }}><Logo tam={40} /></View>
        {children}
      </ScrollView>
    </View>
  </SafeAreaView>
);
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colores.azulClaro, padding: 16 },
  tarjeta: { flex: 1, backgroundColor: '#fff', borderRadius: 12 },
  contenido: { padding: 28, paddingTop: 48, paddingBottom: 32 },
});

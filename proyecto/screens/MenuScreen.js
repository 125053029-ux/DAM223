/* 1.ZONA DE IMPORTACIONES */
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Boton } from '../components';
import { grupos } from './grupos';
import * as S from './index';

/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION */
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  if (screen !== 'menu') {
    const Pantalla = S[screen];
    return <Pantalla />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.contenido}>
        <Text style={styles.titulo}>Menu de interfaces</Text>
        {grupos.map(([nombre, items]) => (
          <View key={nombre} style={styles.grupo}>
            <Text style={styles.seccion}>{nombre}</Text>
            {items.map(([texto, pantalla]) => (
              <Boton key={pantalla} titulo={texto.toUpperCase()} onPress={() => setScreen(pantalla)} />
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

/* 3.ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contenido: { alignItems: 'center', padding: 20 },
  titulo: { fontSize: 16, marginBottom: 10 },
  grupo: { alignItems: 'center', marginTop: 14 },
  seccion: { fontSize: 14, marginBottom: 4 },
});
/* 1.ZONA DE IMPORTACIONES */
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuScreen from './screens/MenuScreen';

/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function App() {
  return (
    <SafeAreaProvider>
      <MenuScreen />
    </SafeAreaProvider>
  );
}

import { View } from 'react-native';
import { PantallaBase, Campo, Boton, colores } from '../components';
export default function HabilidadFormScreen() {
  return (
    <PantallaBase titulo="Agregar habilidad" iconos={['home', 'volver']}>
      <View style={{ marginTop: 20 }}>
        <Campo placeholder="Habilidad..." />
        <Campo placeholder="Nivel (Basico, Medio, Amplio)..." />
        <Boton titulo="GUARDAR" color={colores.verde} pill={false} />
        <Boton titulo="Eliminar Habilidad" color={colores.rojo} pill={false} />
      </View>
    </PantallaBase>
  );
}

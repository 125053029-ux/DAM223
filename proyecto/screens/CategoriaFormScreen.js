import { View } from 'react-native';
import { PantallaBase, Campo, Boton, colores } from '../components';
export default function CategoriaFormScreen() {
  return (
    <PantallaBase titulo="Nueva categoria" iconos={['home', 'volver']}>
      <View style={{ marginTop: 20 }}>
        <Campo placeholder="Nombre de la categoria..." />
        <Campo placeholder="Descripcion..." style={{ height: 90 }} multiline />
        <Boton titulo="GUARDAR" color={colores.verde} pill={false} />
        <Boton titulo="Eliminar Categoria" color={colores.rojo} pill={false} />
      </View>
    </PantallaBase>
  );
}

import { Text } from 'react-native';
import { PantallaBase, TarjetaServicio, Boton, colores } from '../components';
export default function FavoritosScreen() {
  return (
    <PantallaBase titulo="Mis favoritos" iconos={['volver']}>
      <TarjetaServicio fecha="09 Oct 2026" titulo="Curso de PYTHON" />
      <Boton titulo="Eliminar de Favoritos" color={colores.rojo} pill={false} style={{ alignSelf: 'flex-end', paddingHorizontal: 8, paddingVertical: 2 }} />
      <Text style={{ color: colores.boton, fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginTop: 80 }}>
        Aqui iran apareciendo tus cursos favoritos :D
      </Text>
    </PantallaBase>
  );
}

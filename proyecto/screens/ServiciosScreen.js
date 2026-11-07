import { View } from 'react-native';
import { PantallaBase, FilaLista, TarjetaServicio, colores, EditarEliminar, Icono } from '../components';
export default function ServiciosScreen() {
  return (
    <PantallaBase titulo="Mis servicios" derecha={<Icono nombre="mas" tam={28} />}>
      {[['08 Oct 2026', 'Introduccion a HTML'], ['09 Oct 2026', 'Curso de PYTHON'], ['12 Oct 2026', 'Introduccion a CSS']].map(([f, t]) => (
        <View key={t} style={{ marginBottom: 10 }}>
          <TarjetaServicio fecha={f} titulo={t} />
          <EditarEliminar />
        </View>
      ))}
    </PantallaBase>
  );
}

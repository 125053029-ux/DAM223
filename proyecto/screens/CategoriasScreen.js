import { Text } from 'react-native';
import { PantallaBase, FilaLista, Seccion, colores, Icono } from '../components';
export default function CategoriasScreen() {
  return (
    <PantallaBase titulo="Categorias" derecha={<Icono nombre="mas" tam={28} />}>
      <Seccion titulo="Categorias registradas" />
      <FilaLista titulo="CODING" detalle="4 SERVICIOS" />
      <FilaLista titulo="MATHS" detalle="2 SERVICIOS" />
      <FilaLista titulo="ETICS" detalle="1 SERVICIO" />
      <Text style={{ color: colores.boton, fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
        Aqui iran apareciendo las categorias que agregues :D
      </Text>
    </PantallaBase>
  );
}

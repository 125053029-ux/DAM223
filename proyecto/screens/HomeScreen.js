import { View, Text } from 'react-native';
import { PantallaBase, Logo, Moneda, Seccion, Ficha, colores, Icono } from '../components';


export default function HomeScreen({ admin = false }) {
  const fila = { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' };
  return (
    <PantallaBase
      iconos={admin ? ['usuario', 'lista', 'puerta'] : ['usuario', 'corazon', 'puerta']}
      titulo=""
      derecha={
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Logo tam={30} />
          {!admin && <Moneda valor={10} />}
        </View>
      }
    >
      <Seccion titulo="Lo Mas Solicitado" icono="engrane" />
      <View style={fila}>
        <Icono nombre="flecha_izq" tam={22} />
        <Ficha icono="java" texto="Java" />
        <Ficha icono="python" texto="Python" />
        <Ficha icono="calculadora" />
      </View>

      <Seccion titulo="Categorias" icono="engrane" />
      <View style={fila}>
        <Ficha texto="CODING" />
        <Ficha texto="MATHS" />
        <Ficha texto="ETICS" />
      </View>
      <View style={{ backgroundColor: colores.azul, padding: 10, marginTop: 12, alignSelf: 'center', width: '75%' }}>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: colores.marino, letterSpacing: 1 }}>SERVICIOS:</Text>
        {['Python', 'CSS', 'JS', 'HTML'].map((t) => (
          <Text key={t} style={{ fontSize: 11, color: colores.marino, letterSpacing: 1 }}>- Introduccion a {t}</Text>
        ))}
      </View>

      <Seccion titulo="Servicios" icono={admin ? 'engrane' : 'lupa'} />
      <View style={fila}>
        <Icono nombre="flecha_izq" tam={22} />
        <Ficha icono="js" texto="JS" />
        <Ficha icono="html" texto="HTML" />
        <Icono nombre="mas" tam={26} style={{ marginLeft: 8 }} />
      </View>
    </PantallaBase>
  );
}

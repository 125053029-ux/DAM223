import { View, Text } from 'react-native';
import { PantallaBase, Avatar, Boton, colores } from '../components';
export default function ReportesScreen() {
  return (
    <PantallaBase titulo="Reportes" iconos={['usuario', 'lista', 'puerta']}>
      {[['PEDRO LOPEZ', 'Reporto a JUAN PEREZ: no se presento al curso', 'PENDIENTE'], ['ANA RUIZ', 'Reporto el servicio "Curso de PYTHON": contenido incorrecto', 'REVISADO']].map(([q, m, e]) => (
        <View key={q} style={{ borderWidth: 2, borderColor: '#555', padding: 6, marginBottom: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar ancho={28} alto={28} />
            <Text style={{ backgroundColor: colores.gris, fontSize: 10, fontWeight: 'bold', color: colores.marino, marginLeft: 6, paddingHorizontal: 4 }}>{q}</Text>
            <Text style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 'bold' }}><Text style={{ color: e === 'PENDIENTE' ? '#E6B800' : '#00C853' }}>● </Text>{e}</Text>
          </View>
          <Text style={{ fontSize: 13, letterSpacing: 1, fontWeight: 'bold', marginTop: 8 }}>{m}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Boton titulo="Revisar" color={colores.verde} pill={false} style={{ paddingHorizontal: 14 }} />
            <Boton titulo="Eliminar Reporte" color={colores.rojo} pill={false} style={{ paddingHorizontal: 14 }} />
          </View>
        </View>
      ))}
    </PantallaBase>
  );
}

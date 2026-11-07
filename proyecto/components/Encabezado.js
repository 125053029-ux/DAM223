import { Text } from 'react-native';
import { colores } from './tema';
export const Encabezado = ({ texto, style }) => (
  <Text style={[{ fontSize: 17, 
    fontWeight: '900', 
    color: colores.texto, 
    textTransform: 'uppercase' }, 
    style]}>{texto}</Text>
);

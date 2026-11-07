import { Text } from 'react-native';
import { colores } from './tema';
export const Enlace = ({ texto, style }) => (
  <Text style={[{ color: colores.boton, 
    fontWeight: 'bold', 
    fontSize: 14, 
    textAlign: 'center', 
    marginVertical: 6 }, style]}>{texto}</Text>
);

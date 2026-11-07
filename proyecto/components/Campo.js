import { TextInput, StyleSheet } from 'react-native';
export const Campo = ({ placeholder, secure, style, ...resto }) => (
  <TextInput style={[s.input, style]} placeholder={placeholder} placeholderTextColor="#333" secureTextEntry={secure} {...resto} />
);
const s = StyleSheet.create({
  input: { borderWidth: 1,
     borderColor: '#333',
      backgroundColor: '#fff',
       paddingVertical: 12, 
       paddingHorizontal: 10, 
       marginBottom: 14, 
       fontSize: 14, 
       fontWeight: 'bold' },
});

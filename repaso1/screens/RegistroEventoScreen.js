import { StyleSheet, View, Text, TextInput, Switch, Button, Alert, Platform } from 'react-native';
import { useState } from 'react';

const mostrarAlerta = (titulo, mensaje) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n ${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
};
export default function RegistroEventoScreen(){
  const [nombre,setNombre] =useState('');
  const [carrera,setCarrera]= useState('');
  const [semestre,setSemestre] =useState('');
  const [taller,setTaller]= useState(false);
  const [constancia,setConstancia] =useState(false);
  const [deportes,setDeportes]= useState(false);

  const enviarRegistro =() =>{
    if (nombre.trim() ==='' ||carrera.trim() === ''|| semestre.trim() === ''){
      mostrarAlerta('campos incompletos','debes llenar todos los campos'); 
    return;
}
    if (isNaN(semestre)) { //isNaN es como is not anumber
    mostrarAlerta('error', 'debe ser un numero');
    return;
 }
let textoTaller ='No';
let textoConstancia='No';
let textoDeportes= 'No';

    if (taller===true) {
    textoTaller='Sí';
    }
    if (constancia=== true) {
      textoConstancia = 'Sí';
    }
    if (deportes=== true) {
      textoDeportes ='Sí';
    }

    mostrarAlerta(
      'Registro enviado',
      `Nombre: ${nombre}\n
      Carrera: ${carrera}\n
      Semestre: ${semestre}\n
      \nTaller: ${textoTaller}\n
      Constancia: ${textoConstancia}\n
      Deportes: ${textoDeportes}`);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>registro de evento universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}/>
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}/>
      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric"
      />

      <Text style={styles.subtitulo}>Opciones</Text>
      <View style={styles.fila}>
        <Text style={styles.pregunta}>iras al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>
      <View style={styles.fila}>
        <Text style={styles.pregunta}>requieres constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>
      <View style={styles.fila}>
        <Text style={styles.pregunta}>participaras en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes}/>
      </View>
      <Button title="Enviar registro" onPress={enviarRegistro}/>
    </View>
  );
}

/* ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  pregunta: {
    fontSize: 16,
  },
});
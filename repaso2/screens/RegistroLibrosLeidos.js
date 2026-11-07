
import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
  Alert
} from 'react-native';

export default function RegistroLibrosLeidos() {

  // Estados de la aplicación
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);

  const [cargando, setCargando] = useState(false);

  // SplashScreen: mostrar bienvenida durante 2 segundos
  useEffect(() => {

    const tiempo = setTimeout(() => {
      setMostrarBienvenida(false);
    }, 2000);

    return () => clearTimeout(tiempo);

  }, []);

  // Función para agregar libros
  const agregarLibro = () => {

    // Validar que todos los campos estén llenos
    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {

      Alert.alert(
        'Campos incompletos',
        'Por favor, completa todos los campos.'
      );

      return;
    }

    // Activar indicador de carga
    setCargando(true);

    // Simular espera de 4 segundos
    setTimeout(() => {

      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim()
      };

      // Agregar libro a la lista
      setLibros((listaAnterior) => [
        ...listaAnterior,
        nuevoLibro
      ]);

      // Limpiar los TextInput
      setTitulo('');
      setAutor('');
      setGenero('');

      // Desactivar indicador
      setCargando(false);

      // Mostrar notificación
      Alert.alert(
        '¡Libro agregado!',
        'El libro se registró correctamente.'
      );

    }, 4000);

  };

  // Pantalla de bienvenida
  if (mostrarBienvenida) {

    return (

      <ImageBackground
        source={require('../assets/fondo1.jpg')}
        style={styles.fondo}
        resizeMode="cover"
      >

        <View style={styles.contenedorBienvenida}>

          <Text style={styles.tituloBienvenida}>
            Mis Libros Leídos
          </Text>

          <Text style={styles.textoBienvenida}>
            Bienvenido a tu biblioteca personal
          </Text>

        </View>

      </ImageBackground>

    );

  }

  // Pantalla principal
  return (

    <ImageBackground
      source={require('../assets/fondo1.jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >

      <View style={styles.contenedorPrincipal}>

        <Text style={styles.tituloPrincipal}>
          Registro de Libros Leídos
        </Text>

        <Text style={styles.descripcion}>
          Registra tus libros favoritos
        </Text>

        {/* Formulario */}

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#777"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#777"
          value={autor}
          onChangeText={setAutor}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#777"
          value={genero}
          onChangeText={setGenero}
        />

        {/* Botón Pressable */}

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado
          ]}
          onPress={agregarLibro}
          disabled={cargando}
        >

          <Text style={styles.textoBoton}>
            {cargando ? 'Guardando...' : 'Agregar libro'}
          </Text>

        </Pressable>

        {/* Indicador de carga */}

        {cargando && (

          <View style={styles.contenedorCarga}>

            <ActivityIndicator
              size="large"
              color="#704477"
            />

            <Text style={styles.textoCarga}>
              Guardando libro, espera 4 segundos...
            </Text>

          </View>

        )}

        {/* Lista de libros */}

        <Text style={styles.tituloLista}>
          Mis libros registrados
        </Text>

        <FlatList

          data={libros}

          keyExtractor={(item) => item.id}

          renderItem={({ item }) => (

            <View style={styles.tarjetaLibro}>

              <Text style={styles.nombreLibro}>
                {item.titulo}
              </Text>

              <Text style={styles.detalleLibro}>
                Autor: {item.autor}
              </Text>

              <Text style={styles.detalleLibro}>
                Género: {item.genero}
              </Text>

            </View>

          )}

          ListEmptyComponent={

            <Text style={styles.listaVacia}>
              Todavía no tienes libros registrados.
            </Text>

          }

        />

      </View>

    </ImageBackground>

  );

}

// Estilos de la aplicación
const styles = StyleSheet.create({

  fondo: {
    flex: 1
  },

  // Estilos de bienvenida

  contenedorBienvenida: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.50)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  tituloBienvenida: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  textoBienvenida: {
    color: '#FFFFFF',
    fontSize: 17,
    marginTop: 15,
    textAlign: 'center'
  },

  // Estilos de pantalla principal

  contenedorPrincipal: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.90)',
    padding: 20,
    paddingTop: 50
  },

  tituloPrincipal: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#58345F',
    textAlign: 'center',
    marginBottom: 10
  },

  descripcion: {
    fontSize: 15,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 25
  },

  // Estilos de TextInput

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B99BC0',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    marginBottom: 13
  },

  // Estilos del botón

  boton: {
    backgroundColor: '#704477',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5
  },

  botonPresionado: {
    backgroundColor: '#4F2D57'
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'
  },

  // Estilos del indicador

  contenedorCarga: {
    alignItems: 'center',
    marginTop: 15
  },

  textoCarga: {
    color: '#58345F',
    marginTop: 8,
    fontSize: 14
  },

  // Estilos de la lista

  tituloLista: {
    color: '#58345F',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12
  },

  tarjetaLibro: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#704477',
    elevation: 3
  },

  nombreLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#58345F',
    marginBottom: 5
  },

  detalleLibro: {
    fontSize: 14,
    color: '#444444',
    marginTop: 3
  },

  listaVacia: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 15,
    fontSize: 14
  }

});

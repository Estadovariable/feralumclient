/* 
import React, { useState } from 'react';
import {View,Text,TextInput,StyleSheet,FlatList,ScrollView,TouchableOpacity,Dimensions,} from 'react-native';

const Ox = () => {
  const [enviarFormulario, setEnviarFormulario] = useState(false);
  const [accesorios, setAccesorios] = useState([]);
  const [vidrios, setVidrios] = useState([]);
  const [perfiles, setPerfiles] = useState([]);

  const handleAgregarColumnaPerfiles = () => {
    setPerfiles([...perfiles, {}]);
    setEnviarFormulario(false);
  };

  const handleAgregarColumnaAccesorios = () => {
    setAccesorios([...accesorios, {}]);
    setEnviarFormulario(false);
  };

  const handleAgregarColumnaVidrios = () => {
    setVidrios([...vidrios, {}]);
    setEnviarFormulario(false);
  };

  const handleActualizarCampoPerfiles = (index, campo, valor) => {
    const perfilesActualizados = [...perfiles];
    perfilesActualizados[index][campo] = valor;
    setPerfiles(perfilesActualizados);
  };
  
  const handleActualizarCampoAccesorios = (index, campo, valor) => {
    const accesoriosActualizados = [...accesorios];
    accesoriosActualizados[index][campo] = valor;
    setAccesorios(accesoriosActualizados);
  };
  
  const handleActualizarCampoVidrios = (index, campo, valor) => {
    const vidriosActualizados = [...vidrios];
    vidriosActualizados[index][campo] = valor;
    setVidrios(vidriosActualizados);
  };


  const enviarDatosAlServidor = async () => {
    try {
      const data = {
        User: 'nombre_de_usuario', // Reemplaza con el valor correcto
        fecha: 'fecha', // Reemplaza con el valor correcto
        acabado: 'acabado', // Reemplaza con el valor correcto
        color: 'color', // Reemplaza con el valor correcto
        cantidad: 'cantidad', // Reemplaza con el valor correcto
        perfiles: perfiles.map((perfil) => ({
          ubicacion: perfil.ubicacion,
          referencia: perfil.referencia,
          cantidad: perfil.cantidad,
          desc: perfil.desc,
          longitud: perfil.longitud,
          corte: perfil.corte,
        })),
        accesorios: accesorios.map((accesorio) => ({
          ubicacion: accesorio.ubicacion,
          referencia: accesorio.referencia,
          cantidad: accesorio.cantidad,
          desc: accesorio.desc,
          longitud: accesorio.longitud,
          corte: accesorio.corte,
        })),
        vidrio: vidrios.map((vidrio) => ({
          ubicacion: vidrio.ubicacion,
          referencia: vidrio.referencia,
          cantidad: vidrio.cantidad,
          desc: vidrio.desc,
          longitud: vidrio.longitud,
          corte: vidrio.corte,
        })),
      };
  
      const response = await fetch(
        'https://aca6-2800-e2-1e80-fef-b0fb-2785-ca25-c9fc.ngrok.io/formulario',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
  
      // Verificar la respuesta del servidor si es necesario
  
      // Limpiar las tablas después de enviar los datos
      setPerfiles([]);
      setAccesorios([]);
      setVidrios([]);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      // Manejar el error en caso de que ocurra
    }
  };
  
  

  const renderItemPerfiles = ({ index, item }) => (
    <View style={styles.columnaContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ubicación:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoPerfiles(index, 'ubicacion', text)}
        value={item.ubicacion}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Referencia:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoPerfiles(index, 'referencia', text)}
        value={item.referencia}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cantidad:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoPerfiles(index, 'cantidad', text)}
        value={item.cantidad}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Desc:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoPerfiles(index, 'desc', text)}
        value={item.desc}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Longitud:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoPerfiles(index, 'longitud', text)}
        value={item.longitud}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Corte:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoPerfiles(index, 'corte', text)}
        value={item.corte}/>
      </View>

      <TouchableOpacity
        onPress={() => handleActualizarCampoPerfiles(index)}
        style={styles.eliminarButton}
      >
        <Text style={styles.eliminarButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItemAccesorios = ({ index, item }) => (
    <View style={styles.columnaContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ubicación:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoAccesorios(index, 'ubicacion', text)}
        value={item.ubicacion}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Referencia:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoAccesorios(index, 'referencia', text)}
        value={item.referencia}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cantidad:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoAccesorios(index, 'cantidad', text)}
        value={item.cantidad}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Desc:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoAccesorios(index, 'desc', text)}
        value={item.desc}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Longitud:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoAccesorios(index, 'longitud', text)}
        value={item.longitud}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Corte:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoAccesorios(index, 'corte', text)}
        value={item.corte}/>
      </View>

      <TouchableOpacity
        onPress={() => handleActualizarCampoAccesorios(index)}
        style={styles.eliminarButton}
      >
        <Text style={styles.eliminarButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItemVidrios = ({ index, item }) => (
    <View style={styles.columnaContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ubicación:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoVidrios(index, 'ubicacion', text)}
        value={item.ubicacion}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Referencia:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoVidrios(index, 'referencia', text)}
        value={item.referencia}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cantidad:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoVidrios(index, 'cantidad', text)}
        value={item.cantidad}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Desc:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoVidrios(index, 'desc', text)}
        value={item.desc}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Longitud:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoVidrios(index, 'longitud', text)}
        value={item.longitud}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Corte:</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => handleActualizarCampoVidrios(index, 'corte', text)}
        value={item.corte}/>
      </View>

      <TouchableOpacity
        onPress={() => handleActualizarCampoVidrios(index)}
        style={styles.eliminarButton}
      >
        <Text style={styles.eliminarButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Perfiles</Text>

      <FlatList
        data={perfiles}
        renderItem={renderItemPerfiles}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity
        onPress={handleAgregarColumnaPerfiles}
        style={styles.agregarButton}
      >
        <Text style={styles.agregarButtonText}>+</Text>
      </TouchableOpacity>


      <Text style={styles.heading}>Accesorios</Text>

      <FlatList
        data={accesorios}
        renderItem={renderItemAccesorios}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity
        onPress={handleAgregarColumnaAccesorios}
        style={styles.agregarButton}
      >
        <Text style={styles.agregarButtonText}>+</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Vidrios</Text>

      <FlatList
        data={vidrios}
        renderItem={renderItemVidrios}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity
        onPress={handleAgregarColumnaVidrios}
        style={styles.agregarButton}
      >
        <Text style={styles.agregarButtonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={enviarDatosAlServidor} style={styles.enviarFormularioButton}>
        <Text style={styles.enviarFormularioButtonText}>Enviar Formulario</Text>
      </TouchableOpacity>

      <Text>0</Text>
      <Text>0</Text>
      <Text>0</Text>
      <Text>0</Text>
      <Text>0</Text>
      <Text>0</Text>
      <Text>0</Text>
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  columnaContainer: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 10,
    width: screenWidth,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  eliminarButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  eliminarButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  agregarButton: {
    marginTop: 10,
    backgroundColor: 'green',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  agregarButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  enviarButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  enviarButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  enviarFormularioButton: {
    marginTop: 10,
    backgroundColor: 'purple',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  enviarFormularioButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Ox;

*/
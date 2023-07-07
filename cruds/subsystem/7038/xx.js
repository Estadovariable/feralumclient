import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/es';
import { serverUrl } from '../../../ServerConfig';

const Xx = () => {
  const [formulario, setFormulario] = useState({});
  const [sistema, setSistema] = useState('7038');
  const [subsistema, setSubsistema] = useState('Xx');
  const [fecha, setFecha] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [quienCrea, setQuienCrea] = useState('');
  const [paraQuien, setParaQuien] = useState('');
  const [direccion, setDireccion] = useState('');
  const [contacto, setContacto] = useState('');
  const [quienFabrica, setQuienFabrica] = useState('');
  const [alto, setAlto] = useState('');
  const [ancho, setAncho] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [cantidadModulos, setCantidadModulos] = useState('');
  const [ubicacion1, setUbicacion1] = useState("Cabezal");
  const [ubicacion2, setUbicacion2] = useState("Sillar");
  const [ubicacion3, setUbicacion3] = useState("Jamba");
  const [ubicacion4, setUbicacion4] = useState("Traslape Fijo");
  const [ubicacion5, setUbicacion5] = useState("Traslape chapa");
  const [ubicacion6, setUbicacion6] = useState("Enganche movil");
  const [ubicacion7, setUbicacion7] = useState("Enganche Fijo");
  const [ubicacion8, setUbicacion8] = useState("Horizontal Nave inf");
  const [ubicacion9, setUbicacion9] = useState("Horizontal inf N fija");
  const [ubicacion10, setUbicacion10] = useState("Horizontal supe N fija");
  const [ubicacion11, setUbicacion11] = useState("Horizontal sup");
  const [ubicacion12, setUbicacion12] = useState('');
  const [referencia1, setReferencia1] = useState("ALN 194");
  const [referencia2, setReferencia2] = useState("ALN 144");
  const [referencia3, setReferencia3] = useState("ALN 193");
  const [referencia4, setReferencia4] = useState("ALN 192");
  const [referencia5, setReferencia5] = useState("ALN 462");
  const [referencia6, setReferencia6] = useState("ALN 147");
  const [referencia7, setReferencia7] = useState("ALN 147");
  const [referencia8, setReferencia8] = useState("ALN 349");
  const [referencia9, setReferencia9] = useState("ALN 349");
  const [referencia10, setReferencia10] = useState("ALN 349");
  const [referencia11, setReferencia11] = useState("ALN 349");
  const [referencia12, setReferencia12] = useState('');
  const [cantidadPerfiles1, setCantidadPerfiles1] = useState('1');
  const [cantidadPerfiles2, setCantidadPerfiles2] = useState('1');
  const [cantidadPerfiles3, setCantidadPerfiles3] = useState('2');
  const [cantidadPerfiles4, setCantidadPerfiles4] = useState('2');
  const [cantidadPerfiles5, setCantidadPerfiles5] = useState('2');
  const [cantidadPerfiles6, setCantidadPerfiles6] = useState('4');
  const [cantidadPerfiles7, setCantidadPerfiles7] = useState('4');
  const [cantidadPerfiles8, setCantidadPerfiles8] = useState('2');
  const [cantidadPerfiles9, setCantidadPerfiles9] = useState('2');
  const [cantidadPerfiles10, setCantidadPerfiles10] = useState('2');
  const [cantidadPerfiles11, setCantidadPerfiles11] = useState('2');
  const [cantidadPerfiles12, setCantidadPerfiles12] = useState('');
  const [descuento1, setDescuento1] = useState('0');
  const [descuento2, setDescuento2] = useState('0');
  const [descuento3, setDescuento3] = useState('15');
  const [descuento4, setDescuento4] = useState('33');
  const [descuento5, setDescuento5] = useState('33');
  const [descuento6, setDescuento6] = useState('33');
  const [descuento7, setDescuento7] = useState('33');
  const [descuento8, setDescuento8] = useState('14');
  const [descuento9, setDescuento9] = useState('2');
  const [descuento10, setDescuento10] = useState('2');
  const [descuento11, setDescuento11] = useState('12');
  const [descuento12, setDescuento12] = useState('');
  const [longitud1, setLongitud1] = useState('');
  const [longitud2, setLongitud2] = useState('');
  const [longitud3, setLongitud3] = useState('');
  const [longitud4, setLongitud4] = useState('');
  const [longitud5, setLongitud5] = useState('');
  const [longitud6, setLongitud6] = useState('');
  const [longitud7, setLongitud7] = useState('');
  const [longitud8, setLongitud8] = useState('');
  const [longitud9, setLongitud9] = useState('');
  const [longitud10, setLongitud10] = useState('');
  const [longitud11, setLongitud11] = useState('');
  const [longitud12, setLongitud12] = useState('');
  const [accesorio1, setAccesorio1] = useState("Tornillo marco");
  const [accesorio2, setAccesorio2] = useState("Tornillo nave");
  const [accesorio3, setAccesorio3] = useState("Cerraduras media");
  const [accesorio4, setAccesorio4] = useState("Rodamiento acero");
  const [accesorio5, setAccesorio5] = useState("Felpas siliconadas");
  const [accesorio6, setAccesorio6] = useState("Empaques");
  const [accesorio7, setAccesorio7] = useState('');
  const [accesorio8, setAccesorio8] = useState('');
  const [accesorio9, setAccesorio9] = useState('');
  const [referenciaAccesorio1, setReferenciaAccesorio1] = useState("8 x 3/4");
  const [referenciaAccesorio2, setReferenciaAccesorio2] = useState("8 x 3/4");
  const [referenciaAccesorio3, setReferenciaAccesorio3] = useState("Sencilla media negra");
  const [referenciaAccesorio4, setReferenciaAccesorio4] = useState("5020");
  const [referenciaAccesorio5, setReferenciaAccesorio5] = useState('');
  const [referenciaAccesorio6, setReferenciaAccesorio6] = useState("vidrio 4mm");
  const [referenciaAccesorio7, setReferenciaAccesorio7] = useState('');
  const [referenciaAccesorio8, setReferenciaAccesorio8] = useState('');
  const [referenciaAccesorio9, setReferenciaAccesorio9] = useState('');
  const [cantidadAccesorio1, setCantidadAccesorio1] = useState('4');
  const [cantidadAccesorio2, setCantidadAccesorio2] = useState('16');
  const [cantidadAccesorio3, setCantidadAccesorio3] = useState('1');
  const [cantidadAccesorio4, setCantidadAccesorio4] = useState('4');
  const [cantidadAccesorio5, setCantidadAccesorio5] = useState('13');
  const [cantidadAccesorio6, setCantidadAccesorio6] = useState('16');
  const [cantidadAccesorio7, setCantidadAccesorio7] = useState('');
  const [cantidadAccesorio8, setCantidadAccesorio8] = useState('');
  const [cantidadAccesorio9, setCantidadAccesorio9] = useState('');
  const [especificacion1, setEspecificacion1] = useState("Miniboreal");
  const [especificacion2, setEspecificacion2] = useState("Miniboreal");
  const [calibre1, setCalibre1] = useState('4');
  const [calibre2, setCalibre2] = useState('4');
  const [alturaVidrio1, setAlturaVidrio1] = useState('');
  const [alturaVidrio2, setAlturaVidrio2] = useState('');
  const [anchoVidrio1, setAnchoVidrio1] = useState('');
  const [anchoVidrio2, setAnchoVidrio2] = useState('');
  const [cantidadVidrios1, setCantidadVidrios1] = useState('');
  const [cantidadVidrios2, setCantidadVidrios2] = useState('');



  const handleFechaChange = (event, selectedDate) => {
    setShowDatePicker(false); // Cerrar el DatePicker cuando se selecciona una fecha
    if (selectedDate) {
      setFecha(selectedDate);
    }
  };

  const handleMostrarDatePicker = () => {
    setShowDatePicker(true); // Mostrar el DatePicker al hacer clic en el botón o ícono
  };

  const handleEnviar = () => {
    const data = {
        sistema,
        subsistema,
        fecha,
        quienCrea,
        paraQuien,
        direccion,
        contacto,
        quienFabrica,
        alto,
        ancho,
        cantidad,
        cantidadModulos,
        ubicacion1,
        ubicacion2,
        ubicacion3,
        ubicacion4,
        ubicacion5,
        ubicacion6,
        ubicacion7,
        ubicacion8,
        ubicacion9,
        ubicacion10,
        ubicacion11,
        ubicacion12,
        referencia1,
        referencia2,
        referencia3,
        referencia4,
        referencia5,
        referencia6,
        referencia7,
        referencia8,
        referencia9,
        referencia10,
        referencia11,
        referencia12,
        cantidadPerfiles1,
        cantidadPerfiles2,
        cantidadPerfiles3,
        cantidadPerfiles4,
        cantidadPerfiles5,
        cantidadPerfiles6,
        cantidadPerfiles7,
        cantidadPerfiles8,
        cantidadPerfiles9,
        cantidadPerfiles10,
        cantidadPerfiles11,
        cantidadPerfiles12,
        descuento1,
        descuento2,
        descuento3,
        descuento4,
        descuento5,
        descuento6,
        descuento7,
        descuento8,
        descuento9,
        descuento10,
        descuento11,
        descuento12,
        longitud1,
        longitud2,
        longitud3,
        longitud4,
        longitud5,
        longitud6,
        longitud7,
        longitud8,
        longitud9,
        longitud10,
        longitud11,
        longitud12,
        accesorio1,
        accesorio2,
        accesorio3,
        accesorio4,
        accesorio5,
        accesorio6,
        accesorio7,
        accesorio8,
        accesorio9,
        referenciaAccesorio1,
        referenciaAccesorio2,
        referenciaAccesorio3,
        referenciaAccesorio4,
        referenciaAccesorio5,
        referenciaAccesorio6,
        referenciaAccesorio7,
        referenciaAccesorio8,
        referenciaAccesorio9,
        cantidadAccesorio1,
        cantidadAccesorio2,
        cantidadAccesorio3,
        cantidadAccesorio4,
        cantidadAccesorio5,
        cantidadAccesorio6,
        cantidadAccesorio7,
        cantidadAccesorio8,
        cantidadAccesorio9,
        especificacion1,
        especificacion2,
        calibre1,
        calibre2,
        alturaVidrio1,
        alturaVidrio2,
        anchoVidrio1,
        anchoVidrio2,
        cantidadVidrios1,
        cantidadVidrios2,
    };

    fetch(`${serverUrl}/formulario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(result => {
          // Manejar la respuesta del servidor
          console.log(result);
        })
        .catch(error => {
          // Manejar errores de la solicitud
          console.error('Error:', error);
        });
    console.log('Sistema:', sistema);
    console.log('Subsistema:', subsistema);
    console.log('Fecha:', fecha);
    console.log('Quién lo crea:', quienCrea);
    console.log('Para quién es el contrato:', paraQuien);
    console.log('Dirección:', direccion);
    console.log('Contacto:', contacto);
    console.log('Quién fabrica:', quienFabrica);
    console.log('Alto:', alto);
    console.log('Ancho:', ancho);
    console.log('Cantidad:', cantidad);
    console.log('Cantidad de módulos:', cantidadModulos);
    console.log('Ubicacion:'), ubicacion1;
    console.log('Ubicacion:'), ubicacion2;
    console.log('Ubicacion:'), ubicacion3;
    console.log('Ubicacion:'), ubicacion4;
    console.log('Ubicacion:'), ubicacion5;
    console.log('Ubicacion:'), ubicacion6;
    console.log('Ubicacion:'), ubicacion7;
    console.log('Ubicacion:'), ubicacion8;
    console.log('Ubicacion:'), ubicacion9;
    console.log('Ubicacion:'), ubicacion10;
    console.log('Ubicacion:'), ubicacion11;
    console.log('Ubicacion:'), ubicacion12;
    console.log('Referencia:'), referencia1;
    console.log('Referencia:'), referencia2;
    console.log('Referencia:'), referencia3;
    console.log('Referencia:'), referencia4;
    console.log('Referencia:'), referencia5;
    console.log('Referencia:'), referencia6;
    console.log('Referencia:'), referencia7;
    console.log('Referencia:'), referencia8;
    console.log('Referencia:'), referencia9;
    console.log('Referencia:'), referencia10;
    console.log('Referencia:'), referencia11;
    console.log('Referencia:'), referencia12;
    console.log('Cantidad de perfiles:'), cantidadPerfiles1;
    console.log('Cantidad de perfiles:'), cantidadPerfiles2;
    console.log('Cantidad de perfiles:'), cantidadPerfiles3;
    console.log('Cantidad de perfiles:'), cantidadPerfiles4;
    console.log('Cantidad de perfiles:'), cantidadPerfiles5;
    console.log('Cantidad de perfiles:'), cantidadPerfiles6;
    console.log('Cantidad de perfiles:'), cantidadPerfiles7;
    console.log('Cantidad de perfiles:'), cantidadPerfiles8;
    console.log('Cantidad de perfiles:'), cantidadPerfiles9;
    console.log('Cantidad de perfiles:'), cantidadPerfiles10;
    console.log('Cantidad de perfiles:'), cantidadPerfiles11;
    console.log('Cantidad de perfiles:'), cantidadPerfiles12;
    console.log('Descuento:'), descuento1;
    console.log('Descuento:'), descuento2;
    console.log('Descuento:'), descuento3;
    console.log('Descuento:'), descuento4;
    console.log('Descuento:'), descuento5;
    console.log('Descuento:'), descuento6;
    console.log('Descuento:'), descuento7;
    console.log('Descuento:'), descuento8;
    console.log('Descuento:'), descuento9;
    console.log('Descuento:'), descuento10;
    console.log('Descuento:'), descuento11;
    console.log('Descuento:'), descuento12;
    console.log('Longitud:'), longitud1;
    console.log('Longitud:'), longitud2;
    console.log('Longitud:'), longitud3;
    console.log('Longitud:'), longitud4;
    console.log('Longitud:'), longitud5;
    console.log('Longitud:'), longitud6;
    console.log('Longitud:'), longitud7;
    console.log('Longitud:'), longitud8;
    console.log('Longitud:'), longitud9;
    console.log('Longitud:'), longitud10;
    console.log('Longitud:'), longitud11;
    console.log('Longitud:'), longitud12;
    console.log('Accesorio:'), accesorio1;
    console.log('Accesorio:'), accesorio2;
    console.log('Accesorio:'), accesorio3;
    console.log('Accesorio:'), accesorio4;
    console.log('Accesorio:'), accesorio5;
    console.log('Accesorio:'), accesorio6;
    console.log('Accesorio:'), accesorio7;
    console.log('Accesorio:'), accesorio8;
    console.log('Accesorio:'), accesorio9;
    console.log('Referencia accesorio:'), referenciaAccesorio1;
    console.log('Referencia accesorio:'), referenciaAccesorio2;
    console.log('Referencia accesorio:'), referenciaAccesorio3;
    console.log('Referencia accesorio:'), referenciaAccesorio4;
    console.log('Referencia accesorio:'), referenciaAccesorio5;
    console.log('Referencia accesorio:'), referenciaAccesorio6;
    console.log('Referencia accesorio:'), referenciaAccesorio7;
    console.log('Referencia accesorio:'), referenciaAccesorio8;
    console.log('Referencia accesorio:'), referenciaAccesorio9;
    console.log('Cantidad accesorio:'), cantidadAccesorio1;
    console.log('Cantidad accesorio:'), cantidadAccesorio2;
    console.log('Cantidad accesorio:'), cantidadAccesorio3;
    console.log('Cantidad accesorio:'), cantidadAccesorio4;
    console.log('Cantidad accesorio:'), cantidadAccesorio5;
    console.log('Cantidad accesorio:'), cantidadAccesorio6;
    console.log('Cantidad accesorio:'), cantidadAccesorio7;
    console.log('Cantidad accesorio:'), cantidadAccesorio8;
    console.log('Cantidad accesorio:'), cantidadAccesorio9;
    console.log('Especificacion:'), especificacion1;
    console.log('Especificacion:'), especificacion2;
    console.log('Calibre:'), calibre1;
    console.log('Calibre:'), calibre2;
    console.log('Altura del vidrio:'), alturaVidrio1;
    console.log('Altura del vidrio:'), alturaVidrio2;
    console.log('Ancho del vidrio:'), anchoVidrio1;
    console.log('Ancho del vidrio:'), anchoVidrio2;
    console.log('Cantidad de vidrios:'), cantidadVidrios1;
    console.log('Cantidad de vidrios:'), cantidadVidrios2;
    console.log('Formulario:', data);



    // Restablecer los campos del formulario
    setFecha(new Date());
    setSistema('');
    setSubsistema('');
    setQuienCrea('');
    setParaQuien('');
    setDireccion('');
    setContacto('');
    setQuienFabrica('');
    setAlto('');
    setAncho('');
    setCantidad('');
    setCantidadModulos('');
    setUbicacion1('');
    setUbicacion2('');
    setUbicacion3('');
    setUbicacion4('');
    setUbicacion5('');
    setUbicacion6('');
    setUbicacion7('');
    setUbicacion8('');
    setUbicacion9('');
    setUbicacion10('');
    setUbicacion11('');
    setUbicacion12('');
    setReferencia1('');
    setReferencia2('');
    setReferencia3('');
    setReferencia4('');
    setReferencia5('');
    setReferencia6('');
    setReferencia7('');
    setReferencia8('');
    setReferencia9('');
    setReferencia10('');
    setReferencia11('');
    setReferencia12('');
    setCantidadPerfiles1('');
    setCantidadPerfiles2('');
    setCantidadPerfiles3('');
    setCantidadPerfiles4('');
    setCantidadPerfiles5('');
    setCantidadPerfiles6('');
    setCantidadPerfiles7('');
    setCantidadPerfiles8('');
    setCantidadPerfiles9('');
    setCantidadPerfiles10('');
    setCantidadPerfiles11('');
    setCantidadPerfiles12('');
    setDescuento1('');
    setDescuento2('');
    setDescuento3('');
    setDescuento4('');
    setDescuento5('');
    setDescuento6('');
    setDescuento7('');
    setDescuento8('');
    setDescuento9('');
    setDescuento10('');
    setDescuento11('');
    setDescuento12('');
    setLongitud1('');
    setLongitud2('');
    setLongitud3('');
    setLongitud4('');
    setLongitud5('');
    setLongitud6('');
    setLongitud7('');
    setLongitud8('');
    setLongitud9('');
    setLongitud10('');
    setLongitud11('');
    setLongitud12('');
    setAccesorio1('');
    setAccesorio2('');
    setAccesorio3('');
    setAccesorio4('');
    setAccesorio5('');
    setAccesorio6('');
    setAccesorio7('');
    setAccesorio8('');
    setAccesorio9('');
    setReferenciaAccesorio1('');
    setReferenciaAccesorio2('');
    setReferenciaAccesorio3('');
    setReferenciaAccesorio4('');
    setReferenciaAccesorio5('');
    setReferenciaAccesorio6('');
    setReferenciaAccesorio7('');
    setReferenciaAccesorio8('');
    setReferenciaAccesorio9('');
    setCantidadAccesorio1('');
    setCantidadAccesorio2('');
    setCantidadAccesorio3('');
    setCantidadAccesorio4('');
    setCantidadAccesorio5('');
    setCantidadAccesorio6('');
    setCantidadAccesorio7('');
    setCantidadAccesorio8('');
    setCantidadAccesorio9('');
    setEspecificacion1('');
    setEspecificacion2('');
    setCalibre1('');
    setCalibre2('');
    setAlturaVidrio1('');
    setAlturaVidrio2('');
    setAnchoVidrio1('');
    setAnchoVidrio2('');
    setCantidadVidrios1('');
    setCantidadVidrios2('');
  };

    useEffect(() => {
        const sumaLongitud1 = Number(ancho) - Number(descuento1);
        setLongitud1(sumaLongitud1.toString());

        const sumaLongitud2 = Number(ancho) - Number(descuento2);
        setLongitud2(sumaLongitud2.toString());

        const sumaLongitud3 = Number(alto) - Number(descuento3);
        setLongitud3(sumaLongitud3.toString());

        const sumaLongitud4 = Number(alto) - Number(descuento4);
        setLongitud4(sumaLongitud4.toString());

        const sumaLongitud5 = Number(alto) - Number(descuento5);
        setLongitud5(sumaLongitud5.toString());

        const sumaLongitud6 = Number(alto) - Number(descuento6);
        setLongitud6(sumaLongitud6.toString());

        const sumaLongitud7 = Number(alto) - Number(descuento6);
        setLongitud7(sumaLongitud7.toString());

        const sumaLongitud8 = (Number(ancho) / 4) - Number(descuento8);
        setLongitud8(sumaLongitud8.toString());

        const sumaLongitud9 = (Number(ancho) / 4) - Number(descuento9);
        setLongitud9(sumaLongitud9.toString());

        const sumaLongitud10 = (Number(ancho) / 4) - Number(descuento10);
        setLongitud10(sumaLongitud10.toString());

        const sumaLongitud11 = (Number(ancho) / 4) - Number(descuento11);
        setLongitud11(sumaLongitud11.toString());

        const sumaLongitud12 = Number(ancho) - Number(descuento12);
        setLongitud12(sumaLongitud12.toString());
        
        const functionAnchoVidrio1 = Number(ancho) / 4;
        setAnchoVidrio1(functionAnchoVidrio1.toString());

        const functionAnchoVidrio2 = Number(ancho) / 4;
        setAnchoVidrio2(functionAnchoVidrio2.toString());

        const functionAlturaVidrio1 = Number(alto) / 4;
        setAlturaVidrio1(functionAlturaVidrio1.toString());

        const functionAlturaVidrio2 = Number(alto) / 4;
        setAlturaVidrio2(functionAlturaVidrio2.toString());

    }, [alto, ancho, descuento1, descuento2, descuento3, descuento4, descuento4,
    descuento5, descuento6, descuento7, descuento8, descuento9, descuento10, descuento11, descuento12,
    alturaVidrio1, alturaVidrio2, anchoVidrio1, anchoVidrio2]);

  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>

        <View style={styles.containerTable}>
        <View style={styles.row}>
            <View style={styles.cell}>
            <Text>X</Text>
            </View>
            <View style={styles.cell}>
            <Text>X</Text>
            </View>
        </View>
        </View> 

        <Text style={{ marginTop: 20 }}>Sistema:</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => setSistema(text)}
            value={sistema}
        />

        <Text style={{ marginTop: 20 }}>Subsistema:</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => setSubsistema(text)}
            value={subsistema}
        />   

      <Text>Fecha:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={fecha ? moment(fecha).format('dddd, DD/MM/YYYY') : ''}
          editable={false} // Deshabilitar la edición directa del campo de entrada de texto
        />
        <Button title="S' fecha" onPress={handleMostrarDatePicker} />
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={fecha || new Date()} 
          display="spinner"
          onChange={handleFechaChange}
        />
      )}

      <Text style={{ marginTop: 20 }}>Quién lo crea:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setQuienCrea(text)}
        value={quienCrea}
      />

      <Text style={{ marginTop: 20 }}>Nombre del cliente:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setParaQuien(text)}
        value={paraQuien}
      />

      <Text style={{ marginTop: 20 }}>Dirección:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setDireccion(text)}
        value={direccion}
      />

      <Text style={{ marginTop: 20 }}>Celular/telefono del cliente:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={(text) => setContacto(text)}
        value={contacto}
      />

      <Text style={{ marginTop: 20 }}>Quién fabrica:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setQuienFabrica(text)}
        value={quienFabrica}
      />

      <Text style={{ marginTop: 20 }}>Cantidad:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={(text) => setCantidad(text)}
        value={cantidad}
      />

      <Text style={{ marginTop: 20 }}>Cantidad de módulos:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={(text) => setCantidadModulos(text)}
        value={cantidadModulos}
      />

        <Text style={{ marginTop: 20 }}>Alto:</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setAlto(text)}
            value={alto}
        />

        <Text style={{ marginTop: 20 }}>Ancho:</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setAncho(text)}
            value={ancho}
        />
        <Text style={{ marginTop: 20 }}>Perfiles</Text>
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion1}
            onValueChange={(value) => setUbicacion1(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia1}
            onValueChange={(value) => setReferencia1(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles1(text)}
            value={cantidadPerfiles1}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento1(text)}
            value={descuento1}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud1(text)}
            value={longitud1}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion2}
            onValueChange={(value) => setUbicacion2(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia2}
            onValueChange={(value) => setReferencia2(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles2(text)}
            value={cantidadPerfiles2}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento2(text)}
            value={descuento2}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud2(text)}
            value={longitud2}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion3}
            onValueChange={(value) => setUbicacion3(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia3}
            onValueChange={(value) => setReferencia3(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles3(text)}
            value={cantidadPerfiles3}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento3(text)}
            value={descuento3}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud3(text)}
            value={longitud3}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion4}
            onValueChange={(value) => setUbicacion4(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia4}
            onValueChange={(value) => setReferencia4(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles4(text)}
            value={cantidadPerfiles4}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento4(text)}
            value={descuento4}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud4(text)}
            value={longitud4}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion5}
            onValueChange={(value) => setUbicacion5(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia5}
            onValueChange={(value) => setReferencia5(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles5(text)}
            value={cantidadPerfiles5}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento5(text)}
            value={descuento5}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud5(text)}
            value={longitud5}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion6}
            onValueChange={(value) => setUbicacion6(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia6}
            onValueChange={(value) => setReferencia6(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles6(text)}
            value={cantidadPerfiles6}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento6(text)}
            value={descuento6}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud6(text)}
            value={longitud6}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion7}
            onValueChange={(value) => setUbicacion7(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia7}
            onValueChange={(value) => setReferencia7(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles7(text)}
            value={cantidadPerfiles7}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento7(text)}
            value={descuento7}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud7(text)}
            value={longitud7}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion8}
            onValueChange={(value) => setUbicacion8(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia8}
            onValueChange={(value) => setReferencia8(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles8(text)}
            value={cantidadPerfiles8}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento8(text)}
            value={descuento8}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud8(text)}
            value={longitud8}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion9}
            onValueChange={(value) => setUbicacion9(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia9}
            onValueChange={(value) => setReferencia9(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles9(text)}
            value={cantidadPerfiles9}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento9(text)}
            value={descuento9}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud9(text)}
            value={longitud9}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion10}
            onValueChange={(value) => setUbicacion10(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia10}
            onValueChange={(value) => setReferencia10(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles10(text)}
            value={cantidadPerfiles10}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento10(text)}
            value={descuento10}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud10(text)}
            value={longitud10}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion11}
            onValueChange={(value) => setUbicacion11(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia11}
            onValueChange={(value) => setReferencia11(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles11(text)}
            value={cantidadPerfiles11}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento11(text)}
            value={descuento11}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud11(text)}
            value={longitud11}
        />
        <Text style={{ marginTop: 20 }}>Ubicacion: </Text>
        <Picker
            selectedValue={ubicacion12}
            onValueChange={(value) => setUbicacion12(value)}
        >
            <Picker.Item label="Sillar" value={"Sillar"} />
            <Picker.Item label="Cabezal" value={"Cabezal"} />
            <Picker.Item label="Jamba" value={"Jamba"} />
            <Picker.Item label="Horizontal inf N fija" value={"Horizontal inf N fija"} />
            <Picker.Item label="Horizontal inf N movil" value={"Horizontal inf N movil"} />
            <Picker.Item label="Horizontal supe N fija" value={"Horizontal supe N fija"} />
            <Picker.Item label="Horizontal supe N movil" value={"Horizontal supe N movil"} />
            <Picker.Item label="Traslape Nave" value={"Traslape Nave"} />
            <Picker.Item label="Traslape Fijo" value={"Traslape Fijo"} />
            <Picker.Item label="Enganche Nave" value={"Enganche Nave"} />
            <Picker.Item label="Enganche Fijo" value={"Enganche Fijo"} />
            <Picker.Item label="Horizontal Nave inf" value={"Horizontal Nave inf"} />
            <Picker.Item label="Horizontal Nave sup" value={"Horizontal Nave sup"} />
            <Picker.Item label="Horizontal sup Nave fija" value={"Horizontal sup Nave fija"} />
            <Picker.Item label="Enganche movil" value={"Enganche movil"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Horizontal inf" value={"Horizontal inf"} />
            <Picker.Item label="Horizontal sup" value={"Horizontal sup"} />
            <Picker.Item label="Divisor" value={"Divisor"} />
            <Picker.Item label="Traslape" value={"Traslape"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Divisor 1 - 3 - 4 - 6" value={"Divisor 1 - 3 - 4 - 6"} />
            <Picker.Item label="Divisor 2 - 5" value={"Divisor 2 - 5"} />
            <Picker.Item label="Adaptador fijo" value={"Adaptador fijo"} />
            <Picker.Item label="Horizontal inferior N1 Y fijo parche" value={"Horizontal inferior N1 Y fijo parche"} />
            <Picker.Item label="Horizontal superior N1 y fijo parche" value={"Horizontal superior N1 y fijo parche"} />
            <Picker.Item label="Horizontal inferior N2 y N3" value={"Horizontal inferior N2 y N3"} />
            <Picker.Item label="Horizontal superior N2 y N3" value={"Horizontal superior N2 y N3"} />
            <Picker.Item label="Enchanche fijo parche" value={"Enchanche fijo parche"} />
            <Picker.Item label="Horizontal superior 1" value={"Horizontal superior 1"} />
            <Picker.Item label="Horizontal superior 2" value={"Horizontal superior 2"} />
            <Picker.Item label="Horizontal superior 3" value={"Horizontal superior 3"} />
            <Picker.Item label="Horizontal inferior 1" value={"Horizontal inferior 1"} />
            <Picker.Item label="Horizontal inferior 2" value={"Horizontal inferior 2"} />
            <Picker.Item label="Horizontal inf N fija O" value={"Horizontal inf N fija O"} />
            <Picker.Item label="Horizontal infe N movil y X" value={"Horizontal infe N movil y X"} />
            <Picker.Item label="Horizontal supe N movil X" value={"Horizontal supe N movil X"} />
            <Picker.Item label="Horizontal Sillar alfajia" value={"Horizontal Sillar alfajia"} />
            <Picker.Item label="Traslape chapa" value={"Traslape chapa"} />
            <Picker.Item label="Alfajia" value={"Alfajia"} />
            <Picker.Item label="Maletero" value={"Maletero"} />
            <Picker.Item label="Jamba nave" value={"Jamba nave"} />
            <Picker.Item label="Jamba fijo" value={"Jamba fijo"} />
            <Picker.Item label="Horizontal supe E inf nave 2" value={"Horizontal supe E inf nave 2"} />
            <Picker.Item label="Traslape nave1" value={"Traslape nave1"} />
            <Picker.Item label="Enganche nave 1 y 2" value={"Enganche nave 1 y 2"} />
            <Picker.Item label="Traslape nave 3" value={"Traslape nave 3"} />
            <Picker.Item label="Enganche nave 3" value={"Enganche nave 3"} />
            <Picker.Item label="Adaptador" value={"Adaptador"} />
            <Picker.Item label="Enganche nave 1 - 2 - 3" value={"Enganche nave 1 - 2 - 3"} />
            <Picker.Item label="Divisor naves y fijos" value={"Divisor naves y fijos"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referencia12}
            onValueChange={(value) => setReferencia12(value)}
        >
            <Picker.Item label="ALN 144" value={"ALN 144"} />
            <Picker.Item label="ALN 147" value={"ALN 147"} />
            <Picker.Item label="ALN 150" value={"ALN 150"} />
            <Picker.Item label="ALN 151" value={"ALN 151"} />
            <Picker.Item label="ALN 152" value={"ALN 152"} />
            <Picker.Item label="ALN 156" value={"ALN 156"} />
            <Picker.Item label="ALN 157" value={"ALN 157"} />
            <Picker.Item label="ALN 158" value={"ALN 158"} />
            <Picker.Item label="ALN 190" value={"ALN 190"} />
            <Picker.Item label="ALN 191" value={"ALN 191"} />
            <Picker.Item label="ALN 192" value={"ALN 192"} />
            <Picker.Item label="ALN 193" value={"ALN 193"} />
            <Picker.Item label="ALN 194" value={"ALN 194"} />
            <Picker.Item label="ALN 349" value={"ALN 349"} />
            <Picker.Item label="ALN 413" value={"ALN 413"} />
            <Picker.Item label="ALN 462" value={"ALN 462"} />
            <Picker.Item label="ALN 531" value={"ALN 531"} />
            <Picker.Item label="ALN 532" value={"ALN 532"} />
            <Picker.Item label="ALN 533" value={"ALN 533"} />
            <Picker.Item label="ALN 534" value={"ALN 534"} />
            <Picker.Item label="ALN 581" value={"ALN 581"} />
            <Picker.Item label="ALN 700" value={"ALN 700"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 701" value={"ALN 701"} />
            <Picker.Item label="ALN 702" value={"ALN 702"} />
            <Picker.Item label="ALN 703" value={"ALN 703"} />
            <Picker.Item label="ALN 704" value={"ALN 704"} />
            <Picker.Item label="ALN 705" value={"ALN 705"} />
            <Picker.Item label="ALN 706" value={"ALN 706"} />
            <Picker.Item label="ALN 707" value={"ALN 707"} />
            <Picker.Item label="ALN 708" value={"ALN 708"} />
            <Picker.Item label="ALN 775" value={"ALN 775"} />
            <Picker.Item label="ALN 840" value={"ALN 840"} />
            <Picker.Item label="ALN 841" value={"ALN 841"} />
            <Picker.Item label="ALN 1123" value={"ALN 1123"} />
            <Picker.Item label="ALN 1692" value={"ALN 1692"} />
            <Picker.Item label="ALN 1699" value={"ALN 1699"} />
            <Picker.Item label="ALN 1729" value={"ALN 1729"} />
            <Picker.Item label="ALN 1730" value={"ALN 1730"} />
            <Picker.Item label="ALN 1731" value={"ALN 1731"} />
            <Picker.Item label="ALN 1774" value={"ALN 1774"} />
            <Picker.Item label="ALN 1775" value={"ALN 1775"} />
            <Picker.Item label="ALN 1776" value={"ALN 1776"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Cantidad: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setCantidadPerfiles12(text)}
            value={cantidadPerfiles12}
        />
        <Text style={{ marginTop: 20 }}>Descuento: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setDescuento12(text)}
            value={descuento12}
        />
        <Text style={{ marginTop: 20 }}>Longitud: </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(text) => setLongitud12(text)}
            value={longitud12}
        />
        
        <Text style={{ marginTop: 20 }}>Accesorios </Text>
        <Text style={{ marginTop: 20 }}>Accesorio: </Text>
        <Picker
            selectedValue={accesorio1}
            onValueChange={(value) => setAccesorio1(value)}
        >
            <Picker.Item label="Tornillo marco" value={"Tornillo marco"} />
            <Picker.Item label="Tornillo nave" value={"Tornillo nave"} />
            <Picker.Item label="Rodamiento acero" value={"Rodamiento acero"} />
            <Picker.Item label="Guia superior" value={"Guia superior"} />
            <Picker.Item label="Guia inferior nave" value={"Guia inferior nave"} />
            <Picker.Item label="Guia inferior fija" value={"Guia inferior fija"} />
            <Picker.Item label="Chapa impacto doble" value={"Chapa impacto doble"} />
            <Picker.Item label="Chapa impacto sencilla" value={"Chapa impacto sencilla"} />
            <Picker.Item label="Topes" value={"Topes"} />
            <Picker.Item label="Felpa 5mm" value={"Felpa 5mm"} />
            <Picker.Item label="Empaques" value={"Empaques"} />
            <Picker.Item label="Cerradura impacto" value={"Cerradura impacto"} />
            <Picker.Item label="Felpas siliconadas" value={"Felpas siliconadas"} />
            <Picker.Item label="Cerraduras media" value={"Cerraduras media"} />
            <Picker.Item label="Cerradura overseas" value={"Cerradura overseas"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referenciaAccesorio1}
            onValueChange={(value) => setReferenciaAccesorio1(value)}
        >
            <Picker.Item label="10 x 1" value={"10 x 1"} />
            <Picker.Item label="10 x 1 1/2" value={"10 x 1"} />
            <Picker.Item label="ABB - 37mm (1/2'')" value={"ABB - 37mm (1/2'')"} />
            <Picker.Item label="8025" value={"8025"} />
            <Picker.Item label="8 x 3/4" value={"8 x 3/4"} />
            <Picker.Item label="De impacto" value={"De impacto"} />
            <Picker.Item label="U - 55" value={"U - 55"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN" value={"12 x 1 1/2 CAB PAN"} />
            <Picker.Item label="Tandem" value={"Tandem"} />
            <Picker.Item label="Pico loro" value={"Pico loro"} />
            <Picker.Item label="Tandem ABB - 7038" value={"Tandem ABB - 7038"} />
            <Picker.Item label="Guia plastica 7038" value={"Guia plastica 7038"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN ACERO" value={"12 x 1 1/2 CAB PAN ACERO"} />
            <Picker.Item label="U - 15" value={"U - 15"} />
            <Picker.Item label="Sencilla" value={"Sencilla"} />
            <Picker.Item label="5020" value={"5020"} />
            <Picker.Item label="Sencilla media negra" value={"Sencilla media negra"} />
            <Picker.Item label="vidrio 4mm" value={"vidrio 4mm"} />
        </Picker>


            <Text style={{ marginTop: 20 }}>Cantidad: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadAccesorio1(text)}
                value={cantidadAccesorio1}
            />
             <Text style={{ marginTop: 20 }}>Accesorio: </Text>
        <Picker
            selectedValue={accesorio2}
            onValueChange={(value) => setAccesorio2(value)}
        >
            <Picker.Item label="Tornillo marco" value={"Tornillo marco"} />
            <Picker.Item label="Tornillo nave" value={"Tornillo nave"} />
            <Picker.Item label="Rodamiento acero" value={"Rodamiento acero"} />
            <Picker.Item label="Guia superior" value={"Guia superior"} />
            <Picker.Item label="Guia inferior nave" value={"Guia inferior nave"} />
            <Picker.Item label="Guia inferior fija" value={"Guia inferior fija"} />
            <Picker.Item label="Chapa impacto doble" value={"Chapa impacto doble"} />
            <Picker.Item label="Chapa impacto sencilla" value={"Chapa impacto sencilla"} />
            <Picker.Item label="Topes" value={"Topes"} />
            <Picker.Item label="Felpa 5mm" value={"Felpa 5mm"} />
            <Picker.Item label="Empaques" value={"Empaques"} />
            <Picker.Item label="Cerradura impacto" value={"Cerradura impacto"} />
            <Picker.Item label="Felpas siliconadas" value={"Felpas siliconadas"} />
            <Picker.Item label="Cerraduras media" value={"Cerraduras media"} />
            <Picker.Item label="Cerradura overseas" value={"Cerradura overseas"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referenciaAccesorio2}
            onValueChange={(value) => setReferenciaAccesorio2(value)}
        >
            <Picker.Item label="10 x 1" value={"10 x 1"} />
            <Picker.Item label="10 x 1 1/2" value={"10 x 1"} />
            <Picker.Item label="ABB - 37mm (1/2'')" value={"ABB - 37mm (1/2'')"} />
            <Picker.Item label="8025" value={"8025"} />
            <Picker.Item label="8 x 3/4" value={"8 x 3/4"} />
            <Picker.Item label="De impacto" value={"De impacto"} />
            <Picker.Item label="U - 55" value={"U - 55"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN" value={"12 x 1 1/2 CAB PAN"} />
            <Picker.Item label="Tandem" value={"Tandem"} />
            <Picker.Item label="Pico loro" value={"Pico loro"} />
            <Picker.Item label="Tandem ABB - 7038" value={"Tandem ABB - 7038"} />
            <Picker.Item label="Guia plastica 7038" value={"Guia plastica 7038"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN ACERO" value={"12 x 1 1/2 CAB PAN ACERO"} />
            <Picker.Item label="U - 15" value={"U - 15"} />
            <Picker.Item label="Sencilla" value={"Sencilla"} />
            <Picker.Item label="5020" value={"5020"} />
            <Picker.Item label="Sencilla media negra" value={"Sencilla media negra"} />
            <Picker.Item label="vidrio 4mm" value={"vidrio 4mm"} />
            </Picker>


            <Text style={{ marginTop: 20 }}>Cantidad: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadAccesorio2(text)}
                value={cantidadAccesorio2}
            />
             <Text style={{ marginTop: 20 }}>Accesorio: </Text>
        <Picker
            selectedValue={accesorio3}
            onValueChange={(value) => setAccesorio3(value)}
        >
            <Picker.Item label="Tornillo marco" value={"Tornillo marco"} />
            <Picker.Item label="Tornillo nave" value={"Tornillo nave"} />
            <Picker.Item label="Rodamiento acero" value={"Rodamiento acero"} />
            <Picker.Item label="Guia superior" value={"Guia superior"} />
            <Picker.Item label="Guia inferior nave" value={"Guia inferior nave"} />
            <Picker.Item label="Guia inferior fija" value={"Guia inferior fija"} />
            <Picker.Item label="Chapa impacto doble" value={"Chapa impacto doble"} />
            <Picker.Item label="Chapa impacto sencilla" value={"Chapa impacto sencilla"} />
            <Picker.Item label="Topes" value={"Topes"} />
            <Picker.Item label="Felpa 5mm" value={"Felpa 5mm"} />
            <Picker.Item label="Empaques" value={"Empaques"} />
            <Picker.Item label="Cerradura impacto" value={"Cerradura impacto"} />
            <Picker.Item label="Felpas siliconadas" value={"Felpas siliconadas"} />
            <Picker.Item label="Cerraduras media" value={"Cerraduras media"} />
            <Picker.Item label="Cerradura overseas" value={"Cerradura overseas"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referenciaAccesorio3}
            onValueChange={(value) => setReferenciaAccesorio3(value)}
        >
            <Picker.Item label="10 x 1" value={"10 x 1"} />
            <Picker.Item label="10 x 1 1/2" value={"10 x 1"} />
            <Picker.Item label="ABB - 37mm (1/2'')" value={"ABB - 37mm (1/2'')"} />
            <Picker.Item label="8025" value={"8025"} />
            <Picker.Item label="8 x 3/4" value={"8 x 3/4"} />
            <Picker.Item label="De impacto" value={"De impacto"} />
            <Picker.Item label="U - 55" value={"U - 55"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN" value={"12 x 1 1/2 CAB PAN"} />
            <Picker.Item label="Tandem" value={"Tandem"} />
            <Picker.Item label="Pico loro" value={"Pico loro"} />
            <Picker.Item label="Tandem ABB - 7038" value={"Tandem ABB - 7038"} />
            <Picker.Item label="Guia plastica 7038" value={"Guia plastica 7038"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN ACERO" value={"12 x 1 1/2 CAB PAN ACERO"} />
            <Picker.Item label="U - 15" value={"U - 15"} />
            <Picker.Item label="Sencilla" value={"Sencilla"} />
            <Picker.Item label="5020" value={"5020"} />
            <Picker.Item label="Sencilla media negra" value={"Sencilla media negra"} />
            <Picker.Item label="vidrio 4mm" value={"vidrio 4mm"} />
            </Picker>


            <Text style={{ marginTop: 20 }}>Cantidad: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadAccesorio3(text)}
                value={cantidadAccesorio3}
            />
             <Text style={{ marginTop: 20 }}>Accesorio: </Text>
        <Picker
            selectedValue={accesorio4}
            onValueChange={(value) => setAccesorio4(value)}
        >
            <Picker.Item label="Tornillo marco" value={"Tornillo marco"} />
            <Picker.Item label="Tornillo nave" value={"Tornillo nave"} />
            <Picker.Item label="Rodamiento acero" value={"Rodamiento acero"} />
            <Picker.Item label="Guia superior" value={"Guia superior"} />
            <Picker.Item label="Guia inferior nave" value={"Guia inferior nave"} />
            <Picker.Item label="Guia inferior fija" value={"Guia inferior fija"} />
            <Picker.Item label="Chapa impacto doble" value={"Chapa impacto doble"} />
            <Picker.Item label="Chapa impacto sencilla" value={"Chapa impacto sencilla"} />
            <Picker.Item label="Topes" value={"Topes"} />
            <Picker.Item label="Felpa 5mm" value={"Felpa 5mm"} />
            <Picker.Item label="Empaques" value={"Empaques"} />
            <Picker.Item label="Cerradura impacto" value={"Cerradura impacto"} />
            <Picker.Item label="Felpas siliconadas" value={"Felpas siliconadas"} />
            <Picker.Item label="Cerraduras media" value={"Cerraduras media"} />
            <Picker.Item label="Cerradura overseas" value={"Cerradura overseas"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referenciaAccesorio4}
            onValueChange={(value) => setReferenciaAccesorio4(value)}
        >
            <Picker.Item label="10 x 1" value={"10 x 1"} />
            <Picker.Item label="10 x 1 1/2" value={"10 x 1"} />
            <Picker.Item label="ABB - 37mm (1/2'')" value={"ABB - 37mm (1/2'')"} />
            <Picker.Item label="8025" value={"8025"} />
            <Picker.Item label="8 x 3/4" value={"8 x 3/4"} />
            <Picker.Item label="De impacto" value={"De impacto"} />
            <Picker.Item label="U - 55" value={"U - 55"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN" value={"12 x 1 1/2 CAB PAN"} />
            <Picker.Item label="Tandem" value={"Tandem"} />
            <Picker.Item label="Pico loro" value={"Pico loro"} />
            <Picker.Item label="Tandem ABB - 7038" value={"Tandem ABB - 7038"} />
            <Picker.Item label="Guia plastica 7038" value={"Guia plastica 7038"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN ACERO" value={"12 x 1 1/2 CAB PAN ACERO"} />
            <Picker.Item label="U - 15" value={"U - 15"} />
            <Picker.Item label="Sencilla" value={"Sencilla"} />
            <Picker.Item label="5020" value={"5020"} />
            <Picker.Item label="Sencilla media negra" value={"Sencilla media negra"} />
            <Picker.Item label="vidrio 4mm" value={"vidrio 4mm"} />
            </Picker>


            <Text style={{ marginTop: 20 }}>Cantidad: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadAccesorio4(text)}
                value={cantidadAccesorio4}
            />
             <Text style={{ marginTop: 20 }}>Accesorio: </Text>
        <Picker
            selectedValue={accesorio5}
            onValueChange={(value) => setAccesorio5(value)}
        >
            <Picker.Item label="Tornillo marco" value={"Tornillo marco"} />
            <Picker.Item label="Tornillo nave" value={"Tornillo nave"} />
            <Picker.Item label="Rodamiento acero" value={"Rodamiento acero"} />
            <Picker.Item label="Guia superior" value={"Guia superior"} />
            <Picker.Item label="Guia inferior nave" value={"Guia inferior nave"} />
            <Picker.Item label="Guia inferior fija" value={"Guia inferior fija"} />
            <Picker.Item label="Chapa impacto doble" value={"Chapa impacto doble"} />
            <Picker.Item label="Chapa impacto sencilla" value={"Chapa impacto sencilla"} />
            <Picker.Item label="Topes" value={"Topes"} />
            <Picker.Item label="Felpa 5mm" value={"Felpa 5mm"} />
            <Picker.Item label="Empaques" value={"Empaques"} />
            <Picker.Item label="Cerradura impacto" value={"Cerradura impacto"} />
            <Picker.Item label="Felpas siliconadas" value={"Felpas siliconadas"} />
            <Picker.Item label="Cerraduras media" value={"Cerraduras media"} />
            <Picker.Item label="Cerradura overseas" value={"Cerradura overseas"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referenciaAccesorio5}
            onValueChange={(value) => setReferenciaAccesorio5(value)}
        >
            <Picker.Item label="10 x 1" value={"10 x 1"} />
            <Picker.Item label="10 x 1 1/2" value={"10 x 1"} />
            <Picker.Item label="ABB - 37mm (1/2'')" value={"ABB - 37mm (1/2'')"} />
            <Picker.Item label="8025" value={"8025"} />
            <Picker.Item label="8 x 3/4" value={"8 x 3/4"} />
            <Picker.Item label="De impacto" value={"De impacto"} />
            <Picker.Item label="U - 55" value={"U - 55"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN" value={"12 x 1 1/2 CAB PAN"} />
            <Picker.Item label="Tandem" value={"Tandem"} />
            <Picker.Item label="Pico loro" value={"Pico loro"} />
            <Picker.Item label="Tandem ABB - 7038" value={"Tandem ABB - 7038"} />
            <Picker.Item label="Guia plastica 7038" value={"Guia plastica 7038"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN ACERO" value={"12 x 1 1/2 CAB PAN ACERO"} />
            <Picker.Item label="U - 15" value={"U - 15"} />
            <Picker.Item label="Sencilla" value={"Sencilla"} />
            <Picker.Item label="5020" value={"5020"} />
            <Picker.Item label="Sencilla media negra" value={"Sencilla media negra"} />
            <Picker.Item label="vidrio 4mm" value={"vidrio 4mm"} />
            </Picker>


            <Text style={{ marginTop: 20 }}>Cantidad: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadAccesorio5(text)}
                value={cantidadAccesorio5}
            />
             <Text style={{ marginTop: 20 }}>Accesorio: </Text>
        <Picker
            selectedValue={accesorio6}
            onValueChange={(value) => setAccesorio6(value)}
        >
            <Picker.Item label="Tornillo marco" value={"Tornillo marco"} />
            <Picker.Item label="Tornillo nave" value={"Tornillo nave"} />
            <Picker.Item label="Rodamiento acero" value={"Rodamiento acero"} />
            <Picker.Item label="Guia superior" value={"Guia superior"} />
            <Picker.Item label="Guia inferior nave" value={"Guia inferior nave"} />
            <Picker.Item label="Guia inferior fija" value={"Guia inferior fija"} />
            <Picker.Item label="Chapa impacto doble" value={"Chapa impacto doble"} />
            <Picker.Item label="Chapa impacto sencilla" value={"Chapa impacto sencilla"} />
            <Picker.Item label="Topes" value={"Topes"} />
            <Picker.Item label="Felpa 5mm" value={"Felpa 5mm"} />
            <Picker.Item label="Empaques" value={"Empaques"} />
            <Picker.Item label="Cerradura impacto" value={"Cerradura impacto"} />
            <Picker.Item label="Felpas siliconadas" value={"Felpas siliconadas"} />
            <Picker.Item label="Cerraduras media" value={"Cerraduras media"} />
            <Picker.Item label="Cerradura overseas" value={"Cerradura overseas"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referenciaAccesorio6}
            onValueChange={(value) => setReferenciaAccesorio6(value)}
        >
            <Picker.Item label="10 x 1" value={"10 x 1"} />
            <Picker.Item label="10 x 1 1/2" value={"10 x 1"} />
            <Picker.Item label="ABB - 37mm (1/2'')" value={"ABB - 37mm (1/2'')"} />
            <Picker.Item label="8025" value={"8025"} />
            <Picker.Item label="8 x 3/4" value={"8 x 3/4"} />
            <Picker.Item label="De impacto" value={"De impacto"} />
            <Picker.Item label="U - 55" value={"U - 55"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN" value={"12 x 1 1/2 CAB PAN"} />
            <Picker.Item label="Tandem" value={"Tandem"} />
            <Picker.Item label="Pico loro" value={"Pico loro"} />
            <Picker.Item label="Tandem ABB - 7038" value={"Tandem ABB - 7038"} />
            <Picker.Item label="Guia plastica 7038" value={"Guia plastica 7038"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN ACERO" value={"12 x 1 1/2 CAB PAN ACERO"} />
            <Picker.Item label="U - 15" value={"U - 15"} />
            <Picker.Item label="Sencilla" value={"Sencilla"} />
            <Picker.Item label="5020" value={"5020"} />
            <Picker.Item label="Sencilla media negra" value={"Sencilla media negra"} />
            <Picker.Item label="vidrio 4mm" value={"vidrio 4mm"} />
            </Picker>


            <Text style={{ marginTop: 20 }}>Cantidad: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadAccesorio6(text)}
                value={cantidadAccesorio6}
            />
             <Text style={{ marginTop: 20 }}>Accesorio: </Text>
        <Picker
            selectedValue={accesorio7}
            onValueChange={(value) => setAccesorio7(value)}
        >
            <Picker.Item label="Tornillo marco" value={"Tornillo marco"} />
            <Picker.Item label="Tornillo nave" value={"Tornillo nave"} />
            <Picker.Item label="Rodamiento acero" value={"Rodamiento acero"} />
            <Picker.Item label="Guia superior" value={"Guia superior"} />
            <Picker.Item label="Guia inferior nave" value={"Guia inferior nave"} />
            <Picker.Item label="Guia inferior fija" value={"Guia inferior fija"} />
            <Picker.Item label="Chapa impacto doble" value={"Chapa impacto doble"} />
            <Picker.Item label="Chapa impacto sencilla" value={"Chapa impacto sencilla"} />
            <Picker.Item label="Topes" value={"Topes"} />
            <Picker.Item label="Felpa 5mm" value={"Felpa 5mm"} />
            <Picker.Item label="Empaques" value={"Empaques"} />
            <Picker.Item label="Cerradura impacto" value={"Cerradura impacto"} />
            <Picker.Item label="Felpas siliconadas" value={"Felpas siliconadas"} />
            <Picker.Item label="Cerraduras media" value={"Cerraduras media"} />
            <Picker.Item label="Cerradura overseas" value={"Cerradura overseas"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referenciaAccesorio7}
            onValueChange={(value) => setReferenciaAccesorio7(value)}
        >
            <Picker.Item label="10 x 1" value={"10 x 1"} />
            <Picker.Item label="10 x 1 1/2" value={"10 x 1"} />
            <Picker.Item label="ABB - 37mm (1/2'')" value={"ABB - 37mm (1/2'')"} />
            <Picker.Item label="8025" value={"8025"} />
            <Picker.Item label="8 x 3/4" value={"8 x 3/4"} />
            <Picker.Item label="De impacto" value={"De impacto"} />
            <Picker.Item label="U - 55" value={"U - 55"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN" value={"12 x 1 1/2 CAB PAN"} />
            <Picker.Item label="Tandem" value={"Tandem"} />
            <Picker.Item label="Pico loro" value={"Pico loro"} />
            <Picker.Item label="Tandem ABB - 7038" value={"Tandem ABB - 7038"} />
            <Picker.Item label="Guia plastica 7038" value={"Guia plastica 7038"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN ACERO" value={"12 x 1 1/2 CAB PAN ACERO"} />
            <Picker.Item label="U - 15" value={"U - 15"} />
            <Picker.Item label="Sencilla" value={"Sencilla"} />
            <Picker.Item label="5020" value={"5020"} />
            <Picker.Item label="Sencilla media negra" value={"Sencilla media negra"} />
            <Picker.Item label="vidrio 4mm" value={"vidrio 4mm"} />
            </Picker>


            <Text style={{ marginTop: 20 }}>Cantidad: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadAccesorio7(text)}
                value={cantidadAccesorio7}
            />
             <Text style={{ marginTop: 20 }}>Accesorio: </Text>
        <Picker
            selectedValue={accesorio8}
            onValueChange={(value) => setAccesorio8(value)}
        >
            <Picker.Item label="Tornillo marco" value={"Tornillo marco"} />
            <Picker.Item label="Tornillo nave" value={"Tornillo nave"} />
            <Picker.Item label="Rodamiento acero" value={"Rodamiento acero"} />
            <Picker.Item label="Guia superior" value={"Guia superior"} />
            <Picker.Item label="Guia inferior nave" value={"Guia inferior nave"} />
            <Picker.Item label="Guia inferior fija" value={"Guia inferior fija"} />
            <Picker.Item label="Chapa impacto doble" value={"Chapa impacto doble"} />
            <Picker.Item label="Chapa impacto sencilla" value={"Chapa impacto sencilla"} />
            <Picker.Item label="Topes" value={"Topes"} />
            <Picker.Item label="Felpa 5mm" value={"Felpa 5mm"} />
            <Picker.Item label="Empaques" value={"Empaques"} />
            <Picker.Item label="Cerradura impacto" value={"Cerradura impacto"} />
            <Picker.Item label="Felpas siliconadas" value={"Felpas siliconadas"} />
            <Picker.Item label="Cerraduras media" value={"Cerraduras media"} />
            <Picker.Item label="Cerradura overseas" value={"Cerradura overseas"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referenciaAccesorio8}
            onValueChange={(value) => setReferenciaAccesorio8(value)}
        >
            <Picker.Item label="10 x 1" value={"10 x 1"} />
            <Picker.Item label="10 x 1 1/2" value={"10 x 1"} />
            <Picker.Item label="ABB - 37mm (1/2'')" value={"ABB - 37mm (1/2'')"} />
            <Picker.Item label="8025" value={"8025"} />
            <Picker.Item label="8 x 3/4" value={"8 x 3/4"} />
            <Picker.Item label="De impacto" value={"De impacto"} />
            <Picker.Item label="U - 55" value={"U - 55"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN" value={"12 x 1 1/2 CAB PAN"} />
            <Picker.Item label="Tandem" value={"Tandem"} />
            <Picker.Item label="Pico loro" value={"Pico loro"} />
            <Picker.Item label="Tandem ABB - 7038" value={"Tandem ABB - 7038"} />
            <Picker.Item label="Guia plastica 7038" value={"Guia plastica 7038"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN ACERO" value={"12 x 1 1/2 CAB PAN ACERO"} />
            <Picker.Item label="U - 15" value={"U - 15"} />
            <Picker.Item label="Sencilla" value={"Sencilla"} />
            <Picker.Item label="5020" value={"5020"} />
            <Picker.Item label="Sencilla media negra" value={"Sencilla media negra"} />
            <Picker.Item label="vidrio 4mm" value={"vidrio 4mm"} />
            </Picker>


            <Text style={{ marginTop: 20 }}>Cantidad: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadAccesorio8(text)}
                value={cantidadAccesorio8}
            />
             <Text style={{ marginTop: 20 }}>Accesorio: </Text>
        <Picker
            selectedValue={accesorio9}
            onValueChange={(value) => setAccesorio9(value)}
        >
            <Picker.Item label="Tornillo marco" value={"Tornillo marco"} />
            <Picker.Item label="Tornillo nave" value={"Tornillo nave"} />
            <Picker.Item label="Rodamiento acero" value={"Rodamiento acero"} />
            <Picker.Item label="Guia superior" value={"Guia superior"} />
            <Picker.Item label="Guia inferior nave" value={"Guia inferior nave"} />
            <Picker.Item label="Guia inferior fija" value={"Guia inferior fija"} />
            <Picker.Item label="Chapa impacto doble" value={"Chapa impacto doble"} />
            <Picker.Item label="Chapa impacto sencilla" value={"Chapa impacto sencilla"} />
            <Picker.Item label="Topes" value={"Topes"} />
            <Picker.Item label="Felpa 5mm" value={"Felpa 5mm"} />
            <Picker.Item label="Empaques" value={"Empaques"} />
            <Picker.Item label="Cerradura impacto" value={"Cerradura impacto"} />
            <Picker.Item label="Felpas siliconadas" value={"Felpas siliconadas"} />
            <Picker.Item label="Cerraduras media" value={"Cerraduras media"} />
            <Picker.Item label="Cerradura overseas" value={"Cerradura overseas"} />
        </Picker> 

        <Text style={{ marginTop: 20 }}>Referencia: </Text>
        <Picker
            selectedValue={referenciaAccesorio9}
            onValueChange={(value) => setReferenciaAccesorio9(value)}
        >
            <Picker.Item label="10 x 1" value={"10 x 1"} />
            <Picker.Item label="10 x 1 1/2" value={"10 x 1"} />
            <Picker.Item label="ABB - 37mm (1/2'')" value={"ABB - 37mm (1/2'')"} />
            <Picker.Item label="8025" value={"8025"} />
            <Picker.Item label="8 x 3/4" value={"8 x 3/4"} />
            <Picker.Item label="De impacto" value={"De impacto"} />
            <Picker.Item label="U - 55" value={"U - 55"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN" value={"12 x 1 1/2 CAB PAN"} />
            <Picker.Item label="Tandem" value={"Tandem"} />
            <Picker.Item label="Pico loro" value={"Pico loro"} />
            <Picker.Item label="Tandem ABB - 7038" value={"Tandem ABB - 7038"} />
            <Picker.Item label="Guia plastica 7038" value={"Guia plastica 7038"} />
            <Picker.Item label="12 x 1 1/2 CAB PAN ACERO" value={"12 x 1 1/2 CAB PAN ACERO"} />
            <Picker.Item label="U - 15" value={"U - 15"} />
            <Picker.Item label="Sencilla" value={"Sencilla"} />
            <Picker.Item label="5020" value={"5020"} />
            <Picker.Item label="Sencilla media negra" value={"Sencilla media negra"} />
            <Picker.Item label="vidrio 4mm" value={"vidrio 4mm"} />
            </Picker>


            <Text style={{ marginTop: 20 }}>Cantidad: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadAccesorio9(text)}
                value={cantidadAccesorio9}
            />
          
            <Text style={{ marginTop: 20 }}>Vidrio </Text>
            <Text style={{ marginTop: 20 }}>Especificacion: </Text>
            <Picker
                selectedValue={especificacion1}
                onValueChange={(value) => setEspecificacion1(value)}
            >
                <Picker.Item label="Vidrio nave" value={"Vidrio nave"} />
                <Picker.Item label="Vidrio fijo" value={"Vidrio fijo"} />
                <Picker.Item label="Crudo" value={"Crudo"} />
                <Picker.Item label="Nave 1" value={"Nave 1"} />
                <Picker.Item label="Nave centro" value={"Nave centro"} />
                <Picker.Item label="Fijo parche" value={"Fijo parche"} />
                <Picker.Item label="Crudo naves" value={"Crudo naves"} />
                <Picker.Item label="Crudo fijo" value={"Crudo fijo"} />
                <Picker.Item label="Crudo fijo 1" value={"Crudo fijo 1"} />
                <Picker.Item label="Crudo fijo 2" value={"Crudo fijo 2"} />
                <Picker.Item label="Vidrio naves" value={"Vidrio naves"} />
                <Picker.Item label="Vidrio de fijo de parches" value={"Vidrio de fijo de parches"} />
                <Picker.Item label="Crudo 1" value={"Crudo 1"} />
                <Picker.Item label="Crudo 2" value={"Crudo 2"} />
                <Picker.Item label="Crudo 3" value={"Crudo 3"} />
                <Picker.Item label="Miniboreal" value={"Miniboreal"} />
            </Picker>

            <Text style={{ marginTop: 20 }}>Calibre: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCalibre1(text)}
                value={calibre1}
            />

            <Text style={{ marginTop: 20 }}>Medida: </Text>

            <Text style={{ marginTop: 20 }}>Altura: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setAlturaVidrio1(text)}
                value={alturaVidrio1}
            />
            <Text style={{ marginTop: 20 }}>Ancho: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setAnchoVidrio1(text)}
                value={anchoVidrio1}
            />
            <Text style={{ marginTop: 20 }}>Cantidad de vidrios: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadVidrios1(text)}
                value={cantidadVidrios1}
            />
            <Text style={{ marginTop: 20 }}>Especificacion: </Text>
            <Picker
                selectedValue={especificacion2}
                onValueChange={(value) => setEspecificacion2(value)}
            >
                <Picker.Item label="Vidrio nave" value={"Vidrio nave"} />
                <Picker.Item label="Vidrio fijo" value={"Vidrio fijo"} />
                <Picker.Item label="Crudo" value={"Crudo"} />
                <Picker.Item label="Nave 1" value={"Nave 1"} />
                <Picker.Item label="Nave centro" value={"Nave centro"} />
                <Picker.Item label="Fijo parche" value={"Fijo parche"} />
                <Picker.Item label="Crudo naves" value={"Crudo naves"} />
                <Picker.Item label="Crudo fijo" value={"Crudo fijo"} />
                <Picker.Item label="Crudo fijo 1" value={"Crudo fijo 1"} />
                <Picker.Item label="Crudo fijo 2" value={"Crudo fijo 2"} />
                <Picker.Item label="Vidrio naves" value={"Vidrio naves"} />
                <Picker.Item label="Vidrio de fijo de parches" value={"Vidrio de fijo de parches"} />
                <Picker.Item label="Crudo 1" value={"Crudo 1"} />
                <Picker.Item label="Crudo 2" value={"Crudo 2"} />
                <Picker.Item label="Crudo 3" value={"Crudo 3"} />
                <Picker.Item label="Miniboreal" value={"Miniboreal"} />
            </Picker>

            <Text style={{ marginTop: 20 }}>Calibre: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCalibre2(text)}
                value={calibre2}
            />

            <Text style={{ marginTop: 20 }}>Medida: </Text>

            <Text style={{ marginTop: 20 }}>Altura: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setAlturaVidrio2(text)}
                value={alturaVidrio2}
            />
            <Text style={{ marginTop: 20 }}>Ancho: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setAnchoVidrio2(text)}
                value={anchoVidrio2}
            />
            <Text style={{ marginTop: 20 }}>Cantidad de vidrios: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(text) => setCantidadVidrios2(text)}
                value={cantidadVidrios2}
            />
        <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
};

const styles = StyleSheet.create({
    containerTable: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 35,     
    },
    row: {
      flexDirection: 'row',
    },
    cell: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      width: 50,
      height: 100, 
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

export default Xx;

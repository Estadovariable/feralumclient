import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { Text, View, Button, StyleSheet, TouchableOpacity, TextInput, Modal, ScrollView, Image } from 'react-native';
import { serverUrl } from '../ServerConfig';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Plan = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [documentColors, setDocumentColors] = useState({});

  useEffect(() => {
    fetchDocuments();
    fetchDocumentColors();
  }, []);

  const imageUri = '../assets/logo_feralum.png.png';

  const generatePdf = async (document) => {
    const html = `
      <html>
        <body>
          <div style="position: absolute; top: 0; right: 0;">
            <p style="font-size: 14px;">Fecha: ${document.fecha.substring(0, 10)}</p>
          </div>
          <h1 style="color: red;">Feralum: Proceso</h1>
          <div style="display: flex; flex-direction: row;">
            <div>
              <p>Proceso creado por: ${document.quienCrea}</p>
              <p>Nombre del cliente: ${document.paraQuien}</p>
              <p>Contacto: ${document.contacto}</p>
              <p>Dirección: ${document.direccion}</p>
              <p>Quien lo fabricara: ${document.quienFabrica}</p>
            </div>
            <div  style="margin-left: 100px">
              <p>Sistema: ${document.sistema}</p>
              <p>SubSistema: ${document.subsistema}</p>
              <p>Alto: ${document.alto}</p>
              <p>Ancho: ${document.ancho}</p>
            </div>
          </div>

          <table style="border-collapse: collapse; width: 100%;">
          <caption style="color: black; font-weight: bold; margin-bottom: 10px; font-size: 20px; margin-top: 10px; ">Perfiles</caption>
          <thead>
            <tr>
              <th style="border: 1px solid black;">UBICACIÓN</th>
              <th style="border: 1px solid black;">REFERENCIA</th>
              <th style="border: 1px solid black;">CANTIDAD</th>
              <th style="border: 1px solid black;">DESCUENTO</th>
              <th style="border: 1px solid black;">LONGITUD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion1}</td>
              <td style="border: 1px solid black;">${document.referencia1}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles1}</td>
              <td style="border: 1px solid black;">${document.descuento1}</td>
              <td style="border: 1px solid black;">${document.longitud1}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion2}</td>
              <td style="border: 1px solid black;">${document.referencia2}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles2}</td>
              <td style="border: 1px solid black;">${document.descuento2}</td>
              <td style="border: 1px solid black;">${document.longitud2}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion3}</td>
              <td style="border: 1px solid black;">${document.referencia3}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles3}</td>
              <td style="border: 1px solid black;">${document.descuento3}</td>
              <td style="border: 1px solid black;">${document.longitud3}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion4}</td>
              <td style="border: 1px solid black;">${document.referencia4}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles4}</td>
              <td style="border: 1px solid black;">${document.descuento4}</td>
              <td style="border: 1px solid black;">${document.longitud4}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion5}</td>
              <td style="border: 1px solid black;">${document.referencia5}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles5}</td>
              <td style="border: 1px solid black;">${document.descuento5}</td>
              <td style="border: 1px solid black;">${document.longitud5}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion6}</td>
              <td style="border: 1px solid black;">${document.referencia6}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles6}</td>
              <td style="border: 1px solid black;">${document.descuento6}</td>
              <td style="border: 1px solid black;">${document.longitud6}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion7}</td>
              <td style="border: 1px solid black;">${document.referencia7}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles7}</td>
              <td style="border: 1px solid black;">${document.descuento7}</td>
              <td style="border: 1px solid black;">${document.longitud7}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion8}</td>
              <td style="border: 1px solid black;">${document.referencia8}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles8}</td>
              <td style="border: 1px solid black;">${document.descuento8}</td>
              <td style="border: 1px solid black;">${document.longitud8}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion9}</td>
              <td style="border: 1px solid black;">${document.referencia9}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles9}</td>
              <td style="border: 1px solid black;">${document.descuento9}</td>
              <td style="border: 1px solid black;">${document.longitud9}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion10}</td>
              <td style="border: 1px solid black;">${document.referencia10}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles10}</td>
              <td style="border: 1px solid black;">${document.descuento10}</td>
              <td style="border: 1px solid black;">${document.longitud10}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion11}</td>
              <td style="border: 1px solid black;">${document.referencia11}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles11}</td>
              <td style="border: 1px solid black;">${document.descuento11}</td>
              <td style="border: 1px solid black;">${document.longitud11}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.ubicacion12}</td>
              <td style="border: 1px solid black;">${document.referencia12}</td>
              <td style="border: 1px solid black;">${document.cantidadPerfiles12}</td>
              <td style="border: 1px solid black;">${document.descuento12}</td>
              <td style="border: 1px solid black;">${document.longitud12}</td>
            </tr>
          </tbody>
        </table>

        <table style="border-collapse: collapse; width: 100%;">
          <caption style="color: black; font-weight: bold; margin-bottom: 10px; font-size: 20px; margin-top: 10px;">Accesorios</caption>
          <thead>
            <tr>
              <th style="border: 1px solid black;">ACCESORIO</th>
              <th style="border: 1px solid black;">REFERENCIA</th>
              <th style="border: 1px solid black;">CANTIDAD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid black;">${document.accesorio1}</td>
              <td style="border: 1px solid black;">${document.referenciaAccesorio1}</td>
              <td style="border: 1px solid black;">${document.cantidadAccesorio1}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.accesorio2}</td>
              <td style="border: 1px solid black;">${document.referenciaAccesorio2}</td>
              <td style="border: 1px solid black;">${document.cantidadAccesorio2}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.accesorio3}</td>
              <td style="border: 1px solid black;">${document.referenciaAccesorio3}</td>
              <td style="border: 1px solid black;">${document.cantidadAccesorio3}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.accesorio4}</td>
              <td style="border: 1px solid black;">${document.referenciaAccesorio4}</td>
              <td style="border: 1px solid black;">${document.cantidadAccesorio4}</td>
            </tr>
           <tr>
            <td style="border: 1px solid black;">${document.accesorio5}</td>
            <td style="border: 1px solid black;">${document.referenciaAccesorio5}</td>
            <td style="border: 1px solid black;">${document.cantidadAccesorio5}</td>
          </tr>
          <tr>
            <td style="border: 1px solid black;">${document.accesorio6}</td>
            <td style="border: 1px solid black;">${document.referenciaAccesorio6}</td>
            <td style="border: 1px solid black;">${document.cantidadAccesorio6}</td>
          </tr>
          <tr>
            <td style="border: 1px solid black;">${document.accesorio7}</td>
            <td style="border: 1px solid black;">${document.referenciaAccesorio7}</td>
            <td style="border: 1px solid black;">${document.cantidadAccesorio7}</td>
          </tr>
          <tr>
            <td style="border: 1px solid black;">${document.accesorio8}</td>
            <td style="border: 1px solid black;">${document.referenciaAccesorio8}</td>
            <td style="border: 1px solid black;">${document.cantidadAccesorio8}</td>
          </tr>
          <tr>
            <td style="border: 1px solid black;">${document.accesorio9}</td>
            <td style="border: 1px solid black;">${document.referenciaAccesorio9}</td>
            <td style="border: 1px solid black;">${document.cantidadAccesorio9}</td>
          </tr>
          </tbody>
        </table>

        <table style="border-collapse: collapse; width: 100%;">
          <caption style="color: black; font-weight: bold; margin-bottom: 10px; font-size: 20px; margin-top: 10px;">Vidrio</caption>
          <thead>
            <tr>
              <th style="border: 1px solid black;">ESPECIFICACIÓN</th>
              <th style="border: 1px solid black;">CALIBRE</th>
              <th style="border: 1px solid black;">ALTURA</th>
              <th style="border: 1px solid black;">ANCHO</th>
              <th style="border: 1px solid black;">CANTIDAD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid black;">${document.especificacion1}</td>
              <td style="border: 1px solid black;">${document.calibre1}</td>
              <td style="border: 1px solid black;">${document.alturaVidrio1}</td>
              <td style="border: 1px solid black;">${document.anchoVidrio1}</td>
              <td style="border: 1px solid black;">${document.cantidadVidrios1}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black;">${document.especificacion2}</td>
              <td style="border: 1px solid black;">${document.calibre2}</td>
              <td style="border: 1px solid black;">${document.alturaVidrio2}</td>
              <td style="border: 1px solid black;">${document.anchoVidrio2}</td>
              <td style="border: 1px solid black;">${document.cantidadVidrios2}</td>
            </tr>
          </tbody>
        </table>
        </body>
      </html>
    `;

    try {
      const file = await printToFileAsync({
        html: html,
        base64: false
      });

      await shareAsync(file.uri);
    } catch (error) {
      console.error('Error al generar y compartir el PDF:', error);
    }
  };

  const fetchDocuments = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/tareas`);
      const data = await response.json();
      const sortedDocuments = data.sort((a, b) => {
        return new Date(b.fecha) - new Date(a.fecha);
      });
      setDocuments(sortedDocuments);
    } catch (error) {
      console.error('Error al obtener los documentos:', error);
    }
  };

  const fetchDocumentColors = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const documentColorKeys = keys.filter((key) => key.startsWith("documentColor:"));
      const colors = await AsyncStorage.multiGet(documentColorKeys);
      const documentColors = colors.reduce((result, [key, color]) => {
        const documentId = key.split(":")[1];
        return { ...result, [documentId]: color };
      }, {});
      setDocumentColors(documentColors);
    } catch (error) {
      console.error("Error al obtener los colores de los documentos:", error);
    }
  };

  const updateDocumentColor = async (documentId, color) => {
    setDocumentColors((prevColors) => ({
      ...prevColors,
      [documentId]: color,
    }));

    try {
      await AsyncStorage.setItem(
        `documentColor:${documentId}`,
        color
      );
    } catch (error) {
      console.error("Error al guardar el color del documento:", error);
    }
  };

  return (
    <View>
      <ScrollView>
        {documents.map((document) => (
          <View
            style={[
              styles.documentContainer,
              { backgroundColor: documentColors[document._id] || "#e8e8e8" },
            ]}
            key={document._id}
          >
            <Text style={styles.documentText}>Fecha: {document.fecha.substring(0, 10)}</Text>
            <Text style={styles.documentText}>Para quien: {document.paraQuien}</Text>
            <Text style={styles.documentText}>Quien Crea: {document.quienCrea}</Text>
            <TouchableOpacity style={styles.colorButton} onPress={() => generatePdf(document)}>
              <Text>PDF</Text>
            </TouchableOpacity>
            <View style={styles.buttonContext}>              
              <TouchableOpacity
                onPress={() => updateDocumentColor(document._id, "#71e35d")}
                style={styles.colorButton}
              >
                <Text>Completado</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => updateDocumentColor(document._id, "#e0dc67")}
                style={styles.colorButton}
              >
                <Text>En Ejecución</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => updateDocumentColor(document._id, "#db7b74")}
                style={styles.colorButton}
              >
                <Text>Cancelado</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  documentContainer: {
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  documentText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  colorButton: {
    backgroundColor: 'white',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  viewtext: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: 300,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0b375a',
  },
  buttonContext: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
});

export default Plan;

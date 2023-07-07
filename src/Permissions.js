import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Modal, TextInput, Alert, Keyboard, TouchableOpacity } from "react-native";
import { serverUrl } from '../ServerConfig';
import { Picker } from '@react-native-picker/picker';

const Permissions = ({ onClose }) => {
  const [searchedUser, setSearchedUser] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const [selectedPermission, setSelectedPermission] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);

  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/permissions`);
      const { isAdmin } = await response.json();
      setPermissions(["admin", "view", "edit"]);
      setSelectedPermission(isAdmin ? "admin" : "view");
    } catch (error) {
      console.error("Error fetching permissions:", error);
    }
  };

  const handleSearchUser = async () => {
    if (!searchedUser) {
      Alert.alert("Error", "Por favor, ingresa el correo del usuario");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${serverUrl}/api/user?email=${searchedUser}`);
      const { user } = await response.json();
      setFoundUser(user);
      setSelectedPermission(user?.permissions || "");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error searching user:", error);
      Alert.alert("Error", "Ha ocurrido un error al buscar el usuario");
    }
  };

  const handleSavePermissions = async () => {
    if (!foundUser || !selectedPermission) {
      Alert.alert("Error", "Por favor, selecciona un usuario y un permiso");
      return;
    }

    setIsLoading(true);

    try {
      await fetch(`${serverUrl}/api/permissions`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: foundUser.email,
          permission: selectedPermission,
        }),
      });

      setIsLoading(false);
      setSearchedUser("");
      setFoundUser(null);
      setSelectedPermission("");
      onClose(); // Llamada a la función onClose para cerrar el modal
    } catch (error) {
      setIsLoading(false);
      console.error("Error saving permissions:", error);
      Alert.alert("Error", "Ha ocurrido un error al guardar los permisos");
    }
  };

  const renderSearchResult = () => {
    if (isLoading) {
      return <Text>Cargando...</Text>;
    } else if (foundUser) {
      return (
        <View>
          <Text>Usuario encontrado:</Text>
          <Text>Correo: {foundUser.email}</Text>
          <Text>Permiso actual: {foundUser.permissions}</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    onClose(); // Llamada a la función onClose para cerrar el modal
  };

  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Editar permisos</Text>
          <Text style={styles.modalSubtitle}>Ingresa el correo del usuario:</Text>
          <TextInput
            style={styles.input}
            value={searchedUser}
            onChangeText={(text) => setSearchedUser(text)}
            placeholder="Correo del usuario"
          />
          <TouchableOpacity style={styles.touchableButton} onPress={handleSearchUser} disabled={isLoading}>
            <View style={styles.button111}>
              <Text style={styles.buttonText11}>Buscar</Text>
            </View>
          </TouchableOpacity>
          {renderSearchResult()}
          {foundUser && (
            <View>
              <Text style={styles.modalSubtitle}>Selecciona un permiso:</Text>
              <Picker
                selectedValue={selectedPermission}
                onValueChange={(itemValue) => setSelectedPermission(itemValue)}
              >
                {permissions.map((permission) => (
                  <Picker.Item
                    key={permission}
                    label={permission}
                    value={permission}
                  />
                ))}
              </Picker>
              <TouchableOpacity style={styles.touchableButton} onPress={handleSavePermissions} disabled={isLoading}>
                <View style={styles.button111}>
                  <Text style={styles.buttonText11}>Guardar</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.touchableButton} onPress={closeModal}>
            <View style={styles.button111}>
              <Text style={styles.buttonText11}>Cerrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 5,
    marginBottom: 10,
  },
  button111: {
    color: "#0b375a",
    fontSize: 16,
    backgroundColor: "#ffd90f",
    borderRadius: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 5,
    borderColor: "#0b375a",
    borderWidth: 1,
  },
  buttonText11: {
    color: "#0b375a",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Permissions;
